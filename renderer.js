window.addEventListener("DOMContentLoaded", () => {
  window.api.menuEvent((value) => {
    document.querySelector("span").innerHTML = value;
  });

  const btn = document.querySelector("#selectBtn");
  const div = document.querySelector("#container");
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
});
