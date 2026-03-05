import { QuartzComponent } from "./types"
import { pathToRoot } from "../util/path"

const PageTitle: QuartzComponent = ({ fileData }) => {
  const baseDir = pathToRoot(fileData.slug!)
  const rootDir = baseDir.endsWith("/") ? baseDir : `${baseDir}/`

  return (
    <div class="verath-title">
      <img src={`${rootDir}static/verath-logo.png`} class="verath-logo" alt="Verath" />
    </div>
  )
}

export default (() => PageTitle) satisfies QuartzComponent

PageTitle.css = `
.verath-title {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.verath-logo {
  height: 120px;
}
`