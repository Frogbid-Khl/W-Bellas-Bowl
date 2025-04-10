$(document).ready(function () {
	"use strict";

	// Calling LayerSlider 
		
        $('#slider').layerSlider({
            responsive: true,
			fitScreenWidth:false,
            responsiveUnder: 1280,
            layersContainer: 1280,
            skin: 'v6',
            hoverPrevNext: false,
            skinsPath: './vendor/layerslider/skins/',
            autoStart: true,
			autoPlayVideos : false
        });

		
 });