/**
 * ------------------------------------------------------------
 * Public Footer Data
 * ------------------------------------------------------------
 * Static content powering the public website footer.
 */

import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";

export const publicFooterData = {
  brand: {
    name: "MORIXE",
    slogan: "Secure Crypto Trading Platform",
    description:
      "Trade cryptocurrencies with confidence using institutional-grade security, lightning-fast execution, and powerful trading tools.",
  },

  sections: [
    {
      title: "Products",
      links: [
        { label: "Markets", href: "/markets" },
        { label: "Trading", href: "/trading" },
        { label: "Wallet", href: "/wallet" },
        { label: "Mobile App", href: "/mobile" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help-center" },
        { label: "Contact", href: "/contact" },
        { label: "API Docs", href: "/developers" },
        { label: "Status", href: "/status" },
      ],
    },
  ],

  socials: [
    {
      name: "GitHub",
      href: "#",
      icon: FaGithub,
    },
    {
      name: "X",
      href: "#",
      icon: FaXTwitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedin,
    },
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "YouTube",
      href: "#",
      icon: FaYoutube,
    },
  ],

  bottomLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],

  copyright: `© ${new Date().getFullYear()} MORIXE. All rights reserved.`,
};