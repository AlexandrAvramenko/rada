// second click on the dropdown button and follow the link.
$(document).ready(function () {
    $('.navbar .dropdown > a').click(function() {
        if (!$(this).hasClass("parent-clicked")) {
           $(this).addClass("parent-clicked");
         } else {
           location.href = this.href;
         }
       });

    $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});