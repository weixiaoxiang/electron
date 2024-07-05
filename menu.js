const { app, Menu, shell, BrowserWindow, dialog } = require("electron");
const isMac = app.platform === "darwin";
// /
function createMenu(win) {
  const config = [
    ...(isMac
      ? [
          {
            label: app.name,
          },
        ]
      : [
          {
            label: app.name,
            submenu: [
              {
                label: "访问网站",
                click: () => {
                  shell.openExternal("https://www.baidu.com");
                },
              },
              {
                label: "打开窗口",
                accelerator: "ctrl+shift+1", // 定义热键
                click: () => {
                  new BrowserWindow({
                    width: 200,
                    height: 200,
                  });
                },
              },
              {
                label: "打开文件夹",
                click: () => {
                  const result = dialog.showOpenDialogSync(win, {
                    properties: ["openFile", "multiSelections"],
                  });
                },
              },
              {
                type: "separator",
              },
              {
                label: "退出",
                click: () => {},
                submenu: [
                  {
                    label: "强制退出",
                    role: "quit",
                  },
                  {
                    label: "退出",
                    click: () => {
                      // dialog提示
                      dialog.showSaveDialog(win, { title: "保存文件 " }).then((res) => {
                        console.log(res);
                      });
                      // win.hide();
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "渲染进程事件",
            click: () => {
              win.webContents.send("toPreload", "渲染进程事件");
            },
          },
        ]),
  ];
  // Menu.setApplicationMenu(null);
  Menu.setApplicationMenu(Menu.buildFromTemplate(config));
}
module.exports = {
  createMenu,
};
