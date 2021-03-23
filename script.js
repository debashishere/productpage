$(document).ready(() => {
    console.log("ready");
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
})