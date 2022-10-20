$(document).ready(function () {
  $("#changeMode").click(function () {
    $("body").toggleClass("light-theme");
    if (
      $("#changeMode img").attr("src") ===
      "https://www.yudiz.com/codepen/smart-remote-control/moon.svg"
    ) {
      $("#changeMode img").attr(
        "src",
        "https://www.yudiz.com/codepen/smart-remote-control/sun.svg"
      );
    } else {
      $("#changeMode img").attr(
        "src",
        "https://www.yudiz.com/codepen/smart-remote-control/moon.svg"
      );
    }
  });
});