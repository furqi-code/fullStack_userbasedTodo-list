import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "../src/components/home";
import { Login } from "../src/components/login";
import { SignUp } from "../src/components/signUp";
import { TaskInput } from "../src/components/task_input";
import { ForgotPassword } from "./components/forgotPassword";
import { ShowTasks } from "../src/components/showTasks";
import { NotFound } from "../src/components/NotFound";
import { HomeDesign } from "./components/homeDesign";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: HomeDesign,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/forgotPassword",
        Component: ForgotPassword,
      },
      {
        path: "/showTask",
        Component: ShowTasks,
      },
      {
        path: "/addTask",
        Component: TaskInput,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}
