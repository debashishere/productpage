$(document).ready(() => {
    $('.hero-container a[href]').click(function (e) { e.preventDefault(); });

    $('.search').on("click", (event) => {
        event.preventDefault();
        const parent = $('.search').parent();
        parent.html(`
            <input class="search-input type="text" placeholder="Search here...">
            <span class="active-Icon"><i class="fas fa-search"></span></i>
        `)
    })

    $('.hambarger').click(function (event) {
        $(this).toggleClass('active');
        $('.nav-items').toggleClass('active');
        $('.close-btn').css("visibility", "visible");
        if ($(this).hasClass('active')) {
            $(this).html(`
            <i class="fas fa-times"></i>
            `)
        }
        else {
            $(this).html(`
            <i class="fas fa-bars"></i>
        `)
        }
    })



    $('.card').hover(function (event) {
        $(this).addClass('active');
        $(".card").map(function () {
            if ($(this).hasClass('active')) {
                $(this).css({ "transform": "scale(1.025)" })
            }
        })
        $(this).css({
            'box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.25)',
            '-webkit-box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.25)',
            '-moz-box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.25)'
        })
        $(this).children(".addto-cart").css({ 'opacity': '1', "visibility": "visible" })
    }, function () {
        $(this).addClass('active');
        $(".card").map(function () {
            if ($(this).hasClass('active')) {
                $(this).css({ "transform": "scale(1)" })
            }
        })
        $(this)
            .removeClass('active');
        $(this).css({
            'box-shadow': ' 8px -8px 30px 5px rgba(66, 66, 66, 0.01)',
            '-webkit-box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.01)',
            '-moz-box-shadow': '8px -8px 30px 5px rgba(66, 66, 66, 0.01)'
        })
        $(this).children(".addto-cart").css({ 'opacity': '0', "visibility": "hidden" })

    });

    $('.count-plus-btn').on("click", function (event) {
        const countElement = $(this).prev()
        let count = countElement.val();
        count = parseInt(count) + 1;
        countElement.val(count)
    })

    $('.count-minus-btn').on("click", function (event) {
        const countElement = $(this).next()
        let count = countElement.val();
        if (count <= 0) {
            count = 0
        } else {
            count = parseInt(count) - 1;
        }
        countElement.val(count)
    })

    $('.wish-list').hover(function (event) {
        const ele = $(this);
        ele.html(`<span><i class="fas fa-heart"></i></span>WishList`)
    })

    $('#cart-icon').on("click", function (event) {
        event.preventDefault();
        $('.cart-container').addClass('activeloder');
        $('.cart-container').addClass('active');
        $('.body-overlay').addClass('active');
        setTimeout(() => {
            $('.cart-container').addClass('removeafter');

        }, 500)

    })

    $('.continue-shopping').on("click", function (event) {
        event.preventDefault();
        $('.cart-container').removeClass('removeafter');
        $('.cart-container').removeClass('active');
        $('.cart-container').removeClass('activeloder');
        setTimeout(() => {
            $('.body-overlay').removeClass('active');

        }, 1300)

    })


})


