$(document).ready(function() {
    $('#submit').on('click', function(addtask) {
        addtask.preventDefault();
        var newtask = $('#Task').val();
        var newline = $('<li>'+newtask+'<span class="glyphicon glyphicon-ok-circle"></span><span class="glyphicon glyphicon-remove-circle"></span></li>');
        //var finishline = newline;
            $('#todonew').append(newline);
            $('#Task').val('');

            $('.glyphicon-ok-circle', newline).on('click', function() {
        	    $('#done').append(newline);
                $('.glyphicon-ok-circle', newline).remove();
                $('.glyphicon-remove-circle', newline).remove();
            });

            $('.glyphicon-remove-circle', newline).on('click', function() {
                $(newline).remove();
            });

            $('#delete').on('click', function() {
                $(newline, ('#done')).remove();
            });

    });

});



