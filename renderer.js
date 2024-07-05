window.addEventListener("DOMContentLoaded", () => {
  window.api.menuEvent((value) => {
    document.querySelector("span").innerHTML = value;
  });

  const btn = document.querySelector("#selectBtn");
  const div = document.querySelector("#container");
  // 打开文件
  btn.addEventListener("click", async () => {
    const res = await window.api.selectFile();
    if (res && res instanceof Array) {
      // 清空div下的所有子元素
      div.innerHTML = "";

      // 创建div
      res.forEach((r) => {
        const img = document.createElement("img");
        img.src = r;
        div.appendChild(img);
        const divItem = document.createElement("div");
        divItem.innerHTML = r;
        div.appendChild(divItem);
      });
    }
  });

  // 保存文件
  const saveBtn = document.querySelector("#saveBtn");
  const textarea = document.querySelector("[name='content']");
  saveBtn.addEventListener("click", async () => {
    const res = await window.api.saveFile(textarea.value);
    console.log(res, "btn click");
  });
});
