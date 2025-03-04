import type { Options, ThemeConfig } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

import { themes } from "prism-react-renderer";

const url = new URL("https://radio-aktywne.github.io/docs");

export default {
  baseUrl: url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`,
  favicon: "favicon.svg?v=1",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    // Enable image zoom
    "docusaurus-plugin-zooming",
  ],

  presets: [
    [
      "classic",
      {
        // Disable blog
        blog: false,

        docs: {
          // Use src directory for docs
          path: "src/",

          // Use docs on root
          routeBasePath: "/",

          // Use autogenerated sidebar
          sidebarPath: undefined,
        },

        theme: {
          customCss: "custom.css",
        },
      } satisfies Options,
    ],
  ],

  themeConfig: {
    navbar: {
      items: [
        {
          "aria-label": "GitHub repository",
          className: "header-github-link",
          href: "https://github.com/radio-aktywne/docs",
          position: "right",
        },
      ],

      logo: {
        alt: "radio-aktywne docs logo",
        src: "logo.svg?v=1",
      },

      title: "radio-aktywne docs",
    },

    prism: {
      darkTheme: themes.dracula,
      theme: themes.github,
    },

    zooming: {
      background: {
        dark: "rgb(27,27,29)",
        light: "rgb(250,250,250)",
      },

      options: {
        scaleExtra: 2.0,
      },
    },
  } satisfies ThemeConfig,

  title: "radio-aktywne docs",
  url: `${url.protocol}//${url.host}`,
} satisfies Config;
