$(document).ready(function() {
    $('button').on('click', function(addtask) {
        addtask.preventDefault();
        var newtask = $('#Task').val();
        $('#todonew').append('<li>'+newtask+'</li>');
        document.getElementById("Tasks").reset();
    });
    $(".one").click(function () {
		$(this).hide();
	});
});



