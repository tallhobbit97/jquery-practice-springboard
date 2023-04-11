$('form').on('submit', function(event){
    event.preventDefault();
    const $title = $('#movie-name').val();
    const $rating = $('#rating').val();
    if ($rating < 0 || $rating > 10){
        console.log('your rating must be between 0 and 10');
    } else if($title.length < 2){
        console.log('your rating must be more than two characters long');
    } else {
        $('ul').append(`<li>${$title}: ${$rating}/10</li> <button class="remove">Remove</button>`);
        $('.remove').on('click', (e) => {
            $(e.target).parent().remove();
        });
    }
});