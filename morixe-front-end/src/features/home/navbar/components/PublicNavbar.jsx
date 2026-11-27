import {
  AnnouncementBar,
  MobileMenu,
  MobileNavbar,
  NavbarActions,
  NavbarLanguage,
  NavbarLogo,
  NavbarMenu,
  NavbarSearch,
  NavbarThemeToggle,
} from ".";

const PublicNavbar = () => {
  return (
    <>
      {/* Announcement Banner */}
      <AnnouncementBar />

      {/* Navigation */}
      <header
        className="
          sticky
          top-0
          z-50
          w-full
          border-b
          border-slate-800/80
          bg-slate-950/70
          backdrop-blur-2xl
          supports-[backdrop-filter]:bg-slate-950/60
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-6
            xl:px-8
          "
        >
          {/* Left Side */}
          <div
            className="
              flex
              items-center
              gap-10
            "
          >
            <NavbarLogo />

            <NavbarMenu />
          </div>

          {/* Right Side */}
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <NavbarSearch />

            <NavbarLanguage />

            <NavbarThemeToggle />

            <NavbarActions />

            <MobileNavbar />
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu />
    </>
  );
};

export default PublicNavbar;