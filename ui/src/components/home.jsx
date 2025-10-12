import { Header } from "./header";
import { Outlet } from "react-router";

export function Home() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}
