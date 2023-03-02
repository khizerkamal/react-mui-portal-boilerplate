import { Navigate, Route } from "react-router-dom";
import PageWrapper from "../scenes/layout/PageWrapper";
import appRoutes from "./appRoutes";

const generateRoute = (routes) => {
  return routes.map((route, index) => (
    route.path === "/" ? (
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    ) : (
      <Route
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>
            {route.element}
          </PageWrapper>
        }
        key={index}
      >
        {route.child && (
          generateRoute(route.child)
        )}
      </Route>
    )
  ));
};

export const routes = generateRoute(appRoutes);