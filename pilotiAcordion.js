(function( $ ) {
	'use scrict';
	$.fn.pilotiAcordion = function( settings ) {
		
		var config = {
			speed: 400,
			action: "click",
			activeClass : "acordion-active",
			closeActive : function(timer, activeClass){
				$("."+activeClass).each(function(){
					$(this).removeClass(activeClass);
					$(this).parent().find('[data-accordion="true"]').slideUp(timer);
				});
			}

		},
		elemento = $(this);
		$.extend(true, config, settings);

		elemento.on(config.action, function(e){
			e.preventDefault();
			var self = $(this),
				elementoToggle = self.parent().find('[data-accordion="true"]');

			config.closeActive(config.speed, config.activeClass);

			if(self.hasClass(config.activeClass)){
				self.removeClass(config.activeClass);
			}else{
				self.addClass(config.activeClass);
			}
			elementoToggle.slideToggle(config.speed);

		});

		return this;
	};
 
}( jQuery ));