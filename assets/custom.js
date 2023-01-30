jQuery(document).ready(function () {

  $('.template-collection .feature-product .product').each(function(){
    $(this).find('.form .variants-product').change(function(){

    var with_price = $(this).find('option:selected').data('price');
    var without_price = $(this).find('option:selected').data('out-price');
    var this_compare_price = $(this).find('option:selected').data('compare-price');
    var compare_price = $(this).parents('form').siblings('.container-text').find('.compare-price-new').data('out-price');

      $(this).parents('form').siblings('.container-text').find('.original_price').html(with_price);

      if(this_compare_price){
        $(this).parents('form').siblings('.container-text').find('.compare-price-new').css('display','block');
        $(this).parents('form').siblings('.container-text').find('.compare-price-new').html(this_compare_price);
      }else{
        if(compare_price > without_price){
        $(this).parents('form').siblings('.container-text').find('.compare-price-new').css('display','block');
      }else{
        $(this).parents('form').siblings('.container-text').find('.compare-price-new').css('display','none');
      }
      }
                                  // container-text
    });
  });
  
    jQuery(".feature-product-home .products").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '30px',
                adaptiveHeight: true,
            }
        }]
    })

    setTimeout(function () {
        jQuery(".feature-product-home .products").slick('slickSetOption', "adaptiveHeight", true);
    }, 2000)

    jQuery(".feature-product-home .products").on('afterChange', function (event, slick, currentSlide, nextSlide) {
        jQuery(".feature-product-home .product_slider_pagination .active_page").text((currentSlide + 1));
    });

    jQuery(".custom_testimonial_slider .testimonials-sliderNew").slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }
        }]
    })


    jQuery(".right_content .natural_slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }
        }]
    })

    jQuery(".custom_collection_tab_item .item_data.desktop_only").on("click", function () {
        if (!jQuery(this).parent().hasClass("active")) {
            var tabId = jQuery(this).attr("data-tab");
            if (tabId != undefined && tabId != "" && tabId != null && jQuery("#" + tabId).length > 0) {
                jQuery(".custom_collection_tabs .custom_collection_tab_item").removeClass("active");
                jQuery(this).parent().addClass("active");
                jQuery(".custom_collection_tabs_content .custom_collection_tab_item_content").removeClass("active");
                jQuery("#" + tabId).addClass("active");
            }
        }
    })

    jQuery(".faq_section_main .faq_list .faq_item").on("click", function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active");
            jQuery(this).find(".faq_answer").slideUp();
        } else {
            jQuery(".faq_section_main .faq_list .faq_item").removeClass("active");
            jQuery(".faq_section_main .faq_list .faq_item").find(".faq_answer").slideUp();
            jQuery(this).addClass("active");
            jQuery(this).find(".faq_answer").slideDown();
        }
    })

    jQuery(".faq_section_main .faq_list .faq_item:first-child").click();

    jQuery(".header-wrapper .site-header .site-nav__item:first-child").on("mouseover", function () {
        jQuery(".header-wrapper .shop_mega_menu").addClass("show");
        setTimeout(function () {
            jQuery("body").addClass("mega_menu_open");
        }, 200)
    })

    jQuery(".header-wrapper .site-header .site-nav__item:first-child").on("mouseout", function () {
        jQuery("body").removeClass("mega_menu_open");
        setTimeout(function () {
            jQuery(".header-wrapper .shop_mega_menu").removeClass("show");
        }, 200)
    })

    jQuery(".header-wrapper .shop_mega_menu").on("mouseover", function () {
        jQuery(".header-wrapper .shop_mega_menu").addClass("show");
        jQuery("body").addClass("mega_menu_open");
    });

    jQuery(".header-wrapper .shop_mega_menu").on("mouseout", function () {
        jQuery("body").removeClass("mega_menu_open");
        jQuery(".header-wrapper .shop_mega_menu").removeClass("show");
    });

    jQuery(".shop_mega_menu").offset({
        left: 0
    })

    var demoIntl = setInterval(function () {
        jQuery(".shop_mega_menu").offset({
            left: 0
        })
        if (document.readyState == "complete") {
            clearInterval(demoIntl);
        }
    }, 500)

    // jQuery(document).on("click", ".site-nav__link.js-drawer-open-nav", function () {
    //     jQuery("body").addClass("show_drawer_menu");
    // })

    jQuery(document).on("click", ".glandex_section .acc_heading_part", function () {
        if(jQuery(this).next().is(":hidden")) {
            jQuery(this).next().slideDown();
        } else {
            jQuery(this).next().slideUp();
        }
    })
    jQuery(document).on("click", ".vetnique_section .acc_heading_part", function () {
        if(jQuery(this).next().is(":hidden")) {
            jQuery(this).next().slideDown();
        } else {
            jQuery(this).next().slideUp();
        }
    })
})

jQuery(window).on("resize", function () {
    jQuery(".shop_mega_menu").offset({
        left: 0
    })

    setTimeout(function () {
        jQuery(".shop_mega_menu").offset({
            left: 0
        })
    }, 500);
})