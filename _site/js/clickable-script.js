function splitContent(element) {
    $(element).clone().addClass("first-clickable").insertBefore(element)
    $(element).clone().addClass("second-clickable").insertBefore(element)
    $(element).addClass("third-clickable")
}

$(document).ready(function() {
  jQuery.each($(".clickable"), function(key, value) {
    splitContent(value)
  });
})
