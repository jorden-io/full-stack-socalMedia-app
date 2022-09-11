import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { matrixFind } from "./snip";
import reportWebVitals from "./reportWebVitals";
matrixFind({ z: [[1, 2, 3]] }, 10);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
reportWebVitals();
