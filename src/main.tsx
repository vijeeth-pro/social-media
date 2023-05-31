import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/index.ts";
import { ConfigProvider, ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontFamily: "Poppins",
    colorPrimary: "#6358DC",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
