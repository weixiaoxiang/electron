const { app, BrowserWindow, screen, session } = require("electron");
const path = require("path");
const animateWindowMove = require("./utils");
// 定义创建窗口createWindow
function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1200,
    y: 100,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
    // 去除窗口的菜单栏
    autoHideMenuBar: true,
  });
  // 加载index.html文件
  win.loadFile(path.resolve(__dirname, "index.html"));
  // 打开开发者工具
  win.webContents.openDevTools({ title: "wxx", activate: true });
}

module.exports = {
  createWindow,
};
