/**
 * @component AppFooter
 * @description
 * Footer displayed across all authenticated application pages.
 * Presents system status, application version, quick links,
 * and copyright information in a compact layout.
 *
 * Architecture
 * - Uses useAppFooter() as its only data source.
 * - Child components remain presentation-only.
 * * Responsive Flexbox layout.
 * - Easily extendable for future dashboard metadata.
 */

import {
  FooterCopyright,
  FooterLinks,
  FooterStatus,
  FooterVersion,
} from ".";

import { useAppFooter } from "../hooks";

const AppFooter = () => {
  const {
    loading,

    apiStatus,
    serverStatus,
    region,

    version,

    links,

    copyright,
  } = useAppFooter();

  if (loading) {
    return (
      <footer
        className="
          border-t
          border-slate-800
          bg-slate-950
        "
      >
        <div
          className="
            flex
            h-20
            items-center
            justify-center
          "
        >
          <div
            className="
              h-8
              w-8
              animate-spin
              rounded-full
              border-4
              border-slate-700
              border-t-blue-500
            "
          />
        </div>
      </footer>
    );
  }

  return (
    <footer
      className="
        border-t
        border-slate-800
        bg-slate-950
        px-6
        py-5
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-5
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left Side */}

        <div
          className="
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-center
          "
        >
          <FooterStatus
            apiStatus={apiStatus}
            serverStatus={serverStatus}
            region={region}
          />

          <FooterVersion
            version={version}
          />
        </div>

        {/* Right Side */}

        <div
          className="
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-center
          "
        >
          <FooterLinks
            links={links}
          />

          <FooterCopyright
            copyright={copyright}
          />
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;