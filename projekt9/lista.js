
$(document).ready(function() {
    $('#add-btn').on('click', function() {
        let taskText = $('#task-input').val(); // Get value from input

        if (taskText.trim() !== "") {
            $('#task-list').append('<li>' + taskText + '</li>');
            
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).remove();
    });
});