import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import useSession from "@/hooks/useSession";
import { Path, usePathState } from "@/state";

export const DEV = process.env.NODE_ENV === "development";

const Home = React.lazy(() => import("@/pages/home/home"));

export default function App() {
  const { path, setPath } = usePathState();

  const session = useSession(
    "https://analytics-server.finervision.com/api/save-sessions",
    "emotive-touchscreen-eau"
  );

  const lastPathRef = React.useRef<Path>(path);
  React.useEffect(() => {
    if (lastPathRef.current === "screensaver" && path !== "screensaver") {
      session.start();
    }
    lastPathRef.current = path;
  }, [path, session]);

  React.useEffect(() => {
    switch (path) {
      case "screensaver":
        session.end();
        break;
      default:
        session.page(path);
        break;
    }
  }, [path, session]);

  const pathRef = React.useRef<Path>(path);
  React.useEffect(() => {
    pathRef.current = path;
  }, [path]);

  React.useEffect(() => {
    if (path === "screensaver") return;

    let timeout: NodeJS.Timeout;

    function resetTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setPath("screensaver");
      }, 60000);
    }

    resetTimeout();
    window.addEventListener("pointerdown", resetTimeout);
    return () => {
      window.removeEventListener("pointerdown", resetTimeout);
      clearTimeout(timeout);
    };
  }, [path, session]);

  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}
