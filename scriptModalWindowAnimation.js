var modalWindow = document.getElementById("modalWindow"); //access to DOM element
var animation = document.getElementById("animAccess"); //access to DOM element which will be animated
var closeBtn = document.getElementById("closeConfirm"); //access to DOM element to close modal window
var timeAnim = 1000; // time fore animation must be equal to animation-duration in web framework animate.css
function modalWin() { //function fire onclick event on button
    modalWindow.style.display = "flex"; //make ModWin visible
    animation.classList.add("zoomIn"); // add class from animation framework
    var time = setInterval(function () { // make asynchronous removal of the animation framework class and stop animation
        clearInterval(time);
        animation.classList.remove("zoomIn");
    },timeAnim);
}
closeBtn.onclick = function(){
    animation.classList.add("zoomOut");
    var time = setInterval(function () {
        modalWindow.style.display = "none";
        clearInterval(time);
        animation.classList.remove("zoomOut");
    },timeAnim);
};
window.onclick = function (event) {
  if(event.target === modalWindow){
      animation.classList.add("zoomOut");
      var time = setInterval(function () {
          modalWindow.style.display = "none";
          clearInterval(time);
          animation.classList.remove("zoomOut");
      },timeAnim);
  }
};

