import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.PageTitle()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Verath Repository": "https://github.com/rainmedown/VerathRPGEd",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [Component.Search(), Component.Darkmode(), Component.Explorer()],
  right: [Component.TableOfContents()],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [Component.Search(), Component.Darkmode(), Component.Explorer()],
  right: [Component.TableOfContents()],
}