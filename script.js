$(document).ready(() => {

    setTimeout(() => {
        $('.body-overlay').addClass('active')
    }, 300)
    setTimeout(() => {
        $('.body-overlay').css('display', 'none')
    }, 1000)

    // $('.hero-container a[href]').click(function (e) { e.preventDefault(); });

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

    $('.cart-icon').on("click", function (event) {
        event.preventDefault();
        $('.body-overlay').removeClass('active')
        $('.body-overlay').css('display', 'flex')
        setTimeout(() => {
            $('.body-overlay').addClass('active')
            $('.cart-container').addClass('active');
        }, 500)
        setTimeout(() => {
            $('.body-overlay').css('display', 'none');
        }, 1000)
    })


    $('.continue-shopping').on("click", function (event) {
        event.preventDefault();
        $('.cart-container').removeClass('active');
    })

    // $('a.wish-list').on("click", function (event) {
    //     event.preventDefault();
    //     console.log("click");
    //     $('.wishlist-container').css({ 'display': "flex" });
    //     $('body, html').css({ "overflow": "hidden" })
    // })
    $('a.list-add-btn').on("click", function (event) {
        event.preventDefault();
        $('.wishlist-container').css({ 'display': "none" });
    })

    //decks

})


