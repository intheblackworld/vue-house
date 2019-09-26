(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"蜜蜂_atlas_", frames: [[0,104,81,85],[0,0,84,102]]}
];


// symbols:



(lib.資產42 = function() {
	this.initialize(ss["蜜蜂_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.資產52 = function() {
	this.initialize(ss["蜜蜂_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產52();
	this.instance.parent = this;
	this.instance.setTransform(-42,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-42,-51,84,102), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產42();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-40.5,-42.5,81,85), null);


// stage content:
(lib.蜜蜂 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_5
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(-65.95,645.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-65.9,645.8,-23,570.1,45,540.7,72.5,528.8,107.7,522.8,132,518.6,171.8,515.8,220.6,512.4,234.7,510.8,269.2,506.7,293.7,498.5,323.8,488.4,346.4,469.9,371.8,449,389.9,415.9,426.1,349.9,487.5,306.5,542,268,610.3,251,671.9,235.7,732.3,240.5,789.8,245.1,827.7,266]}},52).wait(35).to({guide:{path:[827.7,265.9,827.7,265.9,827.7,265.9,827.7,210.1,868.6,150.6,908,93.5,975.2,47.1,1043.7,-0.3,1122.9,-23.6,1207.9,-48.6,1287.4,-40]}},32).wait(1));

	// 圖層_6
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2069.45,667.7,1,1,-15.0002);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,guide:{path:[2069.3,667.7,1944.9,580.3,1801.7,623.8,1690,657.7,1571.5,769.7,1526.1,812.5,1449.5,827.6,1382.4,840.9,1302.5,831.4,1230,822.8,1170.1,798.8,1111,775.2,1091.7,747.7,1084.8,737.9,1077.5,728.7], orient:'auto'}},35).wait(29).to({rotation:-29.9992,guide:{path:[1077.5,728.7,1040.6,682.2,993.1,650.7,939,614.7,876,601.2,814.7,588.1,751.8,597.5,688.8,607,631.8,637.7,576,667.9,503.9,671,434.4,673.9,363.3,651.5,291.5,628.9,233.5,585.2,172.4,539.1,138.1,477.8,77.8,370.1,-63.5,303.5,-65.9,302.3,-68.3,301.2], orient:'auto'}},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(829.8,455.3,1293.3999999999999,444.7);
// library properties:
lib.properties = {
	id: '16FEC5E19ADDDB4D8572AD6680E1385B',
	width: 1920,
	height: 1080,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/蜜蜂_atlas_.png", id:"蜜蜂_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['16FEC5E19ADDDB4D8572AD6680E1385B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;