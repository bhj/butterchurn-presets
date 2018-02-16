define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 1.0,
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
		zoomexp : 1.83149,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
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
		mv_l : 0.0,
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
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.grav = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.bounce = 0;
m.resist = 0;
m.spring = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.q11 = 0;
m.xx2 = 0;
m.vx4 = 0;
m.spy2 = 0;
m.spx2 = 0;
m.spy3 = 0;
m.spx3 = 0;
m.spy4 = 0;
m.y1 = 0;
m.spx4 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
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
m.decay = 0;
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = (0.5+((m.xx1-m.xx2)*3));
m.y1 = (1-(m.yy1*0.75));
m.spring = 20;
m.grav = (0.65-(0.25*m.yy1));
m.resist = 0.03;
m.bounce = 1;
m.dt = 0.0005;
m.spx2 = (((m.x1+m.x3)-(2*m.x2))*m.spring);
m.spy2 = (((m.y1+m.y3)-(2*m.y2))*m.spring);
m.spx3 = (((m.x2+m.x4)-(2*m.x3))*m.spring);
m.spy3 = (((m.y2+m.y4)-(2*m.y3))*m.spring);
m.spx4 = ((m.x3-m.x4)*m.spring);
m.spy4 = ((m.y3-m.y4)*m.spring);
m.vx2 = ((m.vx2*(1-m.resist))+(m.dt*m.spx2));
m.vy2 = ((m.vy2*(1-m.resist))+(m.dt*(m.spy2-m.grav)));
m.vx3 = ((m.vx3*(1-m.resist))+(m.dt*m.spx3));
m.vy3 = ((m.vy3*(1-m.resist))+(m.dt*(m.spy3-(m.grav*1.5))));
m.vx4 = ((m.vx4*(1-m.resist))+(m.dt*m.spx4));
m.vy4 = ((m.vy4*(1-m.resist))+(m.dt*(m.spy4-(m.grav*4))));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0), m.vx2, (Math.abs(m.vx2)*m.bounce));
m.vx2 = ifcond(below(m.x2, 1), m.vx2, (-Math.abs(m.vx2)*m.bounce));
m.vx3 = ifcond(above(m.x3, 0), m.vx3, (Math.abs(m.vx3)*m.bounce));
m.vx3 = ifcond(below(m.x3, 1), m.vx3, (-Math.abs(m.vx3)*m.bounce));
m.vx4 = ifcond(above(m.x4, 0), m.vx4, (Math.abs(m.vx4)*m.bounce));
m.vx4 = ifcond(below(m.x4, 1), m.vx4, (-Math.abs(m.vx4)*m.bounce));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*m.bounce));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*m.bounce));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*m.bounce));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*m.bounce));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*m.bounce));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*m.bounce));
m.q1 = m.x1;
m.q2 = m.x2;
m.q3 = m.x3;
m.q4 = m.x4;
m.q5 = m.y1;
m.q6 = m.y2;
m.q7 = m.y3;
m.q8 = m.y4;
m.q2 = (Math.sin((Math.atan2((m.x4-m.x3), (m.y4-m.y3))-(Math.asin(1)*2)))*0.2);
m.monitor = m.q2;
m.zoom = 1;
m.q10 = m.aspectx;
m.q11 = m.aspecty;
m.wave_a = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.1,
			g : 0.7,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.5,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.xx = 0;
m.q2 = 0;
m.q3 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.t8 = 0;
m.ox = 0;
m.t = 0;
m.x1 = 0;
m.y2 = 0;
m.pi3 = 0;
m.x2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['xx','b','t8','g','ox','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.x1 = m.q1;
m.x2 = ((((((m.xx-0.5)+(Math.sin(m.q2)*0.3))*2.2)*0.355)+m.ox)+0.5);
m.y2 = 0.787;
m.d = (m.t8*((m.sample*0.01)+0.03));
m.y = ((((1-m.sample)*m.y2)+m.sample)+(m.d*(m.x1-m.x2)));
m.x = (((m.sample*m.x1)+((1-m.sample)*m.x2))+(m.d*(1-m.y2)));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((-m.q3*300)+((m.sample*Math.asin(1))*4.01));
m.c = 1;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.xx = m.q1;
m.ox = ((m.q4-0.5)*0.2);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'x1 = q1;\n' + 'x2 = (xx-0.5 + sin(q2)*0.3)*2.2*0.355 + ox + 0.5;\n' + 'y2 = 0.787;\n' + 'd= t8*(sample*0.01+0.03);\n' + 'y = (1-sample)*y2 + sample + d*(x1-x2);\n' + 'x = sample*x1 + (1-sample)*x2 + d*(1-y2);\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -q3*300+sample*asin(1)*4.01;\n' + 'c=1;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'xx = q1;\n' + 'ox = (q4-0.5)*0.2;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.14,
			g : 0.4,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.5,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.xx = 0;
m.q2 = 0;
m.q4 = 0;
m.d = 0;
m.t8 = 0;
m.ox = 0;
m.q10 = 0;
m.q11 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['ox','t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.x1 = 0.5;
m.x2 = ((0.5+m.ox)+(Math.sin(m.q2)*0.3));
m.y2 = 0.79;
m.d = (m.t8*((m.sample*0.01)+0.03));
m.y = (((((1-m.sample)*m.y2)+m.sample)+(m.d*(m.x2-m.x1)))-0.03);
m.x = (((m.sample*m.x1)+((1-m.sample)*m.x2))+(m.d*(1-m.y2)));
m.xx = m.q1;
m.ox = ((m.q4-0.5)*0.2);
m.x = (0.5+div((m.x-0.5),m.q10));
m.y = (0.5+div((m.y-0.5),m.q11));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'x1 = 0.5;\n' + 'x2 = 0.5 + ox + sin(q2)*0.3;\n' + 'y2 = .79;\n' + 'd= t8*(sample*0.01+0.03);\n' + 'y = (1-sample)*y2 + sample + d*(x2-x1) - 0.03;\n' + 'x = sample*x1 + (1-sample)*x2 + d*(1-y2);\n' + 'xx = q1;\n' + 'ox = (q4-0.5)*0.2;\n' + 'x = 0.5 + (x-0.5)/q10;\n' + 'y = 0.5 + (y-0.5)/q11;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.4,
			scaling : 5.92556,
			samples : 512.0,
			additive : 0.0,
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
m.xxx = 0;
m.yyy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['dd','xx','yy','sample'];
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
m.dd = ((m.dd*0.95)+m.value1);
m.ddd = 0;
m.x = (m.xx+((m.yy-m.yyy)*m.ddd));
m.y = (m.yy-((m.xx-m.xxx)*m.ddd));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xxx = xx;\n' + 'yyy = yy;\n' + 'xx = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'yy = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'dd = dd*0.95 + (value1);\n' + 'ddd = 0;\n' + 'x = xx + (yy-yyy)*ddd;\n' + 'y = yy - (xx-xxx)*ddd;'),

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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.35528,
			additive : 0.0,
			border_a : 0.16,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 2.20775,
			x : 0.5,
			y : 0.4,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q4 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+((m.q4-0.5)*0.2));
m.ang = m.q2;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = 0.5 + (q4-0.5)*0.2;\n' + 'ang = q2;'),

		},
		{
		'baseVals' : {
			r2 : 0.8,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.4,
			tex_zoom : 0.75683,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.2,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59958,
			x : 0.5,
			y : 0.4,
			ang : 0.81681,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.xx = 0;
m.q2 = 0;
m.q4 = 0;
m.ox = 0;
m.s = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.vx = 0;
			m.rkeys = ['ox'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x1 = 0.5;
m.x2 = ((0.5+m.ox)+(Math.sin(m.q2)*0.3));
m.y2 = 0.78;
m.s = 0.5;
m.y = ((((1-m.s)*m.y2)+m.s)-0.16);
m.x = (((m.s*m.x1)+((1-m.s)*m.x2))-0.12);
m.xx = m.q1;
m.ox = ((m.q4-0.5)*0.2);
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x1 = 0.5;\n' + 'x2 = 0.5 + ox + sin(q2)*0.3;\n' + 'y2 = .78;\n' + 's = 0.5;\n' + 'y = (1-s)*y2 + s - 0.16;\n' + 'x = s*x1 + (1-s)*x2 - 0.12;\n' + 'xx = q1;\n' + 'ox = (q4-0.5)*0.2;'),

		},
		{
		'baseVals' : {
			r2 : 0.4,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.8,
			tex_zoom : 0.75683,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.2,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59958,
			x : 0.5,
			y : 0.4,
			ang : 5.46637,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.xx = 0;
m.q2 = 0;
m.q4 = 0;
m.ox = 0;
m.s = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.vx = 0;
			m.rkeys = ['ox'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x1 = 0.5;
m.x2 = ((0.5+m.ox)+(Math.sin(m.q2)*0.3));
m.y2 = 0.78;
m.s = 0.5;
m.y = ((((1-m.s)*m.y2)+m.s)-0.16);
m.x = (((m.s*m.x1)+((1-m.s)*m.x2))+0.12);
m.xx = m.q1;
m.ox = ((m.q4-0.5)*0.2);
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x1 = 0.5;\n' + 'x2 = 0.5 + ox + sin(q2)*0.3;\n' + 'y2 = .78;\n' + 's = 0.5;\n' + 'y = (1-s)*y2 + s - 0.16;\n' + 'x = s*x1 + (1-s)*x2 + 0.12;\n' + 'xx = q1;\n' + 'ox = (q4-0.5)*0.2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.35528,
			additive : 1.0,
			border_a : 0.16,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 2.20775,
			x : 0.5,
			y : 0.4,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q4 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+((m.q4-0.5)*0.2));
m.ang = m.q2;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = 0.5 + (q4-0.5)*0.2;\n' + 'ang = q2;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('decay = 0;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*3;\n' + 'y1 = 1 - yy1*0.75;\n' + 'spring = 20;\n' + 'grav = .65-0.25*yy1;\n' + 'resist = 0.03;\n' + 'bounce = 1;\n' + 'dt = 0.0005;\n' + 'spx2 = (x1+x3-2*x2)*spring;\n' + 'spy2 = (y1+y3-2*y2)*spring;\n' + 'spx3 = (x2+x4-2*x3)*spring;\n' + 'spy3 = (y2+y4-2*y3)*spring;\n' + 'spx4 = (x3-x4)*spring;\n' + 'spy4 = (y3-y4)*spring;\n' + 'vx2 = vx2*(1-resist) + dt*(spx2);\n' + 'vy2 = vy2*(1-resist) + dt*(spy2-grav);\n' + 'vx3 = vx3*(1-resist) + dt*(spx3);\n' + 'vy3 = vy3*(1-resist) + dt*(spy3-grav*1.5);\n' + 'vx4 = vx4*(1-resist) + dt*(spx4);\n' + 'vy4 = vy4*(1-resist) + dt*(spy4-grav*4);\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + 'y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*bounce);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*bounce);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*bounce);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*bounce);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*bounce);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*bounce);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*bounce);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*bounce);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*bounce);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*bounce);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*bounce);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*bounce);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'q2 = sin(atan2(x4-x3,y4-y3) - asin(1)*2)*0.2;\n' + 'monitor = q2;\n' + 'zoom = 1;\n' + 'q10 = aspectx;\n' + 'q11 = aspecty;\n' + 'wave_a = 0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});