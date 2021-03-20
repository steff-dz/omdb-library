const lightTheme = {
  pageBackground: 'white',
  fontColor: '#111',
  spacing: [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem'],
  fontSize: ['0.5rem', '1rem', '1.5rem', '2rem'],
}

const darkTheme = {
  pageBackground: '#111',
  fontColor: 'white',
  spacing: [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem'],
  fontSize: ['0.5rem', '1rem', '1.5rem', '2rem'],
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

//space : is an array for spacing.
// const practiceTheme = {
//   spacing: [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem'],
// }

//spacing with base pxs at 16 the spacing numbers would be: 4, 8, 16, 32, 64
// mine would be: 5, 10, 20, 40, 80
//background-color: ${(props) => props.theme.color};
