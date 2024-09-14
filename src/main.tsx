import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.tsx";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import ScrollToTop from "react-scroll-to-top";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <Toaster position="top-center" richColors />
    <ScrollToTop
      smooth={true}
      svgPath="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z"
      color="#111827"
      width="300"
      height="300"
      style={{
        background: "#fca5a5",
        padding: "10px 11px"
      }}
    />
  </StrictMode>
);
