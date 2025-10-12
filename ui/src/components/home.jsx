import { TaskContextProvider } from "../store/contextTask";
import { Header } from "./header";
import { Outlet } from "react-router";

export function Home() {
  return (
    <>
      <TaskContextProvider>
        <Header></Header>
        <Outlet></Outlet>
      </TaskContextProvider>
    </>
  );
}