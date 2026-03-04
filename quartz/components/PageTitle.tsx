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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1.5rem 0 2rem;
}

.verath-logo {
  height: 90px;
  width: auto;
  margin-bottom: 6px;
  image-rendering: auto;
  filter: drop-shadow(0 12px 20px rgba(0,0,0,.5));
}

.verath-title h1 {
  margin: 0;
  letter-spacing: 0.08em;
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
