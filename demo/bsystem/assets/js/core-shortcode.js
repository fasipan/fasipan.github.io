(function($) {
    "use strict";

    // parter
    $.goahead_core_partner = function() {
        $('.sc-partner').each(function() {
            var number = $(this).data('number');
            var block = $(this).attr('data-item');
            $(block + " .banner-main-right").slick({
                infinite: true,
                slidesToShow: number,
                slidesToScroll: 1,
                speed: 1000,
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                    }
                }, {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 415,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 321,
                    settings: {
                        slidesToShow: 2,
                    }
                }]
            });
        })
    };
    // toggle box
    $.goahead_core_toggle = function() {
        $('.accordion .panel .panel-heading').on('click', function() {
            var accor = $(this).closest('.accordion');
            var accor_panel = $(this).parent();
            if (accor_panel.hasClass('active')) {
                accor_panel.removeClass('active');
            } else {
                if ($('.panel-title a.accordion-toggle').hasClass('collapsed')) {
                    $('.panel', accor).removeClass('active');
                    accor_panel.addClass('active');
                } else {
                    accor_panel.removeClass('active');
                }
            }
        });
    };
    // testimonial
    $.goahead_core_testimonial = function() {
        $(".testimonial-slider").slick({
            arrows: false,
            dots: true,
            infinite: false,
            fade: true,
            adaptiveHeight: true
        });
    };

    /*service sc*/
    $.goahead_core_service = function() {
        if ($('.sc_service').length) {
            var sc_service = $('.sc_service');
            var maxHeight = 0,
                plannerHeight = 0;
            var planner = sc_service.find('.wrapper-header-planner .main-header-planner');
            planner.css('height', 'auto');
            planner.each(function() {
                plannerHeight = $(this).height();
                if (plannerHeight > maxHeight) {
                    maxHeight = plannerHeight;
                }
            });
            if ($(window).width() >= 768) {
                // planner.css('height', maxHeight);
                planner.height(maxHeight);
            }
        }
    };

    // team carousel
    $.goahead_core_team_carousel = function() {
        if ($(".sc-team-carousel.style-1").length) {
            $(".sc-team-carousel.style-1").each(function() {
                var number = $(this).data('number');
                $(".team-slider", $(this)).slick({
                    infinite: true,
                    slidesToShow: number,
                    centerMode: true,
                    centerPadding: '0px',
                    focusOnSelect: true,
                    responsive: [{
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            });
        }
    };
    // team carousel style 2
    $.goahead_core_team_carousel_style2 = function() {
        if ($(".sc-team-carousel.style-2").length) {
            $(".sc-team-carousel.style-2").each(function() {
                var number = $(this).data('number');
                $(".wrapper-team-accountant", $(this)).slick({
                    infinite: true,
                    slidesToShow: number,
                    focusOnSelect: true,
                    responsive: [{
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            });
        }
    };
    // Number factor
    $.goahead_core_number_factor = function() {
        $('.counter-factor .number-counter').text('0');
        setTimeout(function() {
            $('.counter-factor .number-counter').appear(function() {
                var data_value = $(this).attr('data-value');
                var data_speed = $(this).attr('data-speed');
                $(this).countTo({
                    to: data_value,
                    speed: data_speed,
                    refreshInterval: 100
                });
            });
        }, 1000);
    };

    $.goahead_core_gallery = function() {
        var galleryContent = '';
        var item = '';
        var block = '';
        if ($('.sc_gallery .gallery-content')) {
            setTimeout(function() {
                $('.galleryIsotope').isotope({
                    layoutMode: 'masonry',
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.grid-sizer'
                    },
                    getSortData: {
                        size: '[data-size]'
                    }
                });
            }, 100);

            var galleryContent = $('.sc_gallery .gallery-content');
            $.goahead_core_gallery_process_fancybox_group(galleryContent.find('.galleryContainer'), true);

            galleryContent.each(function() {
                item = $(this).attr('data-item');
                block = '.' + item + ' ';

                $(block + ".fancybox").fancybox({
                    pixelRatio: 1,
                    autoSize: true,
                    helpers: {
                        title: {
                            type: 'outside'
                        },
                        thumbs: {
                            width: 96,
                            height: 60
                        },
                        overlay: {
                            locked: false
                        }
                    }
                });

            });
        }

    };

    $.goahead_core_gallery_dirhover = function(block_item) {
        var galleryContent = '';
        var item = '';
        var block = '';
        var grid_item = '';
        if ($('.sc_gallery .gallery-content')) {
            var galleryContent = $('.sc_gallery .gallery-content');
            galleryContent.each(function() {
                item = $(this).attr('data-item');
                block = '.' + item + ' ';
                if (typeof block_item === 'undefined') {
                    grid_item = $(block + '.galleryContainer .grid-item');
                } else {
                    grid_item = $(block_item);
                }
                grid_item.each(function() {
                    $(this).directionalHover({
                        speed: 200
                    });
                });
            });
        }
    };

    $.goahead_core_gallery_isotope_replay = function() {
        if ($('.sc_gallery .gallery-content')) {
            //			$('.galleryIsotope').isotope('destroy').isotope({
            //				layoutMode: 'masonry',
            //				itemSelector: '.grid-item',
            //				percentPosition: true,
            //				masonry: {
            //					columnWidth: '.grid-sizer'
            //				}
            //			});
        }
    };

    $.goahead_core_gallery_filter = function() {
        var galleryContent = '';
        var item = '';
        var block = '';
        if ($('.sc_gallery .gallery-content')) {
            var galleryContent = $('.sc_gallery .gallery-content');
            galleryContent.each(function() {
                item = $(this).attr('data-item');
                block = '.' + item + ' ';
                $(block + '.port-item.gallery_filter_tab').unbind("click");
                $(block + '.port-item.gallery_filter_tab').on('click', function(e) {
                    if ($(this).hasClass('active') == true) {
                        return false;
                    }
                    e.preventDefault();
                    var filterBtn = $(this).parent();
                    filterBtn.find('.port-item').removeClass('active');
                    $(this).addClass('active');
                    jQuery.goahead_core_ajax_gallery(this, 'clear');
                });
            });
        }
    };

    $.goahead_core_ajax_gallery_load_more = function() {
        var galleryContent = '';
        var item = '';
        var block = '';
        if ($('.sc_gallery .gallery-content')) {
            var galleryContent = $('.sc_gallery .gallery-content');
            galleryContent.each(function() {
                item = $(this).attr('data-item');
                block = '.' + item + ' ';
                $(block + '.button.gallery_more').unbind("click");
                $(block + '.button.gallery_more').on('click', function(e) {
                    e.preventDefault();
                    jQuery.goahead_core_ajax_gallery(this);
                });
            });
        }
    };

    $.goahead_core_ajax_gallery = function(a, clear_clone) {
        var textLoading, textTitle;
        textLoading = $(a).data('text-loading');
        textTitle = $(a).data('text-title');
        var gallery_cont = $(a).parents('.gallery-content');
        gallery_cont.find('.slz-loader-wrapper').show().fadeIn();
        if (clear_clone != undefined) {
            gallery_cont.find('.grid-clone').html('');
        }
        $(a).text(textLoading);
        gallery_cont.find('.load-more').show();
        var atts = jQuery.parseJSON($(a).attr('data-json'));
        $.fn.Form.ajax(['top.Top_Controller', 'ajax_get_more_gallery'], [atts], function(res) {
            gallery_cont.find('.grid-clone').append(res);
            gallery_cont.find('.grid-content').html("<div class='grid'>" + gallery_cont.find('.grid-clone').html() + "</div>");
            var gallery_atts_more = gallery_cont.find('.grid-clone .gallery_atts_more');
            gallery_cont.find('.grid').height(gallery_cont.find('.galleryContainer').height()); /*fix nhảy lên top gallery*/
            var data_pages = gallery_atts_more.attr('data-pages');
            if (data_pages == '') {
                gallery_cont.find('.load-more').hide();
            }
            gallery_cont.find('.button.gallery_more').attr('data-json', gallery_atts_more.attr('data-json'));
            gallery_atts_more.remove();
            jQuery.goahead_core_gallery();
            jQuery.goahead_core_gallery_dirhover(gallery_cont.find('.grid-item'));
            setTimeout(function() {
                gallery_cont.find('.galleryIsotope').isotope('destroy').isotope({
                    layoutMode: 'packery',
                    itemSelector: '.grid-item',
                    percentPosition: true,
                });
                gallery_cont.find('.slz-loader-wrapper').fadeOut();
                gallery_cont.find('.grid').height(gallery_cont.find('.galleryContainer').height()); /*fix nhảy lên top gallery*/
            }, 100);
            $(a).text(textTitle).blur();
        });
    };

    $.goahead_core_gallery_process_fancybox_group = function(block, is_add = false) {
        if (typeof block !== 'undefined') {
            if (is_add) {
                $(block).find('.grid-content .fancybox').each(function() {
                    var group = $(this).attr('data-fancybox-group-ori');
                    $(this).attr('data-fancybox-group', group + '-use');
                });
            }
        }
    };

    $.goahead_core_post_list = function() {
        if ($('.slz-shortcode.blog-wrapper .content-blog .video-thumbnail').length) {
            $('.slz-shortcode.blog-wrapper .content-blog .video-thumbnail').each(function() {
                var gurl = $(".video-embed", $(this)).attr('src');
                $(".video-button-play", $(this)).on('click', function(event) {
                    $(".video-embed", $(this).parent()).addClass('show-video');
                    $(".video-button-close", $(this).parent()).addClass('show-video');
                    $(".video-embed", $(this).parent()).attr('src', gurl + "&autoplay=1");
                    event.preventDefault();
                });

                $(".video-button-close", $(this)).on('click', function(event) {
                    $(".video-embed", $(this).parent()).attr('src', gurl);
                    $(".video-embed", $(this).parent()).removeClass('show-video');
                    $(".video-button-close", $(this).parent()).removeClass('show-video');
                });
            });
        }
    };

    $.goahead_core_vacancy = function() {
        if ($('.sc_vacancy').length) {
            $('.sc_vacancy').find('.vacancy_table').each(function() {
                var block_id = $(this).data('block-id');
                var column_child = 3;
                if ($(this).find('.is_vacancy_col').length) {
                    column_child = $(this).find('.is_vacancy_col').length;
                    column_child = column_child - 1;
                }
                $("#" + block_id).tablesorter({
                    sortList: [
                        [column_child, 1]
                    ]
                });
            });
        }

    };

    $.goahead_core_timeline = function() {
        if ($('.slz-shortcode .wrapper-timeline .timeline-block .timeline-slider').length) {
            $('.slz-shortcode .wrapper-timeline .timeline-block .timeline-slider').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                speed: 1000,
                dots: false,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                }, {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }]
            });
        }
    };
    $.goahead_core_widget_gallery = function() {
        //slide
        if ($(".gallery-slide .content-gallery").length) {
            $(".gallery-slide .content-gallery").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                dots: true,
            });
        }
        //hover
        $('.widget-gallery-col ul .thumb-cls').directionalHover({
            speed: 200
        });
    };
    $.goahead_core_gallery_single = function() {
        if ($('.gallery-single .grid')) {
            $('.gallery-single .grid').isotope({
                layoutMode: 'masonry',
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: '.grid-sizer'
                },
            });
        }
        if ($(".gallery-fancybox .fancybox").length) {
            $(".gallery-fancybox .fancybox").fancybox({
                prevEffect: 'none',
                nextEffect: 'none',
                helpers: {
                    title: {
                        type: 'outside'
                    },
                    thumbs: {
                        width: 60,
                        height: 60
                    }
                }
            });
            $.fancybox.helpers.thumbs.onUpdate = function(opts, obj) {
                if (this.list) {
                    var center = Math.floor($(window).width() * 0.5 - (obj.group.length / 2 * this.width + this.width * 0.5));
                    this.list.css('left', center);
                }
            };
        }

        if ($('.gallery-single .wrapper-gallery .pic')) {
            $('.gallery-single .wrapper-gallery .pic').directionalHover({
                speed: 200
            });
        }
    };
    $.goahead_core_team_pagination = function() {
        if ($(".team-pagination-wrapper nav.paging-ajax").length) {
            $('.team-pagination-wrapper nav.paging-ajax ul li a').unbind("click");
            $('.team-pagination-wrapper nav.paging-ajax ul li a').on('click', function(e) {
                e.preventDefault();
                var container = $(this).closest('.tab-content');
                $('.slz-loader-wrapper', container).show().fadeIn();
                $.goahead_core_scroll_to(container);
                var page = parseInt($(this).data('page'));
                var base = $(this).closest('.paging-ajax').parent().find('.slz-pagination-base').data('base');
                var atts = $(this).closest('.paging-ajax').parent().find('.pagination-json').attr('data-json');
                var data = { "page": page, "base": base, "atts": jQuery.parseJSON(atts) };
                $.fn.Form.ajax(['top.Top_Controller', 'ajax_team_pagination'], data, function(res) {
                    container.html(res);
                    $('.slz-loader-wrapper', container).show().fadeOut();
                    $.goahead_core_team_pagination();
                });
            });
        }
        if ($(".team-pagination-wrapper .load-more a").length) {
            $('.team-pagination-wrapper .load-more a').unbind("click");
            $('.team-pagination-wrapper .load-more a').on('click', function(e) {
                e.preventDefault();
                var $this = $(this);
                var container = $(this).closest('.tab-content');
                $('.slz-loader-wrapper', container).show().fadeIn();
                var offset = parseInt($(this).attr('data-offset'));
                var count = parseInt($(this).attr('data-current-count'));
                var atts = $(this).attr('data-json');
                var data = { "offset": offset, "count": count, "atts": jQuery.parseJSON(atts) };
                $.fn.Form.ajax(['top.Top_Controller', 'ajax_team_load_more'], data, function(res) {
                    if (!res) {
                        $this.hide().fadeOut()
                    }
                    $('.wrapper-main-content .row', container).append(res);
                    var post_count = $('.slz-team-loadmore-offset', container).html();
                    var current_count = $('.slz-team-loadmore-offset', container).attr('data-count');
                    $this.attr('data-offset', post_count);
                    $this.attr('data-current-count', current_count);
                    $('.slz-team-loadmore-offset', container).remove();
                    $('.slz-loader-wrapper', container).show().fadeOut();
                    $.goahead_core_team_pagination();
                });
            });
        }
    };
    $.goahead_core_service_pagination = function() {
        if ($(".service-pagination-wrapper nav.paging-ajax").length) {
            $('.service-pagination-wrapper nav.paging-ajax ul li a').unbind("click");
            $('.service-pagination-wrapper nav.paging-ajax ul li a').on('click', function(e) {
                e.preventDefault();
                var container = $(this).closest('.service-content');
                $('.slz-loader-wrapper', container).show().fadeIn();
                $.goahead_core_scroll_to(container);
                var page = parseInt($(this).data('page'));
                var base = $(this).closest('.paging-ajax').parent().find('.slz-pagination-base').data('base');
                var atts = $(this).closest('.paging-ajax').parent().find('.pagination-json').attr('data-json');
                var data = { "page": page, "base": base, "atts": jQuery.parseJSON(atts) };
                $.fn.Form.ajax(['top.Top_Controller', 'ajax_servicce_pagination'], data, function(res) {
                    container.html(res);
                    $('.slz-loader-wrapper', container).show().fadeOut();
                    $.goahead_core_service_pagination();
                });
            });
        }
    };
    $.goahead_core_scroll_to = function(element) {
        if (element.length) {
            $('body,html').animate({
                scrollTop: element.offset().top - 100
            }, 1000);
        }
        return false;
    }
})(jQuery);

jQuery(document).ready(function() {
    new WOW().init();
    jQuery.goahead_core_partner();
    jQuery.goahead_core_toggle();
    jQuery.goahead_core_testimonial();
    jQuery.goahead_core_service();
    jQuery.goahead_core_team_carousel();
    jQuery.goahead_core_team_carousel_style2();
    jQuery.goahead_core_number_factor();
    jQuery.goahead_core_gallery();

    jQuery.goahead_core_gallery_dirhover();
    jQuery.goahead_core_ajax_gallery_load_more();
    jQuery.goahead_core_gallery_filter();
    jQuery.goahead_core_post_list();
    jQuery.goahead_core_vacancy();
    jQuery.goahead_core_timeline();
    jQuery.goahead_core_widget_gallery();
    jQuery.goahead_core_gallery_single();
    jQuery.goahead_core_team_pagination();
    jQuery.goahead_core_service_pagination();
});
jQuery(window).load(function() {});
jQuery(window).resize(function() {
    jQuery.goahead_core_service();
});
