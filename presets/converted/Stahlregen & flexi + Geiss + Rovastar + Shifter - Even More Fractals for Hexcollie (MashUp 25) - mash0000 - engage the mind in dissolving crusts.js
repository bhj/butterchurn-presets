define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 16.217,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 2.63,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.05,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.50374,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.169,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.36,
		warpanimspeed : 9.861,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 4.1,
		ob_g : 0.1,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.att = 0;
m.q3 = 0;
m.meanbass_att = 0;
m.q8 = 0;
m.yamp = 0;
m.myx = 0;
m.xamp = 0;
m.lastbeat = 0;
m.myy = 0;
m.yamptarg = 0;
m.y_pos = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.movement = 0;
m.xspeed = 0;
m.ydir = 0;
m.xdir = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.volume = (0.3*((m.bass+m.mid)+m.att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.25*m.volume)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.15*m.volume)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.wave_x = (m.xpos+0.5);
m.wave_y = (1-(m.ypos+0.5));
m.wave_r = (0.5+(0.499*((0.60*Math.sin((0.980*m.time)))+(0.40*Math.sin((1.047*m.time))))));
m.wave_g = (0.5+(0.499*((0.60*Math.sin((0.835*m.time)))+(0.40*Math.sin((1.081*m.time))))));
m.wave_b = (0.5+(0.499*((0.60*Math.sin((0.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.wave_mystery = (-0.17+(0.03*((0.6*Math.sin((0.637*m.time)))+(0.4*Math.sin((0.949*m.time))))));
m.mv_r = ifcond(m.beat, 1, m.ib_r);
m.mv_b = ifcond(m.beat, m.wave_b, m.ib_b);
m.q3 = m.wave_mystery;
m.q1 = m.wave_x;
m.q2 = (1-m.wave_y);
m.q2 = (m.ypos+0.5);
m.warp = 0;
m.ob_r = (1-m.wave_g);
m.ob_b = (1-m.wave_r);
m.ob_g = (1-m.wave_b);
m.monitor = m.wave_y;
m.movement = (m.movement+(0.4*div(((m.bass+m.bass_att)+(0.1*pow(((m.bass+(0.6*m.bass_att))+(0.2*m.treb_att)), 3))),m.fps)));
m.movement = ifcond(above(m.movement, 10000), 0, m.movement);
m.rot = (1*Math.sin(m.movement));
m.cx = m.wave_x;
m.cy = (m.y_pos+0.5);
m.q8 = m.movement;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.myy = (m.x-m.q1);
m.myx = ((m.y-m.q2)+0.1);
m.dx = ((3*Math.sin((m.q8*0.675)))*((2*m.myx)*m.myy));
m.dy = ((3*Math.sin((m.q8*0.675)))*((m.myx*m.myx)-(m.myy*m.myy)));
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
			rad : 0.03347,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			rad : 0.03347,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			rad : 0.03347,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			num_inst : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_y_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 12.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1)).y;\n' + '  tmpvar_12.y = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1)).y;\n' + '  uv_y_1 = (uv + ((tmpvar_12 * texsize.zw) * 2.0));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.4)) + rand_frame.xy);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_fc_main, uv_y_1);\n' + '  ret_2.y = tmpvar_14.y;\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur1, uv_y_1);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    ((ret_2.y - ((tmpvar_15.xyz * scale1) + bias1).y) - 0.1)\n' + '   * 0.01) - 0.004));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_noise_lq, tmpvar_13);\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = (uv + ((\n' + '    (tmpvar_16.xy - 0.5)\n' + '   * texsize.zw) * 2.0));\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_main, tmpvar_17);\n' + '  ret_2.x = (tmpvar_18.x - 0.004);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19.w = 1.0;\n' + '  tmpvar_19.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_19;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'volume = 0.3*(bass+mid+att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.25*volume*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.15*volume*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'wave_x = xpos + 0.5;\n' + 'wave_y = 1-(ypos + 0.5);\n' + 'wave_r = 0.5 + 0.499*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );\n' + 'wave_g = 0.5 + 0.499*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );\n' + 'wave_b = 0.5 + 0.499*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );\n' + 'wave_mystery = -0.17 + 0.03*(0.6*sin(0.637*time) + 0.4*sin(0.949*time));\n' + 'mv_r = if(beat, 1, ib_r);\n' + 'mv_b = if(beat, wave_b, ib_b);\n' + 'q3 = wave_mystery;\n' + 'q1 = wave_x;\n' + 'q2 = 1-wave_y;\n' + 'q2 = ypos+0.5;\n' + 'warp=0;\n' + 'ob_r = 1-wave_g;\n' + 'ob_b = 1-wave_r;\n' + 'ob_g = 1-wave_b;\n' + 'monitor = wave_y;\n' + 'movement =movement + 0.4*(((bass+bass_att + 0.1*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);\n' + 'movement = if(above(movement,10000), 0, movement);\n' + 'rot =1*sin(movement);\n' + 'cx = wave_x;\n' + 'cy = y_pos+0.5;\n' + 'q8 = movement;'),
	'pixel_eqs_str' : ('myy = x-q1;\n' + 'myx = y-q2+0.1;\n' + 'dx = 3*sin(q8*0.675)*(2*myx*myy);\n' + 'dy = 3*sin(q8*0.675)*((myx*myx) - (myy*myy));'),
};

return pmap;
});