//v3
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "@/components/app/app";
import config from "@/config/config";
import assets from "./config/assets";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement!);
const VERSION = "1.0.0";
const DEV = process.env.NODE_ENV === "development";

if ("serviceWorker" in navigator && !DEV) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(`./sw.js?v=${VERSION}`)
      .then((registration) => {
        registration.onupdatefound = () => {
          const serviceWorker = registration.installing;
          if (serviceWorker == null) return;
          let updating = false;
          serviceWorker.onstatechange = () => {
            if (
              serviceWorker.state === "installed" &&
              navigator.serviceWorker.controller &&
              registration &&
              registration.waiting
            ) {
              updating = true;
              registration.waiting.postMessage({ type: "SKIP_WAITING" });
            }

            if (updating && serviceWorker.state === "activated") {
              registration
                .update()
                .then(() => {
                    window.location.reload();
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          };
        };
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

for (const asset in assets) {
  fetch(assets[asset]).catch(err => console.error(err))
}

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);