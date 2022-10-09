export const parameters = {
  docs: {
    // Opt-out of inline rendering
    inlineStories: false,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}