import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import logo from "../assets/react.svg";
import { Suspense } from "react";

// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React Logo" height={64} width={64} />

              <ul>
                {routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Routes>
              {routes.map(({ Component, path }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route
                path="*"
                element={<Navigate to={routes[0].to} replace />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
