
jQuery(function() {
  var $module = jQuery('#m-1585926003308').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1589212417352').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1585926003312').children('.module');
  $module.gfV3Product();
});
(function(jQuery) {
  var $module = jQuery('#m-1634241229351').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    jQuery(function() {
        var $module = jQuery('#m-1585926003312-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585926003312-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    jQuery(function() {
  var $module = jQuery('#m-1585926003334').children('.module');
  $module.gfV3Product();
});
(function(jQuery) {
  var $module = jQuery('#m-1634241200688').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    jQuery(function() {
        var $module = jQuery('#m-1585926003334-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585926003334-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    jQuery(function() {
  var $module = jQuery('#m-1585926003316').children('.module');
  $module.gfV3Product();
});
(function(jQuery) {
  var $module = jQuery('#m-1634241234927').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    jQuery(function() {
        var $module = jQuery('#m-1585926003316-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585926003316-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    
        jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1592292719451').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1592292719451').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1592292719451');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1592292719451').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1592292719451').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1592292719451').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    