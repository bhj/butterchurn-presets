define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.21,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.073,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.92178,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.04,
		zoom : 0.9901,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.44,
		decay : 1.0,
		wave_a : 0.004,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.xx = 0;
m.yy = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.q9 = 0;
m.bm = 0;
m.mx = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.q21 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.q11 = 0;
m.q22 = 0;
m.r = 0;
m.xx2 = 0;
m.vx4 = 0;
m.q12 = 0;
m.q23 = 0;
m.q25 = 0;
m.q26 = 0;
m.v = 0;
m.q27 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.x1 = 0.9;
m.y1 = 0.5;
m.x2 = 0.5;
m.y2 = 0.5;
m.x3 = 0.5;
m.y3 = 0.5;
m.x4 = 0.5;
m.y4 = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.warp = 0;
m.wave_a = 0;
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = (0.5+((m.xx1-m.xx2)*2));
m.y1 = (0.4+(m.yy1*1.5));
m.dt = div(0.03,m.fps);
m.vx2 = ((m.vx2*(1-(2*m.dt)))+(m.dt*(((m.x1+m.x3)-(2*m.x2))*10)));
m.vy2 = ((m.vy2*(1-(2*m.dt)))+(m.dt*((((m.y1+m.y3)-(2*m.y2))*10)-0.5)));
m.vx3 = ((m.vx3*(1-(2*m.dt)))+(m.dt*(((m.x2+m.x4)-(2*m.x3))*10)));
m.vy3 = ((m.vy3*(1-(2*m.dt)))+(m.dt*((((m.y2+m.y4)-(2*m.y3))*10)-0.5)));
m.vx4 = ((m.vx4*(1-(2*m.dt)))+(m.dt*((m.x3-m.x4)*10)));
m.vy4 = ((m.vy4*(1-(2*m.dt)))+(m.dt*(((m.y3-m.y4)*10)-0.5)));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0), m.vx2, (Math.abs(m.vx2)*0.5));
m.vx2 = ifcond(below(m.x2, 1), m.vx2, (-Math.abs(m.vx2)*0.5));
m.vx3 = ifcond(above(m.x3, 0), m.vx3, (Math.abs(m.vx3)*0.5));
m.vx3 = ifcond(below(m.x3, 1), m.vx3, (-Math.abs(m.vx3)*0.5));
m.vx4 = ifcond(above(m.x4, 0), m.vx4, (Math.abs(m.vx4)*0.5));
m.vx4 = ifcond(below(m.x4, 1), m.vx4, (-Math.abs(m.vx4)*0.5));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*0.5));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*0.5));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*0.5));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*0.5));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*0.5));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*0.5));
m.q1 = m.x1;
m.q2 = m.x2;
m.q3 = m.x3;
m.q4 = m.x4;
m.q5 = m.y1;
m.q6 = m.y2;
m.q7 = m.y3;
m.q8 = m.y4;
m.q9 = div(1,m.aspectx);
m.q10 = div(1,m.aspecty);
m.q11 = m.aspectx;
m.q12 = m.aspecty;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.t1 = div((m.bb-m.mn),(m.mx-m.mn));
m.t2 = div((m.mm-m.mn),(m.mx-m.mn));
m.t3 = div((m.tt-m.mn),(m.mx-m.mn));
m.v = div(0.1,m.fps);
m.bm = (m.bm+((m.t1-m.t2)*m.v));
m.mt = (m.mt+((m.t2-m.t3)*m.v));
m.q22 = 0;
m.q21 = 1;
m.q25 = 0;
m.q23 = -1;
m.q26 = -m.bm;
m.q27 = m.mt;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.x = (0.5+((m.x-0.5)*m.q11));
m.y = (0.5+((m.y-0.5)*m.q12));
m.xx = m.q4;
m.yy = (1-m.q8);
m.dx = 0;
m.dy = 0;
m.d = sqrt((((m.x-m.xx)*(m.x-m.xx))+((m.y-m.yy)*(m.y-m.yy))));
m.r = 0.11;
m.v = 20;
m.dx = ((m.v*((Math.sin((m.y-m.yy))*(m.d-m.r))-((m.x-m.xx)*(m.d-div(m.r,2)))))*(1.00-sigmoid((m.d-m.r), 100)));
m.dy = ((-m.v*((Math.sin((m.x-m.xx))*(m.d-m.r))+((m.y-m.yy)*(m.d-div(m.r,2)))))*(1.00-sigmoid((m.d-m.r), 100)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.0,
			scaling : 1.69136,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.dd = 0;
m.q1 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.ddd = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.q10 = 0;
m.tt1 = 0;
m.tt2 = 0;
m.tt3 = 0;
m.xxx = 0;
m.yyy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['dd','xx','yy','sample','tt1','tt2','tt3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t7 = m.q7;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (1-m.sample);
m.xxx = m.xx;
m.yyy = m.yy;
m.xx = ((((((pow(m.sample, 5)*m.t1)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t1))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t2))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t3))+(((5*pow((1-m.sample), 4))*m.sample)*m.t4))+(pow((1-m.sample), 5)*m.t4));
m.yy = ((((((pow(m.sample, 5)*m.t5)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t5))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t6))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t7))+(((5*pow((1-m.sample), 4))*m.sample)*m.t8))+(pow((1-m.sample), 5)*m.t8));
m.d = div(1,sqrt((sqr((m.xx-m.xxx))+sqr((m.yy-m.yyy)))));
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.dd = ((m.dd*0.9)+(m.tt1*0.2));
m.ddd = ((((m.sample*(1-m.sample))*m.dd)*m.d)*4);
m.x = (m.xx+((m.yy-m.yyy)*m.ddd));
m.y = (m.yy-((m.xx-m.xxx)*m.ddd));
m.x = (0.5+((m.x-0.5)*m.q9));
m.y = (0.5+((m.y-0.5)*m.q10));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xxx = xx;\n' + 'yyy = yy;\n' + 'xx = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'yy = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'dd = dd*0.9 + tt1*0.2;\n' + 'ddd = sample*(1-sample)*dd*d*4;\n' + 'x = xx + (yy-yyy)*ddd;\n' + 'y = yy - (xx-xxx)*ddd;\n' + 'x = 0.5 + (x-0.5)*q9;\n' + 'y = 0.5 + (y-0.5)*q10;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.c = 0;
m.q4 = 0;
m.t8 = 0;
m.q6 = 0;
m.t = 0;
m.pi3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.y = (m.sample*0.05);
m.x = (0.5+(m.t8*0.005));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((m.q4-m.q6)*10);
m.c = 2;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'y = sample*0.05;\n' + 'x = 0.5 + t8*0.005;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = (q4-q6)*10;\n' + 'c=2;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.0,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.6,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t7 = m.q7;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.y = 0.5;
m.x = m.sample;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('y = 0.5;\n' + 'x = sample;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.0,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t8 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.y = ((1+m.t8)*0.01);
m.x = m.sample;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'y = (1+t8)*0.01;\n' + 'x = sample;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.96,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.12566,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 1.0363,
			x : 0.0,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 4.0,
			},
		'init_eqs' : function(m) {
m.h = 0;
m.q9 = 0;
m.q10 = 0;
m.w = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = 2;
m.h = sqrt(2);
m.w = 0.004;
m.x = ifcond((1-equal(m.instance, 0)), ifcond((1-equal(m.instance, 1)), ifcond((1-equal(m.instance, 2)), (m.w-((m.h*0.5)*m.q10)), ((1-m.w)+((m.h*0.5)*m.q10))), 0.5), 0.5);
m.y = ifcond((1-equal(m.instance, 0)), ifcond((1-equal(m.instance, 1)), 0.5, (m.w-((m.h*0.5)*m.q9))), ((1-m.w)+((m.h*0.5)*m.q9)));
m.g = ifcond((1-equal(m.instance, 0)), ifcond((1-equal(m.instance, 1)), 0, 1), 1);
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('rad = 2;\n' + 'h = sqrt(2);\n' + 'w = 0.004;\n' + 'x = if(1-equal(instance,0),if(1-equal(instance,1),if(1-equal(instance,2),w - h*0.5*q10,1-w + h*0.5*q10),0.5),0.5);\n' + 'y = if(1-equal(instance,0),if(1-equal(instance,1),0.5,w - h*0.5*q9),1-w + h*0.5*q9);\n' + 'g = if(1-equal(instance,0),if(1-equal(instance,1),0,1),1);\n' + 'g2 = g;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.5,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.73458,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.05784,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q5 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = m.q5;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = q1;\n' + 'y = q5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 6.23873,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.0578,
			x : 0.5,
			y : 0.5,
			ang : 3.20442,
			sides : 100.0,
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
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.73458,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.07059,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q5 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = m.q5;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = q1;\n' + 'y = q5;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv);\n' + '  ret_1.y = tmpvar_2.y;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec2 numerator;\n' + 'uniform highp vec2 denominator;\n' + 'uniform highp vec2 fraction;\n' + 'uniform highp vec2 c;\n' + 'highp vec2 xlat_mutablec;\n' + 'highp float xlat_mutablecutoff;\n' + 'highp vec2 xlat_mutabledenominator;\n' + 'highp int xlat_mutabledepth;\n' + 'highp vec2 xlat_mutablefraction;\n' + 'highp int xlat_mutablen;\n' + 'highp vec2 xlat_mutablenumerator;\n' + 'highp float xlat_mutables;\n' + 'shader_body {\n' + '  xlat_mutablec = c;\n' + '  xlat_mutabledenominator = denominator;\n' + '  xlat_mutablefraction = fraction;\n' + '  xlat_mutablenumerator = numerator;\n' + '   vec2 uv_1;\n' + '  uv_1 = (0.5 + ((uv - 0.5) * 4.0));\n' + '  xlat_mutablecutoff = 2.0;\n' + '  xlat_mutablen = 1;\n' + '  xlat_mutables = 0.33;\n' + '  xlat_mutabledepth = 2;\n' + '  for ( int i_3 = 0; i_3 < xlat_mutabledepth; i_3++) {\n' + '    xlat_mutablec = (((uv_1 - 0.5) * 2.0) * aspect.wz);\n' + '    xlat_mutablenumerator = ((xlat_mutablec + _qf.xy) * 64.0);\n' + '    xlat_mutabledenominator = (xlat_mutablec + _qf.zw);\n' + '     vec2 tmpvar_4;\n' + '    tmpvar_4.x = ((xlat_mutablenumerator.x * xlat_mutabledenominator.x) + (xlat_mutablenumerator.y * xlat_mutabledenominator.y));\n' + '    tmpvar_4.y = ((xlat_mutablenumerator.y * xlat_mutabledenominator.x) - (xlat_mutablenumerator.x * xlat_mutabledenominator.y));\n' + '    xlat_mutablefraction = (tmpvar_4 / ((xlat_mutabledenominator.x * xlat_mutabledenominator.x) + (xlat_mutabledenominator.y * xlat_mutabledenominator.y)));\n' + '    xlat_mutablec = (xlat_mutablefraction - 0.5);\n' + '     float tmpvar_5;\n' + '     float tmpvar_6;\n' + '    tmpvar_6 = (min (abs(\n' + '      (xlat_mutablec.x / xlat_mutablec.y)\n' + '    ), 1.0) / max (abs(\n' + '      (xlat_mutablec.x / xlat_mutablec.y)\n' + '    ), 1.0));\n' + '     float tmpvar_7;\n' + '    tmpvar_7 = (tmpvar_6 * tmpvar_6);\n' + '    tmpvar_7 = (((\n' + '      ((((\n' + '        ((((-0.01213232 * tmpvar_7) + 0.05368138) * tmpvar_7) - 0.1173503)\n' + '       * tmpvar_7) + 0.1938925) * tmpvar_7) - 0.3326756)\n' + '     * tmpvar_7) + 0.9999793) * tmpvar_6);\n' + '    tmpvar_7 = (tmpvar_7 + (float(\n' + '      (abs((xlat_mutablec.x / xlat_mutablec.y)) > 1.0)\n' + '    ) * (\n' + '      (tmpvar_7 * -2.0)\n' + '     + 1.570796)));\n' + '    tmpvar_5 = (tmpvar_7 * sign((xlat_mutablec.x / xlat_mutablec.y)));\n' + '    if ((abs(xlat_mutablec.y) > (1e-08 * abs(xlat_mutablec.x)))) {\n' + '      if ((xlat_mutablec.y < 0.0)) {\n' + '        if ((xlat_mutablec.x >= 0.0)) {\n' + '          tmpvar_5 += 3.141593;\n' + '        } else {\n' + '          tmpvar_5 = (tmpvar_5 - 3.141593);\n' + '        };\n' + '      };\n' + '    } else {\n' + '      tmpvar_5 = (sign(xlat_mutablec.x) * 1.570796);\n' + '    };\n' + '     vec2 tmpvar_8;\n' + '    tmpvar_8.x = ((0.3183098 * (\n' + '      float(xlat_mutablen)\n' + '     * tmpvar_5)) + _qg.y);\n' + '    tmpvar_8.y = (((xlat_mutables * aspect.w) * log(\n' + '      sqrt(dot (xlat_mutablec, xlat_mutablec))\n' + '    )) + _qg.z);\n' + '    uv_1 = (0.5 + ((0.5 - \n' + '      abs(((fract(\n' + '        (tmpvar_8 * 0.5)\n' + '      ) * 2.0) - 1.0))\n' + '    ) * xlat_mutablecutoff));\n' + '  };\n' + '  uv_1 = (0.5 + (uv_1 - 0.5));\n' + '  xlat_mutablecutoff = 1.6;\n' + '  xlat_mutablen = 4;\n' + '  xlat_mutables = 1.0;\n' + '  xlat_mutabledepth = 1;\n' + '  for ( int i_1_2 = 0; i_1_2 < xlat_mutabledepth; i_1_2++) {\n' + '    xlat_mutablec = (((uv_1 - 0.5) * 2.0) * aspect.wz);\n' + '    xlat_mutablenumerator = ((xlat_mutablec + _qf.xy) * 64.0);\n' + '    xlat_mutabledenominator = (xlat_mutablec + _qf.zw);\n' + '     vec2 tmpvar_9;\n' + '    tmpvar_9.x = ((xlat_mutablenumerator.x * xlat_mutabledenominator.x) + (xlat_mutablenumerator.y * xlat_mutabledenominator.y));\n' + '    tmpvar_9.y = ((xlat_mutablenumerator.y * xlat_mutabledenominator.x) - (xlat_mutablenumerator.x * xlat_mutabledenominator.y));\n' + '    xlat_mutablefraction = (tmpvar_9 / ((xlat_mutabledenominator.x * xlat_mutabledenominator.x) + (xlat_mutabledenominator.y * xlat_mutabledenominator.y)));\n' + '    xlat_mutablec = (xlat_mutablefraction - 0.5);\n' + '     float tmpvar_10;\n' + '     float tmpvar_11;\n' + '    tmpvar_11 = (min (abs(\n' + '      (xlat_mutablec.x / xlat_mutablec.y)\n' + '    ), 1.0) / max (abs(\n' + '      (xlat_mutablec.x / xlat_mutablec.y)\n' + '    ), 1.0));\n' + '     float tmpvar_12;\n' + '    tmpvar_12 = (tmpvar_11 * tmpvar_11);\n' + '    tmpvar_12 = (((\n' + '      ((((\n' + '        ((((-0.01213232 * tmpvar_12) + 0.05368138) * tmpvar_12) - 0.1173503)\n' + '       * tmpvar_12) + 0.1938925) * tmpvar_12) - 0.3326756)\n' + '     * tmpvar_12) + 0.9999793) * tmpvar_11);\n' + '    tmpvar_12 = (tmpvar_12 + (float(\n' + '      (abs((xlat_mutablec.x / xlat_mutablec.y)) > 1.0)\n' + '    ) * (\n' + '      (tmpvar_12 * -2.0)\n' + '     + 1.570796)));\n' + '    tmpvar_10 = (tmpvar_12 * sign((xlat_mutablec.x / xlat_mutablec.y)));\n' + '    if ((abs(xlat_mutablec.y) > (1e-08 * abs(xlat_mutablec.x)))) {\n' + '      if ((xlat_mutablec.y < 0.0)) {\n' + '        if ((xlat_mutablec.x >= 0.0)) {\n' + '          tmpvar_10 += 3.141593;\n' + '        } else {\n' + '          tmpvar_10 = (tmpvar_10 - 3.141593);\n' + '        };\n' + '      };\n' + '    } else {\n' + '      tmpvar_10 = (sign(xlat_mutablec.x) * 1.570796);\n' + '    };\n' + '     vec2 tmpvar_13;\n' + '    tmpvar_13.x = ((0.3183098 * (\n' + '      float(xlat_mutablen)\n' + '     * tmpvar_10)) + _qg.y);\n' + '    tmpvar_13.y = (((xlat_mutables * aspect.w) * log(\n' + '      sqrt(dot (xlat_mutablec, xlat_mutablec))\n' + '    )) + _qg.z);\n' + '    uv_1 = (0.5 + ((0.5 - \n' + '      abs(((fract(\n' + '        (tmpvar_13 * 0.5)\n' + '      ) * 2.0) - 1.0))\n' + '    ) * xlat_mutablecutoff));\n' + '  };\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, uv_1);\n' + '   vec2 x_15;\n' + '  x_15 = -(uv_1);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = mix (mix (vec3(0.0, 1.0, 2.0), vec3(-2.0, -2.0, 0.0), vec3((\n' + '    (-(tmpvar_14.y) + 0.5)\n' + '   + \n' + '    sqrt(dot (x_15, x_15))\n' + '  ))), vec3(1.0, 0.5, 0.0), vec3((sqrt(\n' + '    dot (uv_1, uv_1)\n' + '  ) * 0.666)));\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'warp = 0;\n' + 'wave_a = 0;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1*1.5;\n' + 'dt = 0.03/fps;\n' + 'vx2 = vx2*(1-2*dt) + dt*((x1+x3-2*x2)*10);\n' + 'vy2 = vy2*(1-2*dt) + dt*((y1+y3-2*y2)*10-0.5);\n' + 'vx3 = vx3*(1-2*dt) + dt*((x2+x4-2*x3)*10);\n' + 'vy3 = vy3*(1-2*dt) + dt*((y2+y4-2*y3)*10-0.5);\n' + 'vx4 = vx4*(1-2*dt) + dt*((x3-x4)*10);\n' + 'vy4 = vy4*(1-2*dt) + dt*((y3-y4)*10-0.5);\n' + 'x2 = x2 + vx2;\n' + ' y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + ' y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + ' y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*0.5);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*0.5);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*0.5);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*0.5);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*0.5);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*0.5);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*0.5);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*0.5);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*0.5);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*0.5);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*0.5);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*0.5);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'q9 = 1/aspectx;\n' + 'q10 = 1/aspecty;\n' + 'q11 = aspectx;\n' + 'q12 = aspecty;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 't1 = (bb-mn)/(mx-mn);\n' + 't2 = (mm-mn)/(mx-mn);\n' + 't3 = (tt-mn)/(mx-mn);\n' + 'v = 0.1/fps;\n' + 'bm = bm + (t1-t2)*v;\n' + 'mt = mt + (t2-t3)*v;\n' + 'q22 = 0;\n' + 'q21 = 1;\n' + 'q25 = 0;\n' + 'q23 = -1;\n' + 'q26 = -bm;\n' + 'q27 = mt;'),
	'pixel_eqs_str' : ('x = 0.5 + (x-0.5)*q11;\n' + 'y = 0.5 + (y-0.5)*q12;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'dx = 0;\n' + ' dy = 0;\n' + 'd = sqrt((x-xx)*(x-xx)+(y-yy)*(y-yy));\n' + 'r = 0.11;\n' + 'v = 20;\n' + 'dx = (v*(sin(y-yy)*(d-r)-(x-xx)*(d-r/2)))*(1.00-sigmoid(d-r,100));\n' + 'dy = (-v*(sin(x-xx)*(d-r)+(y-yy)*(d-r/2)))*(1.00-sigmoid(d-r,100));'),
};

return pmap;
});