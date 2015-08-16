$(document).ready(function() {
  var $articleTitle = $(document).find(".article-title:first");
  var headerIsShown = isBelowTitle();

  if($(".article").length) {

    var titleDisplacement = $articleTitle.outerHeight();

    $(document).scroll(function(e) {
      updateHeader();
    })

    function isBelowTitle() {
      if(window.scrollY > titleDisplacement) {
        return true;
      }
      return false;
    }

    function updateHeader() {
      if(headerIsShown && !isBelowTitle()) {
        $("header").removeClass("is-shown").addClass("is-hidden");
        headerIsShown = false;
      }
      else if(!headerIsShown && isBelowTitle()) {
        $("header").removeClass("is-hidden").addClass("is-shown");
        headerIsShown = true;
      }
    }

  }
})
