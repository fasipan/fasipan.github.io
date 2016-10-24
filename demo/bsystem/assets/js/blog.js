jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
    =            SAMPLE FUNCTION            =
    =======================================*/

    SLZ.mainFunction = function() {
        if($("#player2").length > 0){
            $("#player2").mediaelementplayer({
                audioWidth: '100%',
                audioHeight: 50
            });
        }
        if($("#player3").length > 0){
            $("#player3").mediaelementplayer({
                audioWidth: '100%',
                audioHeight: 50
            });
        }

        // js for calendar
        $('.input-daterange, .archive-datepicker').datepicker({
            format: 'mm/dd/yy',
            maxViewMode: 0
        });

        $('.gallery-widget .thumb').directionalHover({
            speed: 200
        });
        var gurl = $(".video-embed")[0].src;
        $(".video-button-play").on('click', function(event) {
            $(".video-embed").addClass('show-video');
            $(".video-button-close").addClass('show-video');
            $(".video-embed")[0].src += "&autoplay=1";
            event.preventDefault();
        });

        $(".video-button-close").on('click', function(event) {
            $(".video-embed")[0].src = gurl;
            $(".video-embed").removeClass('show-video');
            $(".video-button-close").removeClass('show-video');
        });
    };

    /*=====  End of SAMPLE FUNCTION  ======*/




    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/


});
