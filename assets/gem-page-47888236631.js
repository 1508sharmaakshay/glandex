
jQuery(function() {
  var $module = jQuery('#m-1585928816065').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928816065-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928816065-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928816065-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928816065-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
    var $module = jQuery('#m-1585928823972').children('.module');

    var sameHeightTitle = $module.data('sameheightitle'),
        spacing = $module.data('spacing');
        collg = $module.data('collg'),
        colmd = $module.data('colmd'),
        colsm = $module.data('colsm'),
        colxs = $module.data('colxs');

    var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
    var col = collg;


    jQuery(window).resize(function() {
        setTimeout(function() {
            for(var i = 0; i < $clearfixes.length; i++) {
                if($clearfixes.eq(i).css('display') == 'block') {
                    if($clearfixes.eq(i).hasClass('visible-lg')) {
                        col = collg;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-md')) {
                        col = colmd;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-sm')) {
                        col = colsm;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-xs')) {
                        col = colxs;
                        break;
                    }
                }
            }
        }, 1000);
    });

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child1').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child1-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child2').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child2-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child3').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child3-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child4').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child4-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child4-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child5').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child5-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child5-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child6').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child6-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child6-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child7').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child7-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child7-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child8').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child8-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child8-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child9').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child9-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child9-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child10').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1585928823972-child10-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1585928823972-child10-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585928823972-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585928823972-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});