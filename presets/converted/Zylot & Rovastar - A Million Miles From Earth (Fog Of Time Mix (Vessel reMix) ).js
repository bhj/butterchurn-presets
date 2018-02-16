define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.6,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 2.4,
		wave_scale : 0.098609,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0215,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.999996,
		mv_dx : 0.0,
		mv_dy : -0.1,
		mv_a : 1.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0045,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.976,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 1.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.ib_r = (0.9+(0.1*Math.sin((m.time*0.894))));
m.ib_g = (0.43+(0.13*Math.sin((m.time*0.14))));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.004)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.004)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.dx = (1.1*m.dx_r);
m.dy = (1.1*m.dy_r);
m.dx = (m.dx+ifcond(above((m.bass+m.bass_att), 2.6), (21*m.dx_r), 0));
m.dy = ifcond(above(m.bass, 1.3), 0, m.dy);
m.mv_l = 10000;
m.mv_y = 2.0;
m.mv_dy = -0.1;
m.zoom = (m.zoom-(0.02*m.thresh));
m.wave_r = m.ib_r;
m.wave_b = m.ib_b;
m.wave_g = m.ib_g;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ifcond(below(m.rad, (0.3+(0.1*Math.sin(m.time)))), (m.zoom+-0.6), m.zoom);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'ib_r = 0.9 + 0.1*sin(time*0.894);\n' + 'ib_g = 0.43 + 0.13*sin(time*0.14);\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.004*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.004*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'dx = 1.1* dx_r;\n' + 'dy = 1.1* dy_r;\n' + 'dx = dx + if(above(bass+bass_att,2.6), 21*dx_r, 0);\n' + 'dy = if(above(bass,1.3), 0, dy);\n' + 'mv_l =10000;\n' + 'mv_y =2.0;\n' + 'mv_dy = -0.1;\n' + 'zoom = zoom -0.02*thresh;\n' + 'wave_r = ib_r;\n' + 'wave_b = ib_b;\n' + 'wave_g = ib_g;'),
	'pixel_eqs_str' : ('zoom = if(below(rad,.3+.1*sin(time)),zoom + -.6,zoom);'),
};

return pmap;
});