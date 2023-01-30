

(function( jQuery ){
  var $module = jQuery('#m-1624634384322').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1624634384221').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1660601234797').children('.module');
  var videoUrl = jQuery.trim($module.attr('data-url'));
  var autoPause = $module.attr('data-autopause');
  var autoPlay = $module.attr('data-autoplay');
  var videoloop = $module.attr('data-videoloop');
  var videoMute = $module.attr('data-videomute');
  var byline = $module.attr('data-byline');
  var showtitle = $module.attr('data-showtitle');
  var showportrait = $module.attr('data-showportrait');

  setTimeout(function() {
    var videoWrapper = $module.children('.vimeo_video');
    videoWrapper.empty().append('<div id="vimeo-wrapper-1660601234797"></div>');

    var options = {
      url: videoUrl,
      loop: videoloop,
      autoplay: autoPlay,
      autopause: autoPause,
      byline: byline,
      title: showtitle,
      muted: videoMute,
      portrait: showportrait
    };
    var player = new Vimeo.Player("vimeo-wrapper-1660601234797", options);

    player.on('loaded', function() {	
      var $playerFrame = $module.find('iframe');	
      var width = parseInt($playerFrame.attr('width'));	
      var height = parseInt($playerFrame.attr('height'));	
      if (width != NaN && height != NaN) {	
        $module.find('.videoFullScreen').css('padding-bottom', (height / width * 100) + '%');	
      }	
    });	
    
    $module.on('pausevideo', function() {	
      player.pause();	
    });
  }, 100);
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1624634563513').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1624634563513').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1624634563513');
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
                  jQuery('#m-1624634563513').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1624634563513').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1624634563513').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    
                          (function( jQuery ){
                              try{
                                  if(jQuery().gfV2Lazyload){
                                      var $module = jQuery(window);
                                      $module.gfV2Lazyload({delay:125})
                                  }
                              }catch(err){
                                  console.error(err)
                              }
                          })( window.GemQuery || jQuery );
                      