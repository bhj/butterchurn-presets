define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.3,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.772,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.372,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.001,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.7,
		ib_r : 0.25,
		mv_b : 0.45,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.7,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.007,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : -0.005,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 11.94,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 0.6,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.mv_x_range = 0;
m.mv_y_range = 0;
m.att = 0;
m.mv_x_speed = 0;
m.mv_y_speed = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.yaccel = 0;
m.xspeed = 0;
m.xaccel = 0;
m.vol = 0;
m.mv_y_amount = 0;
m.ydir = 0;
m.xdir = 0;
m.mv_x_amount = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_x = (m.wave_x+(0.150*((0.60*Math.sin((2.121*m.time)))+(0.40*Math.sin((1.621*m.time))))));
m.wave_y = (m.wave_y+(0.150*((0.60*Math.sin((1.742*m.time)))+(0.40*Math.sin((2.322*m.time))))));
m.wave_r = (m.wave_r+(0.200*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.500*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.500*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.rot = (m.rot+(0.002*Math.sin((m.time+0.073))));
m.decay = (m.decay-(0.03*equal(mod(m.frame,30), 0)));
m.vol = div(((m.bass+m.mid)+m.att),6);
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xaccel = (((m.xdir*m.xamp)-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yaccel = (((m.ydir*m.yamp)-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.mv_x_speed = 16;
m.mv_y_speed = 12;
m.mv_x_range = 0.499;
m.mv_y_range = 0.499;
m.mv_x_amount = 2;
m.mv_y_amount = (3+(1.5*Math.sin((Math.sin((m.time*0.245))+Math.cos((m.time*0.45))))));
m.mv_x = ((m.mv_x_amount+m.mv_x_range)+(m.mv_x_range*Math.sin(((m.mv_x_speed*m.ypos)+(Math.sin((m.time*0.964))-(0.5*Math.cos((m.time*0.256))))))));
m.mv_y = ((m.mv_y_amount+m.mv_y_range)+(m.mv_y_range*Math.sin(((m.mv_y_speed*m.xpos)-(Math.cos((m.time*1.345))-(0.5*Math.cos((m.time*0.331))))))));
m.mv_b = (m.mv_b-(0.3*Math.sin((m.time*5.211))));
m.mv_r = (m.mv_r+(0.25*Math.cos((m.time*1.91))));
m.mv_g = (m.mv_g+(0.25*Math.cos((m.time*1.861))));
m.mv_l = ((30*Math.sin((10*m.ypos)))+(40*Math.cos((10*m.xpos))));
m.wave_r = (m.wave_r+(0.5*Math.sin(3.758)));
m.wave_b = (m.wave_b+(0.4*Math.cos((m.time*2.023))));
m.wave_g = (m.wave_g+(0.4*Math.sin((m.time*2.01))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
	'warp' : ('shader_body {\n' + '   vec3 blurry_color_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv).xyz;\n' + '  blurry_color_1 = tmpvar_4;\n' + '  uv2_2 = (uv + ((blurry_color_1.xy - 0.37) * 0.03));\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = (tmpvar_5.xyz - 0.005);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 1.333);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_x = wave_x + 0.150*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );\n' + 'wave_y = wave_y + 0.150*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );\n' + 'wave_r = wave_r + 0.200*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.500*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.500*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'rot = rot + 0.002*sin(time+0.073);\n' + 'decay = decay - 0.03*equal(frame%30,0);\n' + 'vol = (bass+mid+att)/6;\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'mv_x_speed = 16;\n' + 'mv_y_speed = 12;\n' + 'mv_x_range = 0.499;\n' + 'mv_y_range = 0.499;\n' + 'mv_x_amount = 2;\n' + 'mv_y_amount = 3+1.5*sin(sin(time*0.245)+cos(time*0.45));\n' + 'mv_x = mv_x_amount +mv_x_range + mv_x_range*sin(mv_x_speed*ypos+(sin(time*0.964)-0.5*cos(time*0.256)));\n' + 'mv_y = mv_y_amount + mv_y_range+ mv_y_range*sin(mv_y_speed*xpos-(cos(time*1.345)-0.5*cos(time*0.331)));\n' + 'mv_b = mv_b - 0.3*sin(time*5.211);\n' + 'mv_r = mv_r + 0.25*cos(time*1.91);\n' + 'mv_g = mv_g + 0.25*cos(time*1.861);\n' + 'mv_l =  30*sin(10*ypos)+ 40*cos(10*xpos);\n' + 'wave_r = wave_r + 0.5*sin(3.758);\n' + 'wave_b = wave_b + 0.4*cos(time*2.023);\n' + 'wave_g = wave_g + 0.4*sin(time*2.01);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});