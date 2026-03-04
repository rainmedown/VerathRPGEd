import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = () => {
  return (
    <header class="verath-header">
      <a href="/">
        <img src="/static/verath-logo.png" alt="Verath Logo" />
      </a>
      <h1>VERATH</h1>
      <p>Um RPG criado por Gustavo Tito</p>
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
