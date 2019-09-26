(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"蜜蜂_mo_atlas_", frames: [[0,104,81,85],[0,0,84,102]]}
];


// symbols:



(lib.資產42 = function() {
	this.initialize(ss["蜜蜂_mo_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.資產52 = function() {
	this.initialize(ss["蜜蜂_mo_atlas_"]);
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
(lib.蜜蜂_mo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_5
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(-195.1,415.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-195,415.8,-158.8,349.8,-97.4,306.4,-42.9,267.9,25.3,250.9,86.9,235.6,147.3,240.4,164.5,241.8,180,244.6,216.1,251.2,242.7,265.9]}},52).wait(35).to({guide:{path:[242.9,265.9,242.9,265.9,242.9,265.9,242.9,223.9,281.7,163.8,320.4,104.2,384,47.5,451.8,-13,527.8,-51.6,528.4,-51.9,529.1,-52.2]}},32).wait(1));

	// 圖層_6
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(986.4,969.65,1,1,-105.0002);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,guide:{path:[986.5,969.7,941.1,1012.5,864.5,1027.6,797.4,1040.9,717.5,1031.4,645,1022.8,585.1,998.8,526,975.2,506.7,947.7,499.2,937.1,491.4,927.2], orient:'auto'}},35).wait(29).to({guide:{path:[491.2,927.3,454.8,881.8,408.1,850.7,354,814.8,291,801.3,236.1,789.6,180,795.9,173.4,796.6,166.7,797.6,103.8,807,46.8,837.8,-9,867.9,-81.2,871,-150.7,874,-221.8,851.6,-293.6,828.9,-351.5,785.2,-412.6,739.1,-446.9,677.9], orient:'auto'}},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,509.2,1160.4,589.3);
// library properties:
lib.properties = {
	id: '16FEC5E19ADDDB4D8572AD6680E1385B',
	width: 750,
	height: 1208,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/蜜蜂_mo_atlas_.png", id:"蜜蜂_mo_atlas_"}
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