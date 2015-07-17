$(document).ready(function() {
  var $articleTitle = $(document).find(".article-title:first");
  var headerIsShown = isBelowTitle();

  var titleDisplacement = $articleTitle.outerHeight();

  $(document).scroll(function(e) {
    if(headerIsShown && !isBelowTitle()) {
      $("header").removeClass("is-shown").addClass("is-hidden");
      console.log("showing")

      headerIsShown = false;
    }
    if(!headerIsShown && isBelowTitle()) {
      $("header").removeClass("is-hidden").addClass("is-shown");
      headerIsShown = true;
      console.log("showing")
    }
  })

  function isBelowTitle() {
    if(window.scrollY > titleDisplacement) {
      return true;
    }
  }
})
