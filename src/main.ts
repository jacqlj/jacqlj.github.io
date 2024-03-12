import $ from "jquery";

$(load);

function load() {
    $('.category')
        .on('mouseenter', function () {
            $(this)
                .children('.selected')
                .stop(true, true)
                .animate({opacity: 1}, 200);
        })
        .on('mouseleave', function () {
            $(this)
                .children('.selected')
                .stop(true, true)
                .animate({opacity: 0}, 200);
        })
        .on('click', function () {
            $('#blur').show()
                .animate({opacity: 1}, 200);
            $('#right').show()
                .animate({opacity: 1, right: 40 * 16}, 200);
        })

    $('#cat-prj').on('click', function() {
        $('#page-prj').show();
    });

    $('#cat-abt').on('click', function() {
        $('#page-abt').show();
    });

    $('#cat-cnt').on('click', function() {
        $('#page-cnt').show();
    });

    $('#blur').on('click', function() {
        $('#blur')
            .animate({opacity: 0}, 200, function() {
                $(this).hide()
            });
        $('#right')
            .animate({opacity: 0, right: 0}, 200, function() {
                $(this).hide()
            });
        $('.page').hide();
    })
}