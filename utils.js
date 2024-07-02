/**
 * 对窗口进行动画移动和缩放。
 *
 * @param {BrowserWindow} win - 要进行动画的窗口。
 * @param {Object} targetBounds - 窗口的目标边界。
 * @param {number} targetBounds.x - 目标 x 坐标。
 * @param {number} targetBounds.y - 目标 y 坐标。
 * @param {number} targetBounds.width - 目标宽度。
 * @param {number} targetBounds.height - 目标高度。
 * @param {number} duration - 动画的持续时间（以毫秒为单位）。
 *
 * @returns {void}
 */
module.exports = function animateWindowMove(win, targetBounds, duration) {
  const interval = 10; // 每 10 毫秒更新一次
  const frames = duration / interval;
  const startBounds = win.getBounds();
  const deltaX = (targetBounds.x - startBounds.x) / frames;
  const deltaY = (targetBounds.y - startBounds.y) / frames;
  const deltaWidth = (targetBounds.width - startBounds.width) / frames;
  const deltaHeight = (targetBounds.height - startBounds.height) / frames;
  let currentFrame = 0;

  const intervalId = setInterval(() => {
    if (currentFrame < frames) {
      win.setBounds({
        x: startBounds.x + deltaX * currentFrame,
        y: startBounds.y + deltaY * currentFrame,
        width: startBounds.width + deltaWidth * currentFrame,
        height: startBounds.height + deltaHeight * currentFrame,
      });
      currentFrame++;
    } else {
      clearInterval(intervalId); // 停止动画
    }
  }, interval);
};
