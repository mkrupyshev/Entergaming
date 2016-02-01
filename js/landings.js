(function($){
    var $menuButton = $('#menu-button');
    var $menuPopup = $('#menu-popup');

    $menuButton.on('click', function (){
        $(this).toggleClass('active');
        $menuPopup.toggleClass('active');
    });
})($);