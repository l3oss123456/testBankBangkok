import type { IRouteConfig } from "./types/routes.types";
import TodoListPage from "../features/todo/pages/TodoList";

export const routesConfig: IRouteConfig = {
  publicRoute: [
    {
      route: {
        path: "/",
        element: <TodoListPage />,
        // element: React.createElement(TodoListPage),
      },
    },
  ],
  privateRoute: [],
};
