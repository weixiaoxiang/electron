const { app, BrowserWindow, ipcMain, screen } = require("electron");
const { createWindow } = require("./window");
const { createMenu } = require("./menu");
require("./contextmenu");
app.whenReady().then(() => {
  const win = createWindow();
  // 创建菜单
  createMenu(win);
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
