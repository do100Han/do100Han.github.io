// Menu hide and show

var Show = function () {
  _self = this;
  this.menu = document.getElementsByClassName('menu')[0];
  this.nav = document.getElementsByClassName("nav")[0];
  document.addEventListener("click", function (e) {
    var target = e.target;
    console.log(target);
    if (target == _self.menu || _self.nav.classList.contains("js-active")) {
      _self.nav.classList.toggle("js-active");
    }
  });
}();