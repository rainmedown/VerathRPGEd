import { QuartzComponent } from "./types"
import { pathToRoot } from "../util/path"

const PageTitle: QuartzComponent = ({ fileData }) => {
  const baseDir = pathToRoot(fileData.slug!)
  const rootDir = baseDir.endsWith("/") ? baseDir : `${baseDir}/`

  return (
    <div class="verath-header">
      <a class="verath-home" href={rootDir} aria-label="Verath">
        <img
          src={`${rootDir}static/verath-logo.png`}
          class="verath-logo"
          alt="Verath"
          decoding="async"
          loading="eager"
        />
      </a>
    </div>
  )
}

export default (() => PageTitle) satisfies QuartzComponent

PageTitle.css = `
.verath-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 0 1.25rem;
}

.verath-home {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.verath-logo {
  height: 140px;
  max-width: min(560px, 92vw);
  width: auto;
  object-fit: contain;
}

@media (max-width: 800px) {
  .verath-header {
    padding: 1.5rem 0 0.75rem;
  }

  .verath-logo {
    height: 110px;
  }
}
`