const { ipcMain, Menu, app, BrowserWindow, shell } = require("electron");
ipcMain.on("mainPopContextmenu", (event) => {
  // console.log(9999);
  // 定义模块
  const template = [
    {
      label: "退出",
      click: () => {
        app.quit();
      },
    },
    {
      label: "访问官网",
      click: () => {
        shell.openExternal("https://www.baidu.com");
      },
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  menu.popup(BrowserWindow.fromWebContents(event.sender));
});
