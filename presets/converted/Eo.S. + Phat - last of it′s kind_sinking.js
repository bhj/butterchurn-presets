define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 12.799995,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.600006,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.105,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.999998,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 0.71,
		echo_zoom : 0.999996,
		ob_size : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 13.290894,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : -0.28,
		cx : 0.5,
		dy : -0.32,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.94,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.rd = 0;
m.musictime = 0;
m.vol = 0;
m.zoom = 1;
m.xpos = 0;
m.ypos = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.vol = (((m.bass+m.mid)+m.treb)*0.95);
m.vol = m.vol;
m.mv_r = (0.5+(0.4*Math.sin((m.time*1.324))));
m.mv_g = (0.5+(0.4*Math.cos((m.time*1.371))));
m.zoom = 1;
m.musictime = (m.musictime+(m.vol*div(35,m.fps)));
m.q4 = (Math.cos((m.musictime*0.02))*0.3);
m.q5 = (Math.sin((m.musictime*0.01))*0.3);
m.dy = ((m.musictime*0.119)*0.2);
m.monitor = m.rot;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*1.7))+sqr((((m.y-0.5)+m.q5)*1.2))));
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.zoom = (Math.tan((div(m.rd,5)+0.01))+div(Math.tan((div(m.rad,20)+0.01)),div(m.rd,m.rad)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.491382,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+m.q4);
m.y = (0.5+m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+q4;\n' + 'y=.5+q5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.819541,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.011202,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = 0.01;
m.x = (0.5-m.q4);
m.y = (0.5-m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=0.01;\n' + 'x=.5-q4;\n' + 'y=.5-q5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02743,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 34.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = 0.01;
m.x = (0.4-m.q4);
m.y = (0.5-m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=0.01;\n' + 'x=.4-q4;\n' + 'y=.5-q5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('zoom=1;\n' + 'xpos=0;\n' + 'ypos=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'vol= (bass+mid+treb)*0.95;\n' + 'vol=vol;\n' + 'mv_r = 0.5 + 0.4*sin(time*1.324);\n' + 'mv_g = 0.5 + 0.4*cos(time*1.371);\n' + 'zoom=1;\n' + 'musictime=musictime+vol*(35/fps);\n' + 'q4=cos(musictime*0.02)*0.3;\n' + 'q5=sin(musictime*0.01)*0.3;\n' + 'dy=(musictime*0.119)*0.2;\n' + 'monitor=rot;'),
	'pixel_eqs_str' : ('rd=sqrt( sqr( (x-0.5-q4)*1.7) + sqr( (y-0.5+q5)*1.2 ) );\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'zoom=tan(rd/5+0.01)+tan(rad/20+0.01)/(rd/rad);'),
};

return pmap;
});