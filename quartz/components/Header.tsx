@use "./base.scss";

body {
  background:
    url("/static/textures/parchment-dark.jpg"),
    radial-gradient(circle at top, #1a1814, #0b0b0b 60%);
  background-size: cover;
  background-blend-mode: multiply;
}

.page {
  max-width: 1200px;
}

h1, h2, h3, h4 {
  font-family: "Cinzel", serif;
  letter-spacing: 0.04em;
  color: #d6c89a;
}

a {
  color: #bfa76f;
}

a:hover {
  color: #e7d79a;
}

.explorer {
  background: #0f0f0f;
  border-right: 1px solid #2a2a2a;
}

blockquote, pre, code {
  background: #141312;
  border: 1px solid #2a2a2a;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: #2a2a2a;
}

.explorer {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid #2a2a2a;
  padding-right: 1rem;
}

import { QuartzComponent } from "./types"
import { pathToRoot } from "../util/path"

const PageTitle: QuartzComponent = ({ fileData }) => {
  const baseDir = pathToRoot(fileData.slug!)
  const rootDir = baseDir.endsWith("/") ? baseDir : `${baseDir}/`

  return (
    <div class="verath-title">
      <img src={`${rootDir}static/verath-logo.png`} class="verath-logo" alt="Verath Logo" />
    </div>
  )
}

export default (() => PageTitle) satisfies QuartzComponent

PageTitle.css = `
.verath-title {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.verath-logo {
  height: 120px;
}
`

import { QuartzComponent } from "./types"

const Header: QuartzComponent = () => {
  return null
}

export default (() => Header) satisfies QuartzComponent

Header.css = ``