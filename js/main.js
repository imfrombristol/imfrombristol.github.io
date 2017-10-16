$(document).ready(function () {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('header').addClass('sticky');
		}
		else {
			$('header').removeClass('sticky');
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('.menu-link').addClass('sticky_text')
			$('.menu-link').css('line-height', '15px');
		}
		else {
			$('.menu-link').removeClass('sticky_text')
			$('.menu-link').css('line-height', '');
		}
		
	})
});
    
var parallaxContainer = document.getElementById('parallax'),
    layers = parallaxContainer.children;

var moveLayers = function(e) {
    var initialX = (window.innerWidth / 2) - e.pageX
        initialY = (window.innerHeight / 2) - e.pageY;

    [].slice.call(layers).forEach(function (layer, i){
        var divider = i/100,
            positionX = initialX * divider,
            positionY = initialY * divider,
            bottomPosition = (window.innerHeight / 2) * divider,
            layerStyle = layer.style,
            transformString = 'translate3d(' + positionX + 'px ,' + positionY + 'px , 0)';

        layerStyle.transform = transformString;
        layerStyle.bottom = '-' + bottomPosition + 'px';
    });
}

window.addEventListener('mousemove', moveLayers);