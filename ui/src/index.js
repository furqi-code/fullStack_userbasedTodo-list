import react_dom from "react-dom/client";
// import { App } from "./App";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "../src/components/home";
import { Login } from "../src/components/login";
import { SignUp } from "../src/components/signUp";
import { TaskInput } from "../src/components/task_input";
import { ShowTasks } from "../src/components/showTasks";
import { NotFound } from "../src/components/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <NotFound />,
    children: [
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: '/showTask',
        Component: ShowTasks
      },
      {
        path: "/addTask",
        Component: TaskInput,
      },
    ],
  },
]);

const root = react_dom.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={routes}></RouterProvider>);
