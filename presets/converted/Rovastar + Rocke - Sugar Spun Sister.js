define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.998,
		wave_g : 0.45,
		ib_g : 0.57,
		mv_x : 63.936001,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 47.952,
		wave_scale : 1.116811,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.1,
		fshader : 0.0,
		wave_r : 0.9,
		ib_r : 0.5,
		mv_b : 0.8,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9619,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.05,
		invert : 0.0,
		rot : -0.01,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.994,
		wave_a : 5.9,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.4,
		mv_r : 0.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.1*((0.6*Math.sin((0.933*m.time)))+(0.4*Math.sin((1.072*m.time))))));
m.wave_g = (m.wave_g+(0.1*((0.6*Math.sin((0.888*m.time)))+(0.4*Math.sin((0.918*m.time))))));
m.wave_b = (m.wave_b+(0.2*((0.6*Math.sin((0.335*m.time)))+(0.4*Math.sin((0.4*m.time))))));
m.wave_mystery = (0.5*Math.sin((0.35*m.bass)));
m.decay = (m.decay-(0.01*equal(mod(m.frame,50), 0)));
m.mv_b = (m.mv_b+(0.2*Math.sin((m.time*1.411))));
m.cx = (m.cx+(0.08*Math.sin((m.time*1.315))));
m.cy = (m.cy+(0.08*Math.sin((m.time*1.127))));
m.q1 = Math.sin(((Math.sin((1.211*m.time))+Math.cos((0.887*m.time)))-Math.sin((1.453*m.time))));
		m.rkeys = ['rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(0.1*m.rad));
m.rot = (m.rot-(0.15*Math.sin((m.q1-m.ang))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.1*(0.6*sin(0.933*time) + 0.4*sin(1.072*time));\n' + 'wave_g = wave_g + 0.1*(0.6*sin(0.888*time) + 0.4*sin(0.918*time));\n' + 'wave_b = wave_b + 0.2*(0.6*sin(0.335*time) + 0.4*sin(0.4*time));\n' + 'wave_mystery = 0.5*sin(0.35*bass);\n' + 'decay = decay - 0.01*equal(frame%50,0);\n' + 'mv_b = mv_b + 0.2*sin(time*1.411);\n' + 'cx = cx + 0.08*sin(time*1.315);\n' + 'cy = cy + 0.08*sin(time*1.127);\n' + 'q1 = sin(sin(1.211*time)+ cos(0.887*time)-sin(1.453*time));'),
	'pixel_eqs_str' : ('zoom = zoom + (0.1*rad);\n' + 'rot = rot - 0.15*sin(q1-ang);'),
};

return pmap;
});