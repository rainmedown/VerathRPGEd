import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
  <header class="verath-header">
    <a href="/">
      <img src="/static/verath-logo.png" alt="Verath" />
    </a>
    <div class="verath-title">
      <h1>VERATH</h1>
      <p>Codex of the Ruptured World</p>
    </div>
    {children}
  </header>
)
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
