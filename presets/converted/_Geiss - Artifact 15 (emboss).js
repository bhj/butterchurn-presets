define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.998,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.16,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 3.436,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.08979,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.421,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.54,
		warpanimspeed : 1.348,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.6,
		wave_y : 0.5,
		zoom : 1.01035,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.68,
		wave_mystery : -0.4,
		decay : 0.98,
		wave_a : 0.22,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.97,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.t2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.650*((0.60*Math.sin((1.437*m.time)))+(0.40*Math.sin((0.970*m.time))))));
m.wave_g = (m.wave_g+(0.650*((0.60*Math.sin((1.344*m.time)))+(0.40*Math.sin((0.841*m.time))))));
m.wave_b = (m.wave_b+(0.650*((0.60*Math.sin((1.251*m.time)))+(0.40*Math.sin((1.055*m.time))))));
m.rot = (m.rot+(0.01*((0.60*Math.sin((0.181*m.time)))+(0.09*Math.sin((-0.279*m.time))))));
m.zoom = (m.zoom+(0.01*((0.60*Math.sin(((0.3131*m.time)+2)))+(0.4*Math.sin(((-0.479*m.time)+4))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,6), 0)));
m.t2 = (m.time*6);
m.wave_x = (0.5+(0.3*((0.60*Math.sin((0.374*m.t2)))+(0.40*Math.sin((0.294*m.t2))))));
m.wave_y = (0.5+(0.3*((0.60*Math.sin((0.393*m.t2)))+(0.40*Math.sin((0.223*m.t2))))));
m.q1 = Math.cos((((m.time*1.53)*0.7)+1));
m.q2 = Math.cos((((m.time*1.27)*0.7)+2));
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (m.dx+(div((Math.cos(((m.y*29.37)-(m.time*1.9)))*1.0),m.pixelsx)*2));
m.dy = (m.dy+(div((Math.cos(((m.x*33.21)-(m.time*1.7)))*1.0),m.pixelsy)*2));
m.dx = (m.dx+(div((Math.cos(((m.y*77.55)-(m.time*2.1)))*1.0),m.pixelsx)*1.5));
m.dy = (m.dy+(div((Math.cos(((m.x*78.32)-(m.time*2.4)))*1.0),m.pixelsy)*1.5));
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fw_main, uv_orig);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = mix (uv_orig, uv, vec2(0.2, 0.2));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fw_main, tmpvar_3);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = mix (uv_orig, uv, vec2(0.4, 0.4));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_fw_main, tmpvar_5);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = mix (uv_orig, uv, vec2(0.6, 0.6));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_fw_main, tmpvar_7);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = mix (uv_orig, uv, vec2(0.8, 0.8));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_fw_main, tmpvar_9);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_fw_main, uv);\n' + '  ret_1 = (max (max (\n' + '    max (ret_1, tmpvar_4.xyz)\n' + '  , \n' + '    max (tmpvar_6.xyz, tmpvar_8.xyz)\n' + '  ), max (tmpvar_10.xyz, tmpvar_11.xyz)) - 0.008);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 N_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur2, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur2, P_7);\n' + '  N_1.x = (((\n' + '    (tmpvar_4.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_6.xyz * scale2)\n' + '   + bias2)).x * 0.7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur2, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur2, P_11);\n' + '  N_1.y = (((\n' + '    (tmpvar_8.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_10.xyz * scale2)\n' + '   + bias2)).x * 0.7);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '  N_1.x = (N_1.x + ((\n' + '    ((tmpvar_12.xyz * scale1) + bias1)\n' + '   - \n' + '    ((tmpvar_14.xyz * scale1) + bias1)\n' + '  ).x * 0.3));\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_16 = texture2D (sampler_blur1, P_17);\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_18 = texture2D (sampler_blur1, P_19);\n' + '  N_1.y = (N_1.y + ((\n' + '    ((tmpvar_16.xyz * scale1) + bias1)\n' + '   - \n' + '    ((tmpvar_18.xyz * scale1) + bias1)\n' + '  ).x * 0.3));\n' + '  N_1.z = -0.19;\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = normalize(N_1);\n' + '  N_1 = tmpvar_20;\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21.z = -0.8;\n' + '  tmpvar_21.xy = _qa.xy;\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22.z = 0.0;\n' + '  tmpvar_22.xy = ((uv_orig * 2.0) - 1.0);\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = normalize((tmpvar_21 - tmpvar_22));\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = normalize((tmpvar_22 - vec3(0.0, 0.0, 1.0)));\n' + '  ret_2 = (vec3(clamp (dot (tmpvar_20, tmpvar_23), 0.0, 1.0)) * vec3(1.2, 0.9, 0.6));\n' + '  ret_2 = (ret_2 + (pow (\n' + '    clamp (dot (normalize((tmpvar_24 + \n' + '      ((2.0 * tmpvar_20) * dot (tmpvar_24, tmpvar_20))\n' + '    )), tmpvar_23), 0.0, 1.0)\n' + '  , 16.0) * 0.5));\n' + '  ret_2 = (ret_2 * 0.7);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.650*( 0.60*sin(1.437*time) + 0.40*sin(0.970*time) );\n' + 'wave_g = wave_g + 0.650*( 0.60*sin(1.344*time) + 0.40*sin(0.841*time) );\n' + 'wave_b = wave_b + 0.650*( 0.60*sin(1.251*time) + 0.40*sin(1.055*time) );\n' + 'rot = rot + 0.01*( 0.60*sin(0.181*time) + 0.09*sin(-0.279*time) );\n' + 'zoom = zoom + 0.01*( 0.60*sin(0.3131*time+2) + 0.4*sin(-0.479*time+4) );\n' + 'decay = decay - 0.01*equal(frame%6,0);\n' + 't2 = time*6;\n' + 'wave_x = 0.5 + 0.3*( 0.60*sin(0.374*t2) + 0.40*sin(0.294*t2) );\n' + 'wave_y = 0.5 + 0.3*( 0.60*sin(0.393*t2) + 0.40*sin(0.223*t2) );\n' + 'q1 = cos(time*1.53*0.7+1);\n' + 'q2 = cos(time*1.27*0.7+2);'),
	'pixel_eqs_str' : ('dx = dx + cos(y*29.37 - time*1.9) * 1.0/pixelsx * 2;\n' + 'dy = dy + cos(x*33.21 - time*1.7) * 1.0/pixelsy * 2;\n' + 'dx = dx + cos(y*77.55 - time*2.1) * 1.0/pixelsx * 1.5;\n' + 'dy = dy + cos(x*78.32 - time*2.4) * 1.0/pixelsy * 1.5;'),
};

return pmap;
});