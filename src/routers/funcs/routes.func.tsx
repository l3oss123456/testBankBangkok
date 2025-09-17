import { Route } from "react-router-dom";
import { routesConfig } from "../routeConfig";
import type { ICustomRouteObj, RouteType } from "../types/routes.types";
import { JSX } from "react";

export const getListRoute = (routeType: RouteType): JSX.Element[] => {
  return routesConfig[`${routeType}`].map(
    (item: ICustomRouteObj, index: number) => {
      return (
        <Route
          key={index}
          path={item.route.path}
          //   element={<Layout>{item.route.element}</Layout>}
          element={<>{item.route.element}</>}
        />
      );
    }
  );
};
