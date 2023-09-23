export const setTheme = (theme: string) => {
  let currentTheme = document.getElementById("customThemes");
  if (currentTheme) {
    currentTheme.className = theme;
  }
};
