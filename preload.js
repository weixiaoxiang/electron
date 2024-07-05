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
  saveFile: async (value) => {
    return await ipcRenderer.invoke("saveFile", value);
  },
});

window.addEventListener("contextmenu", (e) => {
  ipcRenderer.send("mainPopContextmenu");
});
