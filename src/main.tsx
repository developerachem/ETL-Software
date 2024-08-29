import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App.tsx";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.tsx";
import Loader from "./components/loader/Loader.tsx";
import "./index.css";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div> div</div>}>
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <Toaster />
          <App />
        </Provider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
