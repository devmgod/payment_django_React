import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { legacy_createStore as createStore} from 'redux'
import { Provider } from "react-redux";
import reducer from "../src/redux/index";

const FirstPage = lazy(() => import("./components/FirstPage"));
const Register = lazy(() => import("./components/register/index"));
const Dashboard = lazy(() => import("./components/dashboard"));
const Login = lazy(() => import("./components/login/index"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const Demo = () => {
  return (
    <Provider store={createStore(reducer)}>
      <Router>
        <Suspense fallback={<div> Loading... </div>}>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

root.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
