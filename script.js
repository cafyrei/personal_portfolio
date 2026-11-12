(function () {
  var chips = document.querySelectorAll(".chip");
  var items = document.querySelectorAll(".project");
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      var f = c.getAttribute("data-f");
      chips.forEach(function (x) {
        x.setAttribute("aria-pressed", x === c ? "true" : "false");
      });
      items.forEach(function (p) {
        p.hidden = !(f === "all" || p.getAttribute("data-cat") === f);
      });
    });
  });

  var btn = document.getElementById("copy");
  var addr = document.getElementById("addr");
  btn.addEventListener("click", function () {
    var done = function () {
      btn.textContent = "Copied";
      setTimeout(function () {
        btn.textContent = "Copy address";
      }, 1600);
    };
    var fallback = function () {
      var r = document.createRange();
      r.selectNodeContents(addr);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      btn.textContent = "Press copy now";
      setTimeout(function () {
        btn.textContent = "Copy address";
      }, 1600);
    };
    try {
      navigator.clipboard.writeText(addr.textContent).then(done, fallback);
    } catch (e) {
      fallback();
    }
  });
})();
