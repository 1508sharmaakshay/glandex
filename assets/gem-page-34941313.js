
jQuery(function() {
  var $module = jQuery('#m-1585925336479').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1585925336527').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1585925336590').children('.module');
  $module.gfV3Product();
});jQuery(function() {
  var $module = jQuery('#m-1585925336590-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585925336590-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585925336590-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585925336521').children('.module');
  $module.gfV3Product();
});jQuery(function() {
  var $module = jQuery('#m-1585925336521-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585925336521-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585925336521-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585925336483').children('.module');
  $module.gfV3Product();
});jQuery(function() {
  var $module = jQuery('#m-1585925336483-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1585925336483-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1585925336483-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1585925336587').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
});
        jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595610753663').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595610753663').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595610753663');
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
                  jQuery('#m-1595610753663').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595610753663').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595610753663').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    