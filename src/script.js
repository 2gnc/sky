'use strict';

function SpaceObj() {

};
SpaceObj.prototype.render = function() {};
SpaceObj.prototype.randomizer = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

var Space = new SpaceObj();

function Sky() {
	this.stars = [];
};

Sky.prototype = Object.create( SpaceObj.prototype );
Sky.prototype.constructor = Sky;
Sky.prototype.render = function() {
	var target = document.querySelector( '.header' ),
			el = document.createElement('div');
			el.className = 'sky';
			target.appendChild(el);
};
Sky.prototype.makeStars = function( numb ){
	var stars = []
		for (var i = 0; i < numb; i++) {
			var type = Space.randomizer(2, 3),
					x = Space.randomizer(0, 100),
					y = Space.randomizer(0, 100);
			stars[i] = new Star(type, x, y, 'some') ; 
			}; 
		mySky.stars = stars;
	};
Sky.prototype.renderStars = function(arr) {
	var styles = document.styleSheets[1];
	arr.forEach(function(item, i, arr) {
		var starclassname = 'star--'+i,
				x = 'left: ' + item.x + '%;',
				y = 'top: ' + item.y + '%;',
				vh = 'height: ' + item.type + 'px;',
				vw = 'width: ' + item.type + 'px;';
		styles.insertRule('.' + starclassname + '{' + x + ' ' + y + vh + vw  + '}', i );
		item.render( starclassname + ' star');
	});
};

function Star(type, x, y) { 
	this.type = type;
	this.x = x;
	this.y = y;
};
Star.prototype = Object.create( SpaceObj.prototype );
Star.prototype.constructor = Star;
Star.prototype.render = function(cl) {
	var target = document.querySelector( '.sky' );
	var el = document.createElement( 'div' );
	el.className = cl;
	target.appendChild(el);
};

var mySky = new Sky( 'some' );
var numberOfStars = mySky.randomizer(100, 300);
mySky.stars = numberOfStars;

mySky.render();
mySky.makeStars(numberOfStars);
mySky.renderStars(mySky.stars);


