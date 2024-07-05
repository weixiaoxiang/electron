const { ipcMain, screen, BrowserWindow, dialog } = require("electron");
// 打开文件选择对话框
ipcMain.handle("selectFile", (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
  // win.setBounds({
  //   x: screenWidth / 2 - 100,
  //   y: screenHeight / 2 - 100,
  // });
  const result = dialog.showOpenDialogSync({
    filters: [{ name: "Images", extensions: ["jpg", "png", "gif"] }],
    properties: ["openFile", "multiSelections"],
  });
  return result;
});
