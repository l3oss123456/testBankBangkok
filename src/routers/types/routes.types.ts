import type { RouteObject } from "react-router-dom";

export interface IRouteConfig {
  publicRoute: ICustomRouteObj[];
  privateRoute: ICustomRouteObj[];
}

export interface ICustomRouteObj {
  route: RouteObject;
  isRenderLayout?: boolean;
}

export type RouteType = "publicRoute" | "privateRoute";
