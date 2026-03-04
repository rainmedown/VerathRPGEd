import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  // pathToRoot can return "." (no trailing slash). Normalize so we never generate ".static/...".
  const rootDir = baseDir.endsWith("/") ? baseDir : `${baseDir}/`

  return (
    <div class="verath-title">
      <img src={`${rootDir}static/verath-logo.png`} class="verath-logo" alt="Verath Logo" />
      <h1>{title}</h1>
    </div>
  )
}

PageTitle.css = `
.verath-title {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 0 8px;
}

.verath-logo {
  height: 64px;
  width: auto;
  image-rendering: auto;
  filter: drop-shadow(0 10px 18px rgba(0,0,0,.45));
}

.verath-title h1 {
  margin: 0;
  letter-spacing: 0.06em;
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
