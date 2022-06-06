import { styled } from "./styles/stitches.config"

function App() {
  const TitleExample = styled('h1', {
    color: '$text'
  })

  return (
    <div className="App">
      <TitleExample>Stitches</TitleExample>
    </div>
  )
}

export default App
