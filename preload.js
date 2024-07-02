const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  menuEvent: (callback) => {
    ipcRenderer.on("toPreload", (event, value) => {
      // document.querySelector("span").innerHTML = value;
      callback(value);
    });
  },
});

window.addEventListener("contextmenu", (e) => {
  ipcRenderer.send("mainPopContextmenu");
});
