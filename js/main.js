
// $(function () {
//   $("#footer").load("footer.html");
// });
$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = '../views/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})

$(window).on("scroll", function () {
  var scrollPos = $(window).scrollTop();
  //if ($(this).scrollTop() == 0){$('#goto').fadeOut();}else{$('#goto').fadeIn();}
  if (scrollPos <= 100) {
    $("#goto").fadeOut();
  } else {
    $("#goto").fadeIn();
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // document.getElementById("header").classList.add("scroll-down");
    header.classList.add("scroll-down");
  } else {
    header.classList.remove("scroll-down");
  }
})




