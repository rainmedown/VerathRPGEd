import { Component } from "./components"
import { Layout } from "./types"

export const defaultContentPageLayout: Layout = {
  beforeBody: [
    Component.PageTitle(),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.TableOfContents(),
    Component.ArticleNav(),
  ],
  right: [Component.Share()],
}

export const defaultListPageLayout: Layout = {
  beforeBody: [Component.PageTitle(), Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.TagList(),
    Component.ArticleNav(),
  ],
  right: [Component.Share()],
}