import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <div class="verath-title">
      <img src={`${baseDir}static/verath-logo.png`} class="verath-logo" alt="Verath Logo" />
      <h1>{title}</h1>
    </div>
  )
}

PageTitle.css = `
.verath-title {
  text-align: center;
  margin-top: 2rem;
}

.verath-logo {
  height: 120px;
  margin-bottom: 10px;
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
