import { createStitches } from '@stitches/react';

export const {
  styled,
  globalCss,
  createTheme,
  css,
} = createStitches({
  utils: {
    // Abbreviated margin properties
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: string | number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: string | number) => ({
      borderRadius: value,
    }),
  },
  media: {
    small: '(max-width: 414px)',
    medium: '(max-width: 390px)',
    large: '(max-width: 414px)',
    notebookHeight: '(max-height: 768px)',
    zoomHeight: '(max-height: 650px)',
  },
  theme: {
    colors: {
      primary: '',
      inputText: '#ADADAD',
      icons: '#00354F',
      text: '#494949',
      title: '#272727',
      background: '#F3F3F3',
      white: '#ffffff',
      error: '#E51247',
    },
    space: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
    },
    fontSizes: {
      1: '1.6rem',
      2: '2rem',
      3: '2.4rem',
      4: '3.2rem',
      5: '3.6rem',
      6: '4rem',
    },
    fonts: {
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    shadows: {
      button: '2px 2px 5px rgba(0, 0, 0, 0.25)',
    },
    zIndices: {},
    transitions: {},
  },
});
