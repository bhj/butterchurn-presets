define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.994,
		wave_g : 0.65,
		ib_g : 0.34,
		mv_x : 12.0,
		warpscale : 3.928016,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.524161,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0285,
		warp : 1.771011,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 2.1,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.34,
		echo_zoom : 2.0,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.334695,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.961,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.97,
		wave_a : 4.499998,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.65,
		ib_b : 0.34,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.blah = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_x = (m.wave_x+(0.2900*((0.60*Math.sin((2.121*m.time)))+(0.40*Math.sin((1.621*m.time))))));
m.wave_y = (m.wave_y+(0.2900*((0.60*Math.sin((1.742*m.time)))+(0.40*Math.sin((2.322*m.time))))));
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.blah = div(0.5,((m.wave_r+m.wave_g)+m.wave_b));
m.wave_r = (m.wave_r*m.blah);
m.wave_g = (m.wave_g*m.blah);
m.wave_b = (m.wave_b*m.blah);
m.rot = (m.rot+(0.35*((0.60*Math.sin((0.21*m.time)))+(0.30*Math.sin((0.339*m.time))))));
m.cx = (m.cx+(0.30*((0.60*Math.sin((0.374*m.time)))+(0.14*Math.sin((0.194*m.time))))));
m.cy = (m.cy+(0.37*((0.60*Math.sin((0.274*m.time)))+(0.10*Math.sin((0.394*m.time))))));
m.dx = (m.dx+(0.01*((0.60*Math.sin((0.324*m.time)))+(0.40*Math.sin((0.234*m.time))))));
m.dy = (m.dy+(0.01*((0.60*Math.sin((0.244*m.time)))+(0.40*Math.sin((0.264*m.time))))));
m.ib_r = (m.ib_r+(0.2*Math.sin((m.time*0.5413))));
m.ib_g = (m.ib_g+(0.2*Math.sin((m.time*0.6459))));
m.ib_b = (m.ib_b+(0.2*Math.sin((m.time*0.7354))));
m.blah = (div(12.4,((m.ib_r+m.ib_g)+m.ib_b))*3);
m.ib_r = (m.ib_r*m.blah);
m.ib_g = (m.ib_g*m.blah);
m.ib_b = (m.ib_b*m.blah);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_x = wave_x + 0.2900*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );\n' + 'wave_y = wave_y + 0.2900*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );\n' + 'wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'blah = 0.5/(wave_r+wave_g+wave_b);\n' + 'wave_r = wave_r*blah;\n' + ' wave_g = wave_g*blah;\n' + ' wave_b = wave_b*blah;\n' + 'rot = rot + 0.35*( 0.60*sin(0.21*time) + 0.30*sin(0.339*time) );\n' + 'cx = cx + 0.30*( 0.60*sin(0.374*time) + 0.14*sin(0.194*time) );\n' + 'cy = cy + 0.37*( 0.60*sin(0.274*time) + 0.10*sin(0.394*time) );\n' + 'dx = dx + 0.01*( 0.60*sin(0.324*time) + 0.40*sin(0.234*time) );\n' + 'dy = dy + 0.01*( 0.60*sin(0.244*time) + 0.40*sin(0.264*time) );\n' + 'ib_r = ib_r + 0.2*sin(time*0.5413);\n' + 'ib_g = ib_g + 0.2*sin(time*0.6459);\n' + 'ib_b = ib_b + 0.2*sin(time*0.7354);\n' + 'blah = 12.4/(ib_r+ib_g+ib_b)*3;\n' + 'ib_r = ib_r*blah;\n' + ' ib_g = ib_g*blah;\n' + ' ib_b = ib_b*blah;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});