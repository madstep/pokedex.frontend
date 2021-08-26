$(document).ready(function () {
  $(window).click(function () {
    if(!event) return;
    if (!$(event.target).is('.form-control')) {
      $(".form-control").each(function () {
        if ($(this).val() == '') {
          $(this).closest('.form-group').removeClass("label-animate");
        }
      });
    }
    if ($(event.target).is('input.form-control')) $(event.target).closest('.form-group').addClass("label-animate")
  });

});

function toggle_visibilityErrorDetails() {
	var e = document.getElementById('errorDetail');
	if(e.style.display == 'block')
		e.style.display = 'none';
	else
		e.style.display = 'block';
}

