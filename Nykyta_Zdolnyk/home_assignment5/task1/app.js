var body = document.body;
var userAgent = navigator.userAgent;
var browserName;
// alert(userAgent);

browserName = body.firstElementChild.lastElementChild;
browserName.textContent = getBrowserName();

function getBrowserName() {
  if (userAgent.indexOf("Chrome") != -1) return "Google Chrome";
  if (userAgent.indexOf("Firefox") != -1) return "Firefox";
  if (userAgent.indexOf("Trident") != -1) return "Internet Explorer";
  return "Имя браузера не определено!";
}
