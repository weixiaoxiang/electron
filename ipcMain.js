const { ipcMain, screen, BrowserWindow, dialog } = require("electron");
const path = require("path");
const fs = require("fs");
// 打开文件选择对话框
ipcMain.handle("selectFile", (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
  // win.setBounds({
  //   x: screenWidth / 2 - 100,
  //   y: screenHeight / 2 - 100,
  // });
  const result = dialog.showOpenDialogSync({
    title: "选择图片文件",
    filters: [{ name: "Images", extensions: ["jpg", "png", "gif"] }],
    properties: ["openFile", "multiSelections"],
  });
  console.log(result);
  return result;
});

ipcMain.handle("saveFile", async (event, value) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const path = dialog.showSaveDialogSync({
    title: "选择图片文件",
    filters: [{ name: "text", extensions: ["txt"] }],
    properties: ["openFile"],
  });
  // 创建文件并写入内容
  const err = fs.appendFileSync(path, value + "\n");
  if (err) {
    return "写入失败";
  }
  return "写入成功";
});
