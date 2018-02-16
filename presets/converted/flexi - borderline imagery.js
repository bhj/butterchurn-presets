define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.9,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : -0.941,
		mv_dy : 0.426,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.942,
		echo_zoom : 1.169,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.078,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.006,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : 1.0,
		decay : 0.98,
		wave_a : 0.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.316,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.res = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.diff = 0;
m.r = 0;
m.vol = 0;
m.v = 0;
m.beat = 0;
m.c_x = 0;
m.c_y = 0;
m.c_x = 0.5;
m.c_y = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.rot = 0;
m.zoom = 1;
m.warp = 0;
m.vol = (((m.bass*8)+(m.mid*4))+(m.treb*2));
m.vol = (m.vol*above(m.vol, 17));
m.monitor = m.vol;
m.beat = above(m.vol, m.res);
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(2*m.diff)))+((1-m.beat)*(m.res-div((((m.diff*0.04)+0.12)*60),m.fps))));
m.res = Math.max(0, m.res);
m.monitor = m.res;
m.r = ifcond(m.beat, ((0.01*(rand(200)-100))*0.01), m.r);
m.rot = m.r;
m.c_x = ifcond(m.beat, (0.5+((0.5*(rand(200)-100))*0.01)), m.c_x);
m.c_y = ifcond(m.beat, (0.5+((0.5*(rand(200)-100))*0.01)), m.c_y);
m.q3 = m.c_x;
m.q4 = m.c_y;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.d = (pow(sqrt((sqr((m.x-m.q3))+sqr((m.y-m.q4)))), 1)-0);
m.v = 0.03;
m.dx = ((m.v*(m.x-m.q3))*m.d);
m.dy = ((m.v*(m.y-m.q4))*m.d);
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
	'warp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'highp vec2 xlat_mutableuv_y;\n' + 'highp vec2 xlat_mutableuv_z;\n' + 'shader_body {\n' + '   vec3 rand_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (texture2D (sampler_noise_lq, tmpvar_3).xyz - 0.5);\n' + '  rand_1 = tmpvar_4;\n' + '  xlat_mutabled = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '  xlat_mutabledx = (((tmpvar_5.xyz * scale1) + bias1) - ((tmpvar_7.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '  xlat_mutabledy = (((tmpvar_9.xyz * scale1) + bias1) - ((tmpvar_11.xyz * scale1) + bias1));\n' + '  xlat_mutabled = uv;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = xlat_mutabledx.y;\n' + '  tmpvar_13.y = xlat_mutabledy.y;\n' + '  xlat_mutableuv_y = (uv - ((tmpvar_13 * texsize.zw) * 6.0));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = xlat_mutabledx.z;\n' + '  tmpvar_14.y = xlat_mutabledy.z;\n' + '  xlat_mutableuv_z = (uv - ((tmpvar_14 * texsize.zw) * 6.0));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, xlat_mutableuv_y);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv_orig);\n' + '  ret_2.y = ((tmpvar_15.y - 0.008) + ((1.0 - tmpvar_16.x) * 0.018));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, xlat_mutableuv_z);\n' + '  ret_2.z = ((tmpvar_17.z - 0.008) + (tmpvar_16.x * 0.018));\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (uv + ((rand_1.xy * texsize.zw) * 0.5));\n' + '  tmpvar_18 = texture2D (sampler_fc_main, P_19);\n' + '  ret_2.x = tmpvar_18.x;\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((\n' + '    (ret_2.x - ((tmpvar_20.xyz * scale3) + bias3).x)\n' + '   * 0.15) + (rand_1 * 0.0042)).x);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 1.0;\n' + '  tmpvar_21.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_21;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'shader_body {\n' + '   vec3 ret_1;\n' + '  xlat_mutabled = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_2 = texture2D (sampler_blur1, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '  xlat_mutabledx = (((tmpvar_2.xyz * scale1) + bias1) - ((tmpvar_4.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '  xlat_mutabledy = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = xlat_mutabledx.y;\n' + '  tmpvar_10.y = xlat_mutabledy.y;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (uv - ((tmpvar_10 * texsize.zw) * 256.0));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur3, tmpvar_11);\n' + '  ret_1 = (((1.0 - \n' + '    ((tmpvar_12.xyz * scale3) + bias3)\n' + '  .x) * vec3(0.7, 0.5, 0.1)) * (1.0 + (\n' + '    (xlat_mutabledx * 2.0)\n' + '   + \n' + '    (xlat_mutabledy * 4.0)\n' + '  ).y));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = xlat_mutabledx.z;\n' + '  tmpvar_13.y = xlat_mutabledy.z;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv - ((tmpvar_13 * texsize.zw) * 512.0));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur3, tmpvar_14);\n' + '   vec3 tmpvar_16;\n' + '   vec3 y_17;\n' + '  y_17 = (vec3(0.7, 0.5, 1.0) * texture2D (sampler_main, uv).z);\n' + '  tmpvar_16 = mix (ret_1, y_17, vec3(clamp ((\n' + '    ((tmpvar_15.xyz * scale3) + bias3)\n' + '  .x * \n' + '    (1.0 + ((xlat_mutabledx * 2.0) - (xlat_mutabledy * 4.0)).z)\n' + '  ), 0.0, 1.0)));\n' + '  ret_1 = tmpvar_16;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = tmpvar_16;\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('c_x = 0.5;\n' + 'c_y = 0.5;'),
	'frame_eqs_str' : ('q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'rot = 0;\n' + 'zoom = 1;\n' + 'warp = 0;\n' + 'vol = bass*8 + mid*4 + treb*2;\n' + 'vol = vol*above(vol,17);\n' + 'monitor = vol;\n' + 'beat = above(vol,res);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol+2*diff) + (1-beat)*(res - (diff*0.04 + 0.12)*60/fps);\n' + 'res = max(0,res);\n' + 'monitor = res;\n' + 'r = if(beat, 0.01*(rand(200)-100)*0.01,r);\n' + 'rot = r;\n' + 'c_x = if(beat,0.5 + 0.5*(rand(200)-100)*0.01, c_x);\n' + 'c_y = if(beat,0.5 + 0.5*(rand(200)-100)*0.01, c_y);\n' + 'q3 = c_x;\n' + 'q4 = c_y;'),
	'pixel_eqs_str' : ('d = (pow(sqrt(sqr(x-q3)+sqr(y-q4)),1)-0);\n' + 'v = 0.03;\n' + 'dx = v*(x-q3)*d;\n' + 'dy = v*(y-q4)*d;'),
};

return pmap;
});