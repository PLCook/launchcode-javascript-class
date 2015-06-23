$(document).ready(function() {
    $('#submit').on('click', function(addtask) {
        addtask.preventDefault();
        var newtask = $('#Task').val();
        var newline = $('<li>'+newtask+'<span class="glyphicon glyphicon-ok-circle"></span><span class="glyphicon glyphicon-remove-circle"></span></li>');
        //var finishline = newline;
            $('#todonew').append(newline);
            $('#Task').val('');

            $('.glyphicon-ok-circle', newline).on('click', function() {
                //var completed = newline
        	    $('#done').append(newline);
                $('.glyphicon-ok-circle', newline).remove();
                $('.glyphicon-remove-circle', newline).remove();
            });

            $('.glyphicon-remove-circle', newline).on('click', function() {
                $(newline).remove();
                alert("What are you? Lazy?\nDeleting a task before\nyou finish is for the weak!");
            });

            $('#delete').on('click', function() {
                $('#done').children().remove();
            });

    });



});



