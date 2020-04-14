// change value of range inputs on change
$('#price-range-low').on('change', function() {
    $('#price-range-low-value').html($(this).val());
});
$('#price-range-high').on('change', function() {
    $('#price-range-high-value').html($(this).val());
});
$('#rating-range-low').on('change', function() {
    $('#rating-range-low-value').html($(this).val());
});
$('#rating-range-high').on('change', function() {
    $('#rating-range-high-value').html($(this).val());
});



// clear inputs
$('#clear-year').click(function() {
    $('.filter-year input').each(function() {
        console.log($(this).prop('checked', false));
    });
});

$('#clear-price').click(function() {
    $('#price-range-low-value').html('20');
    $('#price-range-high-value').html('45');
    $('#price-range-low').val(20);
    $('#price-range-high').val(45);
});

$('#clear-rating').click(function() {
    $('#rating-range-low-value').html('1');
    $('#rating-range-high-value').html('4');
    $('#rating-range-low').val(1);
    $('#rating-range-high').val(4);
});


$('.sessions__container').hide();
$('.saved__container').hide();
$('.reviews__container').hide();

$('.profile-nav > .nav-link').click(function() {
    $(this).toggleClass('active');

    if($(this)[0].id === 'nav-about') {
        $('.about__container').show();
    }
    else if($(this)[0].id === 'nav-sessions') {
        $('.sessions__container').show();
    }
    else if($(this)[0].id === 'nav-saved') {
        $('.saved__container').show();
    }
    else if($(this)[0].id === 'nav-reviews') {
        $('.reviews__container').show();
    }
});

// select view session
$('.home__container__notifications__sessions .session__container > button:last-child').click(function () {
    window.location.href = '/view_session_before_tutor.html';
});


// select cancel session
$('.home__container__notifications__sessions .session__container > button:not(:last-child)').click(function () {
    alert('session cancelled');
});




$('.tutor-requests-table button:last-child').click(function() {
    alert('accepted tutor request');
});

$('.tutor-requests-table button:not(:last-child)').click(function() {
    alert('declined tutor request');
});