const { app, BrowserWindow, BrowserView, screen, session, shell } = require("electron");
const path = require("path");
// 定义创建窗口createWindow
function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 500,
    height: 400,
    x: 1000,
    y: 150,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
    // 去除窗口的菜单栏
    // autoHideMenuBar: true,
  });
  // 加载index.html文件
  win.loadFile(path.resolve(__dirname, "index.html"));
  // 打开开发者工具
  win.webContents.openDevTools();
  win.webContents.setWindowOpenHandler((detail) => {
    // shell.openExternal(detail.url);
    return {
      action: "allow",
      createWindow: (options) => {
        const browserView = new BrowserView(options);
        win.addBrowserView(browserView);
        browserView.setBounds({ x: 0, y: 0, width: 500, height: 500 });
        return browserView.webContents;
      },
    };
  });
  return win;
}

module.exports = {
  createWindow,
};
