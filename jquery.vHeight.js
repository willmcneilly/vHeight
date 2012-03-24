/*!
 * A Responsive Height plugin for jQuery v1.7
 * @link 
 * @description Set a height in percentage on a container and have it
 *              increase/decrease with the size of the viewport.     
 * @author Will McNeilly <http://willmcneilly.com/>
 */

(function($,undefined){
  $.fn.vHeight = function(params) {
    
    var settings = $.extend(
      {},
      {
        dataAttName : "vheight",
        className : "vheight"  
      },
      params);


    vheightObjects = $.find('.' + settings.className);

    getViewportHeight = function() {
      viewportHeight = $(window).height();
      return viewportHeight;
    }

    calcNewHeight = function( percentHeight, viewportHeightPixels) {
      return (percentHeight / 100) * viewportHeightPixels;
    }

    setNewHeight = function() {
      viewportHeight = getViewportHeight();
      $(vheightObjects).each(function(){
        percentHeight = $(this).data(settings.dataAttName);
        newHeightInPixels = calcNewHeight(percentHeight, viewportHeight);
        $(this).height(newHeightInPixels + 'px');
      });
    }

    $(window).bind("load resize", function(){
      setNewHeight();
    });
    
  }
})(jQuery);