import { styled } from "./styles/stitches.config"
import { light } from "./styles/themes/light"
import { Switch } from '@chakra-ui/react'
import { useTheme } from "./context/useTheme"
import { dark } from "./styles/themes/dark"


function App() {
  const TitleExample = styled('h1', {
    color: '$primary'
  })

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <TitleExample>Stitches</TitleExample>
      <TitleExample>Stitches</TitleExample>
      <Switch
        size='lg'
        isChecked={theme === dark}
        onChange={() => toggleTheme()}
        colorScheme='green'
      />
    </div>
  )
}

export default App
