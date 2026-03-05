import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Verath Compendium",
    pageTitleSuffix: " — RPG Edition",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "rainmedown.github.io/VerathRPGEd",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
  fontOrigin: "googleFonts",
  cdnCaching: false,
  typography: {
    header: "Cinzel",
    body: "Libre Baskerville",
    code: "JetBrains Mono"
  },
  colors: {
    lightMode: {
      light: "#1b1b1b",
      lightgray: "#2a2a2a",
      gray: "#6b6a65",
      darkgray: "#c9c4b5",
      dark: "#e6e1cf",
      secondary: "#8a7c5d",
      tertiary: "#bfa76f",
      highlight: "#2f2a1e",
    },
    darkMode: {
      light: "#e6e1cf",       // texto principal (pergaminho)
      lightgray: "#c9c4b5",
      gray: "#8a887f",
      darkgray: "#2a2a2a",
      dark: "#0f0f0f",        // fundo profundo
      secondary: "#8a7c5d",   // dourado velho
      tertiary: "#bfa76f",    // dourado claro
      highlight: "#1a1814",   // fundo de blocos
    }
  }
}
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage({
        showBacklinks: true,
      }),
      Plugin.FolderPage({
        showSubfolders: true,
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config