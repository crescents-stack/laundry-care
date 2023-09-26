export const setTheme = (theme: string, router: any, pathname: any) => {
  let currentTheme = document.getElementById("customThemes");

  setTimeout(() => {
    let tempTheme = "/" + theme;
    if (router && pathname) {
      if (!pathname.includes(tempTheme)) {
        let tempPath = window.location.href;
        tempPath = tempPath.replace("/rider", tempTheme);
        tempPath = tempPath.replace("/user", tempTheme);
        tempPath = tempPath.replace("/shop", tempTheme);
        tempPath = tempPath.replace("/admin", tempTheme);
        console.log(tempPath);
        router.push(tempPath);
      }
    }
    if (currentTheme) {
      currentTheme.className = theme;
      localStorage.setItem("theme", theme)
    }
  }, 0);
};
