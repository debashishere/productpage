$(document).ready(() => {
    $('.hero-container a[href]').click(function (e) { e.preventDefault(); });

    $('.search').on("click", (event) => {
        event.preventDefault();
        const parent = $('.search').parent();
        parent.html(`
            <input class="search-input type="text" placeholder="Search here..."><span class="active-Icon"><i class="fas fa-search"></span></i>
        `)
    })

    $('.hambarger').click((event) => {
        $('.nav-items').addClass('active');
        $('.close-btn').css("visibility", "visible");
        $('.nav-overlay').addClass('active');
    })
    $('.close-btn').click((event) => {
        $('.nav-items').removeClass('active');
        $('.nav-overlay').removeClass('active');

    })

    $('.card').hover(function (event) {
        $(this).css({
            'box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.25)',
            '-webkit-box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.25)',
            '-moz-box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.25)'
        }).animate({ height: '300px' });
        $(this).children(".addto-cart").css({ 'height': '68px', 'opacity': '1' })

    }, function () {
        $(this).css({
            'box-shadow': ' 8px -8px 30px 5px rgba(66, 66, 66, 0.01)',
            '-webkit-box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.01)',
            '-moz-box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.01)'
        }).animate({ height: '215px' });
        $(this).children(".addto-cart").css({ 'height': '0%', 'opacity': '0' })

    });


})