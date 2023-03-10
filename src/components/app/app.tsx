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
  const [started, setStarted] = React.useState(false)

  const session = useSession(
    "https://analytics-server.finervision.com/api/save-sessions",
    "emotive-touchscreen-eau"
  );

  React.useEffect(() => {
    if(path === "screensaver") return
    session.page(path)
  }, [path, session])

  useIdleTimer({
    timeout: 6000,
    onIdle: () => {
      setPath("screensaver")
      setStarted(false)
      session.end()
    },
    onAction: () => {
      if (!started) {
        setStarted(true)
        session.start()
      }
    },
    debounce: 500,
  })

  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}