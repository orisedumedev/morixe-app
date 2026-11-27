import { Outlet } from "react-router-dom";
import { PublicNavbar } from "../navbar";
import { PublicFooter } from "@/footer/public";
import { PublicNavbarProvider } from "../navbar/context/PublicNavbarContext";

export function PublicLayout() {
  return (
    <PublicNavbarProvider>
      <PublicNavbar />

      <main>
        <Outlet />
      </main>

      <PublicFooter />
    </PublicNavbarProvider>
  );
}