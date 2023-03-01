import { Path } from "@/state";
import React from "react";

type Session = {
  uuid: string;
  start: string;
  end: string;
  duration: number;
  sentToServer: boolean;
  pages: SessionPage[];
};

type SessionPage = {
  name: string;
  start: Date | string;
  end: Date | string;
  duration: number;
}

function getDateString(date: Date): string {
  const offset = date.getTimezoneOffset();
  const utcDate = new Date(date.getTime() - offset * 60 * 1000);
  let [dateString, timeString] = utcDate.toISOString().split("T");
  timeString = timeString.split(".")[0];
  return `${dateString} ${timeString}`;
}

function generateUuid(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getSessions(): Session[] {
  return JSON.parse(localStorage.getItem("analyticsSessions") ?? "[]");
}

function saveSession(session: Session) {
  const sessions = getSessions();
  const exists = sessions.some((item) => item.uuid === session.uuid);
  if (exists) return;
  sessions.push(session);
  localStorage.setItem("analyticsSessions", JSON.stringify(sessions));
}

function saveSessions(sessions: Session[]) {
  localStorage.setItem("analyticsSessions", JSON.stringify(sessions));
}

const DEVICE_ID =
  localStorage.getItem("analyticsSessionsDeviceId") ?? generateUuid();

localStorage.setItem("analyticsSessionsDeviceId", DEVICE_ID);

export default function useSession(analyticsEndpoint: string, projectId: string) {
  const currentSessionRef = React.useRef<Session>(null);

  const end = React.useCallback(() => {
    if (currentSessionRef.current === null) return;
    const start = new Date(currentSessionRef.current.start);
    const end = new Date();
    currentSessionRef.current.end = getDateString(end);
    currentSessionRef.current.duration = end.getTime() - start.getTime();
    currentSessionRef.current.pages.map((page) => {
      const start = page.start as Date;
      let end = page.end as Date;
      page.duration = end.getTime() - start.getTime();
      page.start = getDateString(start);
      page.end = getDateString(end);
      return page;
    });
    saveSession(currentSessionRef.current);
    currentSessionRef.current = null;
  }, []);

  const start = React.useCallback(() => {
    // Save current session (if there is one)
    if (currentSessionRef.current !== null) {
      end();
    }
    currentSessionRef.current = {
      uuid: generateUuid(),
      start: getDateString(new Date()),
      end: getDateString(new Date()),
      duration: 0,
      sentToServer: false,
      pages: [],
    };
  }, [end]);

  const page = (path: Path) => {
    if (currentSessionRef.current === null) return;

    // Set duration for previous page
    const prevPageIndex = currentSessionRef.current.pages.length - 1;
    if (prevPageIndex > -1) {
      currentSessionRef.current.pages[prevPageIndex].end = new Date();
    }

    currentSessionRef.current.pages.push({
      start: new Date(),
      end: new Date(),
      duration: 0,
      name: path,
    });
  }

  // Attempt to send locally cached sessions to the server
  React.useEffect(() => {
    const syncInterval = 5000;
    let timeout: NodeJS.Timeout;
    (async function syncSessionsWithServer() {
      try {
        const sessions = getSessions();
        const sessionsToSync = sessions.filter((session) => {
          return !session.sentToServer;
        });
        let sentToServer = false;
        const res = await fetch(analyticsEndpoint, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            deviceId: DEVICE_ID,
            projectId,
            sessions: sessionsToSync,
          }),
        });
        sentToServer = res.ok;
        sessions.forEach((session, index) => {
          const sessionToSync = sessionsToSync.find((sessionToSync) => {
            return sessionToSync.uuid === session.uuid;
          });
          if (sessionToSync === undefined) return;
          sessions[index].sentToServer = sentToServer;
        });
        saveSessions(sessions);
      } catch (err) {
        console.error(err);
      }
      timeout = setTimeout(syncSessionsWithServer, syncInterval);
    })();
    return () => {
      clearTimeout(timeout);
    };
  }, [analyticsEndpoint, projectId]);

  return React.useMemo(() => {
    return {
      start,
      end,
      page
    };
  }, [start, end, page]);
}