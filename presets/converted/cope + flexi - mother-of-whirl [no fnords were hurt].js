define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.14,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 44.8,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 38.4,
		wave_scale : 0.797,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0098,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.9995,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.71,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.9,
		wave_y : 0.5,
		zoom : 0.9998,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : -0.008,
		ob_a : 0.8,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.02,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 1.17,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.wb = 0;
m.q10 = 0;
m.wg = 0;
m.q11 = 0;
m.q12 = 0;
m.vol = 0;
m.t = 0;
m.q17 = 0;
m.q18 = 0;
m.wr = 0;
m.bass_thresh = 0;
m.q1 = div(1,Math.asin(1));
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.3*Math.sin((m.vol*50))));
m.wave_b = (m.wave_b+(0.3*Math.sin((m.vol*20))));
m.wave_g = (m.wave_g+(0.5*Math.sin((m.vol*35))));
m.q8 = m.wave_r;
m.q7 = m.wave_b;
m.q6 = m.wave_g;
m.wr = (0.5+(0.4*((0.6*Math.sin((m.time*1.1)))+(0.4*Math.sin((0.8*m.time))))));
m.wb = (0.5+(0.4*((0.6*Math.sin((m.time*1.6)))+(0.4*Math.sin((0.5*m.time))))));
m.wg = (0.5+(0.4*((0.6*Math.sin((m.time*1.34)))+(0.4*Math.sin((0.4*m.time))))));
m.monitor = m.wg;
m.q10 = m.wr;
m.q11 = m.wb;
m.q12 = m.wg;
m.q18 = (0.007*Math.sin((m.time*0.1)));
m.q17 = (-0.007*Math.sin((m.time*0.254)));
m.q2 = m.bass_thresh;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.q3 = m.vol;
m.warp = 0;
m.t = (m.t-div(1,m.fps));
m.t = ifcond(above(m.t, 2), (m.t-2), m.t);
m.q2 = m.t;
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
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.2,
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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.11039,
			x : 0.5,
			y : 0.0,
			ang : 3.4054,
			sides : 33.0,
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
			a : 0.05,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
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
			rad : 1.62175,
			x : 0.5,
			y : 0.45,
			ang : 0.0,
			sides : 34.0,
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
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.6,
			a2 : 1.0,
			r : 0.7,
			border_g : 1.0,
			rad : 0.13478,
			x : 0.0,
			y : 0.6,
			ang : 0.0,
			sides : 54.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = 0;
m.b = 0;
m.g = 0;
m.r2 = m.r;
m.b2 = m.b;
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=0;\n' + 'b=0;\n' + 'g=0;\n' + 'r2=r;\n' + 'b2=b;\n' + 'g2=g;'),

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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.20068,
			x : 0.0,
			y : 0.2,
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
	'warp' : ('shader_body {\n' + '   vec3 noise3_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = (tmpvar_3.xyz + ((tmpvar_4.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (0.5 + ((\n' + '    (uv - vec2(0.0, 1.0))\n' + '   - 0.5) * (1.0 + \n' + '    (tmpvar_5.y * 0.03)\n' + '  )));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = (tmpvar_6.x + pow (tmpvar_5.x, 0.0));\n' + '  tmpvar_7.y = (tmpvar_6.y + pow (tmpvar_5.x, 0.005));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = fract(tmpvar_7);\n' + '   vec2 P_9;\n' + '  P_9 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_noise_lq, P_9).xyz;\n' + '  noise3_1 = tmpvar_10;\n' + '  noise3_1 = (noise3_1 * fract(_qd.z));\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (noise3_1 * (vec3(1.0, 1.0, 1.0) - vec3(fract(\n' + '    (_qa.z * 0.5)\n' + '  ))));\n' + '  noise3_1 = tmpvar_11;\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_main, tmpvar_8);\n' + '  ret_2 = tmpvar_12.xyz;\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = mix (tmpvar_11, _qc.yzw, ret_2.xxx);\n' + '  ret_2 = (ret_2 + clamp ((\n' + '    (ret_2.yzx * tmpvar_13.zxy)\n' + '   - \n' + '    (ret_2.zxy * tmpvar_13.yzx)\n' + '  ), 0.0, 1.0));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14.w = 1.0;\n' + '  tmpvar_14.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_14;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv6_1;\n' + '   vec2 d_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (((uv - 0.5) * aspect.xy) * 2.4);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = ((_qc.w * tmpvar_12.x) - (_qc.z * tmpvar_12.y));\n' + '  tmpvar_13.y = ((_qc.z * tmpvar_12.x) + (_qc.w * tmpvar_12.y));\n' + '  uv6_1 = ((0.5 + (tmpvar_13 * aspect.zw)) + _qd.xy);\n' + '  uv6_1 = (1.0 - abs((\n' + '    (fract((uv6_1 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1)).z;\n' + '  tmpvar_14.y = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1)).z;\n' + '  uv6_1 = (uv6_1 - (tmpvar_14 * 0.1));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = (0.5 + ((uv6_1 - 0.5) * 0.9));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv6_1 - _qd.xy);\n' + '  d_2 = (texsize.zw * 12.0);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (tmpvar_15 + (vec2(1.0, 0.0) * d_2));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (tmpvar_15 - (vec2(1.0, 0.0) * d_2));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (tmpvar_15 + (vec2(0.0, 1.0) * d_2));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (tmpvar_15 - (vec2(0.0, 1.0) * d_2));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25 = mix ((texture2D (sampler_main, tmpvar_15).x * vec3(1.0, 0.0, 0.0)), vec3(-0.1, -1.0, -1.0), texture2D (sampler_main, tmpvar_16).yyy);\n' + '   vec2 tmpvar_26;\n' + '  tmpvar_26.x = (((tmpvar_17.xyz * scale1) + bias1) - ((tmpvar_19.xyz * scale1) + bias1)).x;\n' + '  tmpvar_26.y = (((tmpvar_21.xyz * scale1) + bias1) - ((tmpvar_23.xyz * scale1) + bias1)).x;\n' + '   vec3 tmpvar_27;\n' + '  tmpvar_27 = vec3((texture2D (sampler_main, uv).z * 0.4));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28.w = 1.0;\n' + '  tmpvar_28.xyz = mix (mix (tmpvar_25, vec3(1.0, 1.0, 0.0), vec3(sqrt(\n' + '    dot (tmpvar_26, tmpvar_26)\n' + '  ))), vec3(-0.5, 2.0, 3.0), tmpvar_27);\n' + '  vec4 ret4 = tmpvar_28;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('q1 = 1/asin(1);'),
	'frame_eqs_str' : ('wave_r = wave_r + 0.3*sin(vol*50);\n' + 'wave_b = wave_b + 0.3*sin(vol*20);\n' + 'wave_g = wave_g + 0.5*sin(vol*35);\n' + 'q8=wave_r;\n' + 'q7=wave_b;\n' + 'q6=wave_g;\n' + 'wr = 0.5+0.4*(0.6*sin(time*1.1) + 0.4*sin(0.8*time));\n' + 'wb = 0.5+0.4*(0.6*sin(time*1.6) + 0.4*sin(0.5*time));\n' + 'wg = 0.5+0.4*(0.6*sin(time*1.34) + 0.4*sin(0.4*time));\n' + 'monitor=wg;\n' + 'q10=wr;\n' + 'q11=wb;\n' + 'q12=wg;\n' + 'q18 = 0.007*sin(time*0.1);\n' + 'q17 = -0.007*sin(time*0.254);\n' + 'q2=bass_thresh;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'q3=vol;\n' + 'warp=0;\n' + 't = t - 1/fps;\n' + 't = if(above(t,2),t-2,t);\n' + 'q2 = t;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});