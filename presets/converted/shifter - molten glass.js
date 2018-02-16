define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 3.300904,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.5,
		wave_smoothing : 0.9,
		warpanimspeed : 0.380217,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.azoom = 0;
m.adx = 0;
m.ady = 0;
m.decay = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 7;
m.wave_a = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ((1.2*(0.5-Math.abs((m.x-0.5))))*(0.5-Math.abs((m.y-0.5))));
m.rot = 1;
m.adx = (1-(0.01*(m.x-0.5)));
m.ady = (1-(0.01*(m.y-0.5)));
m.cy = (m.y+(0.1*Math.sin((m.x*40))));
m.cx = (m.x+(0.1*Math.sin((m.y*40))));
m.azoom = 0.99;
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.033469,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.ym = 0;
m.xm = 0;
m.ys = 0;
m.xs = 0;
m.fran = 1;
m.xs = 1;
m.ys = 1;
m.xm = 0.5;
m.ym = 0.5;
			m.rkeys = ['ym','xm','ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xs = (m.xs*((1-(2*above(m.xm, 0.99)))-(2*below(m.xm, 0.01))));
m.ys = (m.ys*((1-(2*above(m.ym, 0.99)))-(2*below(m.ym, 0.01))));
m.xm = (m.xm+((0.03*m.xs)*((Math.sin((m.time*0.53))*0.4)+(0.6*Math.cos((m.time*0.62))))));
m.ym = (m.ym+((0.03*m.ys)*((Math.sin((m.time*0.29))*0.5)+(0.5*Math.cos((m.time*0.78))))));
m.x = m.xm;
m.y = m.ym;
m.r = ((0.5+(0.25*Math.sin((m.x*12))))+(0.25*Math.sin((m.y*3))));
m.g = ((0.5+(0.25*Math.sin((m.x*7))))+(0.25*Math.sin((m.y*32))));
m.b = ((0.5+(0.25*Math.sin((m.x*21))))+(0.25*Math.sin((m.y*16))));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
m.rad = div((0.2*((m.bass_att+m.mid_att)+m.treb_att)),3);
		return m;
	},
		'init_eqs_str' : ('fran = 1;\n' + 'xs = 1;\n' + 'ys = 1;\n' + 'xm = 0.5;\n' + 'ym = 0.5;'),
		'frame_eqs_str' : ('xs = xs*(1 - 2*above(xm,0.99) - 2*below(xm,0.01));\n' + 'ys = ys*(1 - 2*above(ym,0.99) - 2*below(ym,0.01));\n' + 'xm = xm + 0.03*xs*(sin(time*0.53)*0.4 + 0.6*cos(time*0.62));\n' + 'ym = ym + 0.03*ys*(sin(time*0.29)*0.5 + 0.5*cos(time*0.78));\n' + 'x = xm;\n' + 'y = ym;\n' + 'r = 0.5 + 0.25*sin(x*12) + 0.25*sin(y*3);\n' + 'g = 0.5 + 0.25*sin(x*7) + 0.25*sin(y*32);\n' + 'b = 0.5 + 0.25*sin(x*21) + 0.25*sin(y*16);\n' + 'r2 = r;\n' + ' g2 = g;\n' + ' b2 = b;\n' + 'rad = 0.2*(bass_att + mid_att + treb_att)/3;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.033469,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.ym = 0;
m.xm = 0;
m.ys = 0;
m.xs = 0;
m.fran = 1;
m.xs = 1;
m.ys = 1;
m.xm = 0.5;
m.ym = 0.5;
			m.rkeys = ['ym','xm','ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xs = (m.xs*((1-(2*above(m.xm, 0.99)))-(2*below(m.xm, 0.01))));
m.ys = (m.ys*((1-(2*above(m.ym, 0.99)))-(2*below(m.ym, 0.01))));
m.xm = (m.xm+((0.03*m.xs)*((Math.sin((m.time*0.53))*0.6)+(0.4*Math.cos((m.time*0.62))))));
m.ym = (m.ym+((0.03*m.ys)*((Math.sin((m.time*0.29))*0.7)+(0.3*Math.cos((m.time*0.78))))));
m.x = m.xm;
m.y = m.ym;
m.r = ((0.5+(0.25*Math.sin((m.x*12))))+(0.25*Math.sin((m.y*3))));
m.g = ((0.5+(0.25*Math.sin((m.x*7))))+(0.25*Math.sin((m.y*32))));
m.b = ((0.5+(0.25*Math.sin((m.x*21))))+(0.25*Math.sin((m.y*16))));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
m.rad = div((0.2*((m.bass_att+m.mid_att)+m.treb_att)),3);
		return m;
	},
		'init_eqs_str' : ('fran = 1;\n' + 'xs = 1;\n' + 'ys = 1;\n' + 'xm = 0.5;\n' + 'ym = 0.5;'),
		'frame_eqs_str' : ('xs = xs*(1 - 2*above(xm,0.99) - 2*below(xm,0.01));\n' + 'ys = ys*(1 - 2*above(ym,0.99) - 2*below(ym,0.01));\n' + 'xm = xm + 0.03*xs*(sin(time*0.53)*0.6 + 0.4*cos(time*0.62));\n' + 'ym = ym + 0.03*ys*(sin(time*0.29)*0.7 + 0.3*cos(time*0.78));\n' + 'x = xm;\n' + 'y = ym;\n' + 'r = 0.5 + 0.25*sin(x*12) + 0.25*sin(y*3);\n' + 'g = 0.5 + 0.25*sin(x*7) + 0.25*sin(y*32);\n' + 'b = 0.5 + 0.25*sin(x*21) + 0.25*sin(y*16);\n' + 'r2 = r;\n' + ' g2 = g;\n' + ' b2 = b;\n' + 'rad = 0.2*(bass_att + mid_att + treb_att)/3;'),

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
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.033469,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.ym = 0;
m.xm = 0;
m.ys = 0;
m.xs = 0;
m.fran = 1;
m.xs = 1;
m.ys = 1;
m.xm = 0.5;
m.ym = 0.5;
			m.rkeys = ['ym','xm','ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xs = (m.xs*((1-(2*above(m.xm, 0.99)))-(2*below(m.xm, 0.01))));
m.ys = (m.ys*((1-(2*above(m.ym, 0.99)))-(2*below(m.ym, 0.01))));
m.xm = (m.xm+((0.03*m.xs)*((Math.sin((m.time*0.35))*0.5)+(0.5*Math.cos((m.time*0.87))))));
m.ym = (m.ym+((0.03*m.ys)*((Math.sin((m.time*0.92))*0.3)+(0.7*Math.cos((m.time*0.26))))));
m.x = m.xm;
m.y = m.ym;
m.r = (0.5+(0.5*Math.sin((m.time*0.25))));
m.g = (0.5+(Math.abs(m.r)*Math.sin((m.time*0.5))));
m.b = (0.5+(Math.abs(m.g)*Math.sin(m.time)));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
m.rad = div((1.6*((m.bass_att+m.mid_att)+m.treb_att)),3);
		return m;
	},
		'init_eqs_str' : ('fran = 1;\n' + 'xs = 1;\n' + 'ys = 1;\n' + 'xm = 0.5;\n' + 'ym = 0.5;'),
		'frame_eqs_str' : ('xs = xs*(1 - 2*above(xm,0.99) - 2*below(xm,0.01));\n' + 'ys = ys*(1 - 2*above(ym,0.99) - 2*below(ym,0.01));\n' + 'xm = xm + 0.03*xs*(sin(time*0.35)*0.5 + 0.5*cos(time*0.87));\n' + 'ym = ym + 0.03*ys*(sin(time*0.92)*0.3 + 0.7*cos(time*0.26));\n' + 'x = xm;\n' + 'y = ym;\n' + 'r = 0.5 + 0.5*sin(time*0.25);\n' + 'g = 0.5 + abs(r)*sin(time*0.5);\n' + 'b = 0.5 + abs(g)*sin(time);\n' + 'r2 = r;\n' + ' g2 = g;\n' + ' b2 = b;\n' + 'rad = 1.6*(bass_att + mid_att + treb_att)/3;'),

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
	'init_eqs_str' : ('decay = 0;'),
	'frame_eqs_str' : ('warp = 7;\n' + 'wave_a = 0;'),
	'pixel_eqs_str' : ('rot = 1.2*(0.5-abs(x-0.5))*(0.5-abs(y-0.5));\n' + 'rot = 1;\n' + 'adx = (1 - 0.01*(x-0.5));\n' + 'ady = (1 - 0.01*(y-0.5));\n' + 'cy = y + 0.1*sin(x*40);\n' + 'cx = x + 0.1*sin(y*40);\n' + 'azoom = 0.99;'),
};

return pmap;
});