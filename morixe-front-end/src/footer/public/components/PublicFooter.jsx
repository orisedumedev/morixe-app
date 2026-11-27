/**
 * @component PublicFooter
 * @description
 * Primary footer for all public-facing pages including the Landing Page.
 * Displays company branding, navigation links, newsletter signup,
 * social media links, and legal information.
 *
 * Architecture
 * - Data comes exclusively from usePublicFooter().
 * - Child components remain presentational.
 * - Responsive CSS Grid layout.
 * - Easily extendable with additional footer sections.
 */

import {
  FooterBottom,
  FooterBrand,
  FooterLinks,
  FooterNewsletter,
  FooterSocials,
} from ".";

import { usePublicFooter } from "../hooks";

const PublicFooter = () => {
  const {
    loading,

    brand,

    sections,

    socials,

    bottomLinks,

    copyright,
  } = usePublicFooter();

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
            mx-auto
            flex
            h-72
            max-w-7xl
            items-center
            justify-center
            px-6
          "
        >
          <div
            className="
              h-10
              w-10
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
        relative
        overflow-hidden
        border-t
        border-slate-800
        bg-slate-950
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-0
          top-0
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-[160px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald-500/10
          blur-[180px]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-20
        "
      >
        {/* Top Grid */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-12
          "
        >
          {/* Brand */}

          <div className="lg:col-span-4">
            <FooterBrand
              brand={brand}
            />
          </div>

          {/* Links */}

          <div
            className="
              grid
              gap-10
              sm:grid-cols-2
              lg:col-span-5
              lg:grid-cols-3
            "
          >
            {sections.map(
              (section) => (
                <FooterLinks
                  key={section.title}
                  title={section.title}
                  links={section.links}
                />
              )
            )}
          </div>

          {/* Newsletter */}

          <div className="lg:col-span-3">
            <FooterNewsletter />
          </div>
        </div>

        {/* Social */}

        <div className="mt-14">
          <FooterSocials
            socials={socials}
          />
        </div>

        {/* Bottom */}

        <FooterBottom
          copyright={copyright}
          links={bottomLinks}
        />
      </div>
    </footer>
  );
};

export default PublicFooter;