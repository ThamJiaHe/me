let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function(){
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Adding click event listener to the button
mybutton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});