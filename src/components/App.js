import React, { useContext, Suspense, lazy, memo, useMemo } from "react";

import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import { Layout } from "antd";

import { useWindowWidth } from "../hooks/useWindowWidth";

import { AuthContext } from "../globalState/index";

import "./App.scss";
import "antd/dist/antd.css";

const Login = lazy(() => import("./Login"));
const Home = lazy(() => import("./Home"));
const Blank = lazy(() => import("./Blank"));

const Header = lazy(() => import("./shared/Header"));
const Sider = lazy(() => import("./shared/Sider"));
const Drawer = lazy(() => import("./shared/Drawer"));
const Footer = lazy(() => import("./shared/Footer"));
const NotFound = lazy(() => import("./shared/NotFound"));

const genericErrors = {
  401: {
    title: "Resource not Found",
    message: "Unable to load resource",
  },
  500: {
    title: "Internal Server Error",
    message: "The server was unable to complete your request.",
  },
  502: {
    title: "Bad Gateway",
    message: "The server was unable to complete your request.",
  },
  503: {
    title: "Service Unavailable",
    message: "The server was unable to complete your request.",
  },
};

function toastXHRError(code) {
  const error = genericErrors[code];
  error && console.error(error.title, error.message);
}

const paths = [
  {
    default: true,
    exact: true,
    slug: "/",
    route: "/",
    label: "Home",
    component: Home,
  },
  {
    default: true,
    exact: true,
    slug: "blank",
    route: "/blank",
    label: "Blank",
    component: Blank,
  },
];

// function isRender() {
//   return [
//     "/about-us",
//   ].includes(props.location.pathname);
// }

function RefComponent({ component: Comp }) {
  return <Comp />;
}

export default memo(
  withRouter(function App(props) {
    const [state] = useContext(AuthContext);

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        switch (error.response.status) {
          case 401:
            break;
          case 404:
            toastXHRError(404);
            break;
          case 500:
            toastXHRError(500);
            break;
          case 502:
            toastXHRError(502);
            break;
          case 503:
            toastXHRError(503);
            break;
          default:
            break;
        }
        return Promise.reject(error);
      }
    );
    axios.defaults.transformResponse = axios.defaults.transformResponse
      .concat
      // (response) => func(response)
      ();

    const width = useWindowWidth();

    const activeURL = useMemo(() => {
      const activeURL = props.location.pathname.split("/")[1];
      return activeURL ? activeURL : "/";
    }, [props.location.pathname]);

    return state.isAuthenticated ? (
      <Suspense fallback={<div />}>
        <Login />
      </Suspense>
    ) : (
      <Layout className="layout">
        {width >= 768 ? (
          <Suspense fallback={<div />}>
            <Sider {...props} paths={paths} activeURL={activeURL} />
          </Suspense>
        ) : (
          <Suspense fallback={<div />}>
            <Drawer {...props} paths={paths} activeURL={activeURL} />
          </Suspense>
        )}

        <Layout.Content>
          <Suspense fallback={<div />}>
            <Header {...props} paths={paths} />
          </Suspense>

          <Layout className="sub-layout">
            <Layout.Content className="sub-layout-content fade-in">
              <Switch>
                {window.scrollTo(0, 0)}
                {paths.map((path) => (
                  <Route
                    key={path.slug}
                    exact={path.exact}
                    path={path.route}
                    component={() => (
                      <Suspense fallback={<div />}>
                        <RefComponent component={path.component} />
                      </Suspense>
                    )}
                  />
                ))}
                <Route
                  component={() => (
                    <Suspense fallback={<div />}>
                      <NotFound />
                    </Suspense>
                  )}
                />
              </Switch>
            </Layout.Content>
            <Suspense fallback={<div />}>
              <Footer {...props} paths={paths} activeURL={activeURL} />
            </Suspense>
          </Layout>
        </Layout.Content>
      </Layout>
    );
  })
);
