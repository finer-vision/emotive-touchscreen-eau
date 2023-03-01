import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import useSession from "@/hooks/useSession";
import { useIdleTimer } from 'react-idle-timer'
import { usePathState } from "@/state";

export const DEV = process.env.NODE_ENV === "development";

const Home = React.lazy(() => import("@/pages/home/home"));

export default function App() {
  const [state, setState] = React.useState<string>('Active')
  const [count, setCount] = React.useState<number>(0)
  const {path} = usePathState();

  const onIdle = () => {
    setState('Idle')
  }

  const onActive = () => {
    setState('Active')
  }

  const onAction = () => {
    setCount(count + 1)
  }

  useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 60000,
    throttle: 500
  })

  React.useEffect(() => {
    console.log("init")
    if (DEV) return;
    console.log("init2")
    if(state === "Active") {
      session.start();
      console.log("start")
    } else {
      session.end();
      console.log("end")
    }
  }, [state])

  const session = useSession(
    "https://analytics-server.finervision.com/api/save-sessions",
    "emotive-touchscreen-eau"
  );

  React.useEffect(() => {
    session.page(path)
  }, [path])

  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}