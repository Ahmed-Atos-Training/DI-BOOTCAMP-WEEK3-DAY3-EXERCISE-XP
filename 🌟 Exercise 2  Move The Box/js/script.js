// Get button
let divAnimate = document.getElementById("animate");

/**
 * @description: this function can move animate div
 * @returns: void
 */
function myMove() {
  let pos = 0;
  let moove = setInterval(function () {
    if (pos == 350) {
        clearInterval(moove);
      }else{
        pos += 1;
        divAnimate.style.left = pos + "px";
      }
  },1);
}
