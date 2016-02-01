(function($){
    var $html = $('html');
    var $menuButton = $('#menu-button');
    var $menuPopup = $('#menu-popup');

    $menuButton.on('click', function (e){
        e.stopPropagation();
        $menuButton.toggleClass('active');
        $menuPopup.toggleClass('active');
    });
    $menuPopup.on('click', function (e){
        e.stopPropagation();
    });
    $html.on('click', function() {
        if ($menuPopup.hasClass('active')) {
            $menuButton.removeClass('active');
            $menuPopup.removeClass('active');
        }
    });
})($);