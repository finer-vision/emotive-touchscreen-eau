import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import useSession from "@/hooks/useSession";
import { useIdleTimer } from 'react-idle-timer'
import { usePathState } from "@/state";

export const DEV = process.env.NODE_ENV === "development";

const Home = React.lazy(() => import("@/pages/home/home"));

export default function App() {
  const {path, setPath} = usePathState();

  const session = useSession(
    "https://analytics-server.finervision.com/api/save-sessions",
    "emotive-touchscreen-eau"
  );

  React.useEffect(() => {
    session.page(path)
  }, [path])

  React.useEffect(() => {
    if (path === "home") return;

    let timeout: NodeJS.Timeout;

    function startIdleTimeout() {
      if (timeout !== undefined) {
        session.start()
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        session.end()
      }, 60000);
    }

    startIdleTimeout();
    window.addEventListener("pointerdown", startIdleTimeout);
    return () => {
      window.removeEventListener("pointerdown", startIdleTimeout);
    };
  }, [path]);

  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}