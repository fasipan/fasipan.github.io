jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
    =            SAMPLE FUNCTION            =
    =======================================*/

    SLZ.mainFunction = function() {
        $(".timeline-slider").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 1000,
            dots: false,
            responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }]
        });

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
        // COUNT FUN FACT
        $('.table-number').text('0');
        setTimeout(function() {
            $('.main-table').appear(function() {
                var data_value = $(this).attr('data-value');
                $(this).find('.table-number').countTo({
                    to: data_value,
                    speed: 2000,
                    refreshInterval: 100
                });
            });
        }, 1000);

        $(".banner-main-right").slick({
            infinite: true,
            slidesToShow: 5,
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
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 415,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    };

    SLZ.mapFunction = function() {
        $('#map').vectorMap({
            map: 'us_aea',
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: '#d5d5d5',
                    "fill-opacity": 1,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 1
                },
                hover: {
                    "fill-opacity": 1,
                    cursor: 'pointer',
                    fill: '#93c23d',
                }
            }
        });
    };

    SLZ.drawChart = function() {
        var ct1 = $('#chart-md-01');
        var ct2 = $('#chart-md-02');

        var ct1Option = {
            scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        unitStepSize: 14,
                        unit: "year",
                        tooltipFormat: 'Y'
                    },
                    gridLines: {
                        display: false
                    }
                }]
            },
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#93c23d',
                callbacks: {
                    label: function(item) {
                        var r = item.yLabel;
                        return r;
                    }
                }
            }
        };

        var ct2Option = {
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            },
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#93c23d',
                callbacks: {
                    label: function(item) {
                        var r = item.yLabel;
                        return r;
                    }
                }
            }
        };

        var draw_ct_1 = new Chart(ct1, {
            type: 'line',
            data: {
                labels: [moment('1962-01'), moment('1966-01'), moment('1976-01'), moment('1986-01'), moment('1996-01'), moment('2006-01'), moment('2016-01')],
                datasets: [{
                    data: [0.87, 2.69, 3.32, 2.64, 2.68, 5.03, 4.45],
                    backgroundColor: 'rgba(0, 189, 201, .6)',
                    borderColor: '#00bdc9',
                    pointBackgroundColor: '#038e91',
                    pointBorderColor: '#038e91',
                    pointRadius: 3,
                    pointHitRadius: 5,
                    lineTension: 0.4,
                    borderWidth: 2,
                    pointStyle:'triangle'
                }, {
                    data: [2.68, 3.31, 2.64, 5.04, 3.42, 10.08, 12.45],
                    backgroundColor: '#b7d08b',
                    borderColor: '#87b03d',
                    pointBackgroundColor: '#71881d',
                    pointBorderColor: '#71881d',
                    pointRadius: 3,
                    pointHitRadius: 5,
                    lineTension: 0.4,
                    borderWidth: 2
                }]
            },
            options: ct1Option
        });

        var draw_ct_2 = new Chart(ct2, {
            type: 'bar',
            data: {
                labels: ['Stock', 'Bound', 'Gold', 'Real Estate', 'Fund'],
                datasets: [{
                    type: 'line',
                    data: [2.74, 2.30, 2.73, 6.18, 2.89],
                    backgroundColor: 'transparent',
                    borderColor: '#87b03d',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 5,
                    lineTension: 0.4,
                    borderWidth: 2
                }, {
                    data: [2.77, 1.89, 0.72, 2.64, 3.22],
                    backgroundColor: '#00a4b8',
                    borderColor: '#00a4b8'
                }, {
                    data: [2.28, 2.69, 5.00, 7.43, 5.88],
                    backgroundColor: '#00739a',
                    borderColor: '#00739a'
                }, {
                    data: [3.34, 2.58, 2.60, 8.32, 10.00],
                    backgroundColor: '#95b70a',
                    borderColor: '#95b70a'
                }]
            },
            options: ct2Option
        });
    };

    /*=====  End of SAMPLE FUNCTION  ======*/




    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.mainFunction();
        SLZ.mapFunction();
        SLZ.drawChart();
    });

    /*=====  End of INIT FUNCTIONS  ======*/


});
