const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  menuEvent: (callback) => {
    ipcRenderer.on("toPreload", (event, value) => {
      callback(value);
    });
  },
  selectFile: async () => {
    // 打开文件选择对话框
    const res = await ipcRenderer.invoke("selectFile");
    return res;
  },
});

window.addEventListener("contextmenu", (e) => {
  ipcRenderer.send("mainPopContextmenu");
});
