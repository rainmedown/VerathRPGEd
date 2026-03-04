import { QuartzComponent } from "./types"

const Header: QuartzComponent = () => {
  return (
    <div class="verath-header">
      <a href="/">
        <img src="/static/verath-logo.png" class="verath-logo"/>
      </a>
    </div>
  )
}

export default (() => Header) satisfies QuartzComponent

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