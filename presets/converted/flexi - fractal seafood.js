define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.22,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.037,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.31218,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.50374,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 0.803,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.04,
		zoom : 1.0,
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
		decay : 0.98,
		wave_a : 0.004,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.75,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.q1 = 0;
m.tt = 0;
m.ww = 0;
m.a = 0;
m.q2 = 0;
m.q3 = 0;
m.vx = 0;
m.q4 = 0;
m.vy = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.q20 = 0;
m.q10 = 0;
m.ww1 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.v = 0;
m.q16 = 0;
m.w = 0;
m.q17 = 0;
m.x = 0;
m.q18 = 0;
m.y1 = 0;
m.y = 0;
m.q19 = 0;
m.y2 = 0;
m.w1 = 0;
m.v1 = 0;
m.v2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0.1;
m.zoom = 1;
m.wave_a = 0;
m.w = m.w1;
m.ww = ((-(m.y1-m.y2)*(1+((div(70,m.fps)-1)*2)))-(m.y1*0.8));
m.w = (m.w-(m.ww*5));
m.q1 = Math.cos(m.ww);
m.q2 = Math.sin(m.ww);
m.q3 = 1.12;
m.q4 = (Math.sin(m.w)*0.042);
m.q5 = (Math.cos(m.w)*0.042);
m.a = (Math.asin(1)*0.5);
m.d = 0.08;
m.q6 = Math.cos((m.a+(0*m.ww)));
m.q7 = Math.sin((m.a+(0*m.ww)));
m.q8 = 3.3;
m.q9 = ((Math.cos((-m.w+Math.asin(1)))*m.d)*m.aspectx);
m.q10 = ((Math.sin((-m.w+Math.asin(1)))*m.d)*m.aspecty);
m.q11 = Math.cos((-m.a+(0*m.ww)));
m.q12 = Math.sin((-m.a+(0*m.ww)));
m.q13 = m.q8;
m.q14 = ((Math.cos((-m.w+Math.asin(1)))*m.d)*m.aspectx);
m.q15 = ((Math.sin((-m.w+Math.asin(1)))*m.d)*m.aspecty);
m.bb = ((m.bb*0.97)+(m.bass*0.04));
m.tt = ((m.tt*0.97)+(m.treb*0.04));
m.w1 = (m.w1+(((m.ww1*sqrt(((m.vx*m.vx)+(m.vy*m.vy))))*m.a)*2));
m.ww1 = ((m.ww1*0.94)+(m.y1*0.1));
m.q16 = ((m.bb-m.tt)*0.2);
m.y1 = (m.y1+(m.v1*0.1));
m.y2 = (m.y2+(m.v2*0.2));
m.v1 = ((m.v1*0.95)-((m.y1-m.q16)*0.1));
m.v2 = ((m.v2*0.99)-((m.y2-m.y1)*0.2));
m.a = div((Math.abs((m.y2-m.y1))*2.2),m.fps);
m.q17 = (Math.sin(m.w)*m.a);
m.q18 = (-Math.cos(m.w)*m.a);
m.v = 0.25;
m.x = (m.x+(m.vx*m.v));
m.x = Math.min(1, Math.max(-1, m.x));
m.y = (m.y+(m.vy*m.v));
m.y = Math.min(1, Math.max(-1, m.y));
m.vx = (((m.vx*0.97)+(Math.sin(m.w)*m.a))+((equal(m.x, -1)-equal(m.x, 1))*0.2));
m.vy = (((m.vy*0.97)-(Math.cos(m.w)*m.a))+((equal(m.y, -1)-equal(m.y, 1))*0.2));
m.q19 = (m.x*0.5);
m.q20 = (m.y*0.5);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.t5 = 0;
m.t6 = 0;
m.c = 0;
m.t7 = 0;
m.d = 0;
m.t8 = 0;
m.cl1 = 0;
m.j2 = 0;
m.cl2 = 0;
m.j3 = 0;
m.j = 0;
m.cl3 = 0;
m.k = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.t = 0;
m.v = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0;
m.v = 0.01;
m.j = (m.j+(m.bass*0.01));
m.j2 = (m.j2+(m.mid_att*0.01));
m.j3 = (m.j3+(m.treb_att*0.01));
m.t2 = m.j;
m.t3 = m.j2;
m.t4 = m.j3;
m.k = ((m.k*0.99)+div((10*m.mid),m.fps));
m.t5 = -m.k;
m.cl1 = (m.cl1+0.002);
m.cl1 = ifcond(above(m.cl1, 1), 0, m.cl1);
m.cl1 = ifcond(below(m.cl1, 0), 1, m.cl1);
m.t8 = m.cl1;
m.cl2 = (m.cl2-(1*m.q1));
m.cl2 = ifcond(above(m.cl2, 1), 0, m.cl2);
m.cl2 = ifcond(below(m.cl2, 0), 1, m.cl2);
m.t7 = m.cl2;
m.cl3 = (m.cl3+0.001);
m.cl3 = ifcond(above(m.cl3, 1), 0, m.cl3);
m.cl3 = ifcond(below(m.cl3, 0), 1, m.cl3);
m.t6 = m.cl3;
		return m;
	},
		'point_eqs' : function(m) {
m.xx = div((mod((m.sample*983624912364),10000000)+100),10000000);
m.yy = div((mod((m.xx*1896575575),10000000)+100),10000000);
m.zz = div((mod((m.yy*58652340875),10000000)+100),10000000);
m.d = sqrt(((sqr(m.xx)+sqr(m.yy))+sqr(m.zz)));
m.zz = (((m.zz+m.t8)-ifcond(above((m.zz+m.t8), 1), 1, 0))-0.5);
m.xx = (((m.xx+m.t7)-ifcond(above((m.xx+m.t7), 1), 1, 0))-0.5);
m.yy = (((m.yy+m.t6)-ifcond(above((m.yy+m.t6), 1), 1, 0))-0.5);
m.v = 0.001;
m.w = 1;
m.bb = ((m.d*m.d)*0.5);
m.n = 0.3;
m.s1 = Math.sin((Math.sin(((m.t2*m.w)+m.bb))*m.n));
m.s2 = Math.sin((Math.sin(((m.t3*m.w)+m.bb))*m.n));
m.s3 = Math.sin((Math.sin(((m.t4*m.w)+m.bb))*m.n));
m.c1 = Math.cos((Math.sin(((m.t2*m.w)+m.bb))*m.n));
m.c2 = Math.cos((Math.sin(((m.t3*m.w)+m.bb))*m.n));
m.c3 = Math.cos((Math.sin(((m.t4*m.w)+m.bb))*m.n));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = (0.5*div(1,(m.z+0.5)));
m.x = ((0.5+(m.zoom*m.x1))+(Math.sin((m.time*0.1))*0));
m.y = ((0.5+(m.zoom*m.y1))+(Math.cos((m.time*0.16801))*0));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((m.z*2)+(m.t2*1));
m.c = 3;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = 0.4;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t1 = 0;\n' + 'v = 0.01;\n' + 'j = j + (bass)*0.01;\n' + 'j2 = j2 + (mid_att)*0.01;\n' + 'j3 = j3 + (treb_att)*0.01;\n' + 't2 = j;\n' + 't3 = j2;\n' + 't4 = j3;\n' + 'k = k*0.99 + 10*mid/fps;\n' + 't5 = -k;\n' + 'cl1 = cl1 + 0.002;\n' + 'cl1 = if(above(cl1,1),0,cl1);\n' + 'cl1 = if(below(cl1,0),1,cl1);\n' + 't8 = cl1;\n' + 'cl2 = cl2 -1*q1;\n' + 'cl2 = if(above(cl2,1),0,cl2);\n' + 'cl2 = if(below(cl2,0),1,cl2);\n' + 't7 = cl2;\n' + 'cl3 = cl3 +0.001;\n' + 'cl3 = if(above(cl3,1),0,cl3);\n' + 'cl3 = if(below(cl3,0),1,cl3);\n' + 't6 = cl3;'),
		'point_eqs_str' : ('xx = ((sample*983624912364)%10000000+100)/10000000;\n' + 'yy = ((xx*1896575575)%10000000+100)/10000000;\n' + 'zz = ((yy*58652340875)%10000000+100)/10000000;\n' + 'd = sqrt(sqr(xx)+sqr(yy)+sqr(zz));\n' + 'zz = zz + t8 - if(above(zz+t8,1),1,0) - 0.5;\n' + 'xx = xx + t7 - if(above(xx+t7,1),1,0) - 0.5;\n' + 'yy = yy + t6 - if(above(yy+t6,1),1,0) - 0.5;\n' + 'v = 0.001;\n' + 'w = 1;\n' + 'bb = d*d*0.5;\n' + 'n= 0.3;\n' + 's1 = sin(sin(t2*w+bb)*n);\n' + 's2 = sin(sin(t3*w+bb)*n);\n' + 's3 = sin(sin(t4*w+bb)*n);\n' + 'c1 = cos(sin(t2*w+bb)*n);\n' + 'c2 = cos(sin(t3*w+bb)*n);\n' + 'c3 = cos(sin(t4*w+bb)*n);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = .5*(1/(z+0.5));\n' + 'x = 0.5 + zoom*x1 + sin(time*0.1)*0;\n' + 'y = 0.5 + zoom*y1 + cos(time*0.16801)*0;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = z*2+t2*1;\n' + 'c=3;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = 0.4;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 7.7518,
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
m.d = 0;
m.t8 = 0;
m.t1 = 0;
m.t2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
m.t1 = 0.5;
m.t2 = 0.9;
		return m;
	},
		'point_eqs' : function(m) {
m.d = ((m.d*0.85)+(m.value1*1));
m.x = (0.5+((m.d*m.sample)*(1-m.sample)));
m.y = (0.9-(m.sample*0.8));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;\n' + 't1 = 0.5;\n' + 't2 = 0.9;'),
		'point_eqs_str' : ('d = d*0.85 + (value1)*1;\n' + 'x = 0.5 + d*sample*(1-sample);\n' + 'y = 0.9 - sample*0.8;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 5.92556,
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
m.ddd = (((m.dd*m.sample)*(1-m.sample))*m.d);
m.x = (m.xx+((m.yy-m.yyy)*m.ddd));
m.y = (m.yy-((m.xx-m.xxx)*m.ddd));
m.x = (0.5+((m.x-0.5)*m.q9));
m.y = (0.5+((m.y-0.5)*m.q10));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xxx = xx;\n' + 'yyy = yy;\n' + 'xx = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'yy = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'dd = dd*0.95 + (value1);\n' + 'ddd = dd*sample*(1-sample)*d;\n' + 'x = xx + (yy-yyy)*ddd;\n' + 'y = yy - (xx-xxx)*ddd;\n' + 'x = 0.5 + (x-0.5)*q9;\n' + 'y = 0.5 + (y-0.5)*q10;'),

		},
		{
		'baseVals' : {
			a : 0.34,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 5.92556,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
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
m.xxx = 0;
m.yyy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t2 = 0;
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
m.ddd = (((m.dd*m.sample)*(1-m.sample))*m.d);
m.ddd = ((((m.sample*(1-m.sample))*Math.sin((m.sample*120)))*m.d)*0.1);
m.x = (m.xx+((m.yy-m.yyy)*m.ddd));
m.y = (m.yy-((m.xx-m.xxx)*m.ddd));
m.x = (0.5+((m.x-0.5)*m.q9));
m.y = (0.5+((m.y-0.5)*m.q10));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xxx = xx;\n' + 'yyy = yy;\n' + 'xx = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'yy = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'dd = dd*0.95 + (value1);\n' + 'ddd = dd*sample*(1-sample)*d;\n' + 'ddd = sample*(1-sample)*sin(sample*120)*d*0.1;\n' + 'x = xx + (yy-yyy)*ddd;\n' + 'y = yy - (xx-xxx)*ddd;\n' + 'x = 0.5 + (x-0.5)*q9;\n' + 'y = 0.5 + (y-0.5)*q10;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
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
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.81948,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.64927,
			x : 0.74,
			y : 0.27,
			ang : 3.83274,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {

m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
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
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.73458,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.33,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {

m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.73458,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.16283,
			x : 0.5,
			y : 0.5,
			ang : 0.75398,
			sides : 64.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {

m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : (''),

		}
],
	'warp' : ('highp vec2 xlat_mutablefactorA;\n' + 'shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (uv_orig - 0.5);\n' + '  xlat_mutablefactorA = (tmpvar_3 * aspect.xy);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((xlat_mutablefactorA.x * _qa.x) - (xlat_mutablefactorA.y * _qa.y));\n' + '  tmpvar_4.y = ((xlat_mutablefactorA.x * _qa.y) + (xlat_mutablefactorA.y * _qa.x));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = _qa.w;\n' + '  tmpvar_5.y = _qb.x;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((xlat_mutablefactorA.x * _qb.y) - (xlat_mutablefactorA.y * _qb.z));\n' + '  tmpvar_6.y = ((xlat_mutablefactorA.x * _qb.z) + (xlat_mutablefactorA.y * _qb.y));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = ((xlat_mutablefactorA.x * _qc.z) - (xlat_mutablefactorA.y * _qc.w));\n' + '  tmpvar_7.y = ((xlat_mutablefactorA.x * _qc.w) + (xlat_mutablefactorA.y * _qc.z));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = clamp (((0.5 + \n' + '    ((tmpvar_4 * aspect.zw) * _qa.z)\n' + '  ) + (tmpvar_5 * aspect.zw)), 0.0, 1.0);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = clamp (((0.5 + \n' + '    ((tmpvar_6 * aspect.zw) * _qb.w)\n' + '  ) + _qc.xy), 0.0, 1.0);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = clamp (((0.5 + \n' + '    ((tmpvar_7 * aspect.zw) * _qd.x)\n' + '  ) + _qd.yz), 0.0, 1.0);\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = max (texture2D (sampler_main, tmpvar_8).x, max (texture2D (sampler_main, tmpvar_9).x, texture2D (sampler_main, tmpvar_10).x));\n' + '  ret_2.x = (tmpvar_11 - 0.015);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (tmpvar_3 * vec2(1.8, 1.8));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = ((tmpvar_12.x * tmpvar_12.x) - (tmpvar_12.y * tmpvar_12.y));\n' + '  tmpvar_13.y = ((2.0 * tmpvar_12.x) * tmpvar_12.y);\n' + '  my_uv2_1 = (tmpvar_13 + vec2(0.5, 0.71));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_fc_main, my_uv2_1);\n' + '  ret_2.y = tmpvar_14.y;\n' + '   vec2 P_15;\n' + '  P_15 = (uv + vec2(-0.1, -0.1));\n' + '   vec2 P_16;\n' + '  P_16 = (uv + (vec2(2.0, 1.0) * texsize.zw));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = max (texture2D (sampler_main, P_15).y, (texture2D (sampler_main, P_16).z - 0.0038));\n' + '  ret_2.z = tmpvar_17;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'shader_body {\n' + '   vec2 uv1_1;\n' + '  xlat_mutabled = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_2 = texture2D (sampler_blur1, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(-1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '  xlat_mutabledx = (((tmpvar_2.xyz * scale1) + bias1) - ((tmpvar_4.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, -1.0) * xlat_mutabled));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '  xlat_mutabledy = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = xlat_mutabledx.z;\n' + '  tmpvar_10.y = xlat_mutabledy.z;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = clamp (((0.5 + \n' + '    (uv - 0.5)\n' + '  ) + (_qe.zw * vec2(-1.0, 1.0))), 0.0, 1.0);\n' + '  xlat_mutabled = (texsize.zw * 3.0);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_11 + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_11 + (vec2(-1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '  xlat_mutabledx = (((tmpvar_12.xyz * scale1) + bias1) - ((tmpvar_14.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (tmpvar_11 + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_16 = texture2D (sampler_blur1, P_17);\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (tmpvar_11 + (vec2(0.0, -1.0) * xlat_mutabled));\n' + '  tmpvar_18 = texture2D (sampler_blur1, P_19);\n' + '  xlat_mutabledy = (((tmpvar_16.xyz * scale1) + bias1) - ((tmpvar_18.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = xlat_mutabledx.x;\n' + '  tmpvar_20.y = xlat_mutabledy.x;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = (tmpvar_11 - (tmpvar_20 * 0.4));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = xlat_mutabledx.x;\n' + '  tmpvar_22.y = xlat_mutabledy.x;\n' + '  uv1_1 = (fract((uv + \n' + '    (tmpvar_10 * 1.6)\n' + '  )) - tmpvar_22);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur2, uv1_1);\n' + '   vec2 tmpvar_24;\n' + '  tmpvar_24.x = xlat_mutabledx.x;\n' + '  tmpvar_24.y = xlat_mutabledy.x;\n' + '   vec2 P_25;\n' + '  P_25 = (uv - (tmpvar_24 * 0.4));\n' + '   vec3 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, P_25).zzz;\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_blur1, tmpvar_21);\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_main, tmpvar_11).xxx;\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29.w = 1.0;\n' + '  tmpvar_29.xyz = mix (mix (mix (vec3(\n' + '    (((tmpvar_23.xyz * scale2) + bias2).z * 0.6)\n' + '  ), \n' + '    ((vec3(1.0, -0.2, 0.3) * uv.y) + (vec3(1.0, 1.0, -0.2) * (1.0 - uv.y)))\n' + '  , tmpvar_26), vec3(1.0, 1.0, 1.0), (\n' + '    (tmpvar_27.xyz * scale1)\n' + '   + bias1).xxx), ((vec3(0.5, 0.0, 0.5) * uv.x) + (vec3(0.0, 1.0, 1.0) * \n' + '    (1.0 - uv.x)\n' + '  )), tmpvar_28);\n' + '  vec4 ret4 = tmpvar_29;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0.1;\n' + 'zoom = 1;\n' + 'wave_a = 0;\n' + 'w = w1;\n' + 'ww = -(y1-y2)*(1+(70/fps-1)*2) - y1*0.8;\n' + 'w = w - ww*5;\n' + 'q1 = cos(ww);\n' + 'q2 = sin(ww);\n' + 'q3 = 1.12;\n' + 'q4 = sin(w)*0.042;\n' + 'q5 = cos(w)*0.042;\n' + 'a = asin(1)*0.5;\n' + 'd = 0.08;\n' + 'q6 = cos(a+0*ww);\n' + 'q7 = sin(a+0*ww);\n' + 'q8 = 3.3;\n' + 'q9 = cos(-w + asin(1))*d*aspectx;\n' + 'q10 = sin(-w+asin(1))*d*aspecty;\n' + 'q11 = cos(-a+0*ww);\n' + 'q12 = sin(-a+0*ww);\n' + 'q13 = q8;\n' + 'q14 = cos(-w + asin(1))*d*aspectx;\n' + 'q15 = sin(-w+asin(1))*d*aspecty;\n' + 'bb = bb*0.97 + bass*0.04;\n' + 'tt = tt*0.97 + treb*0.04;\n' + 'w1 = w1 + ww1*sqrt(vx*vx+vy*vy)*a*2;\n' + 'ww1 = ww1*0.94 + y1*0.1;\n' + 'q16 = (bb-tt)*0.2;\n' + 'y1 = y1 + v1*0.1;\n' + 'y2 = y2 + v2*0.2;\n' + 'v1 = v1*0.95 - (y1-q16)*0.1;\n' + 'v2 = v2*0.99 - (y2-y1)*0.2;\n' + 'a = abs(y2-y1)*2.2/fps;\n' + 'q17 = sin(w)*a;\n' + 'q18 = -cos(w)*a;\n' + 'v = 0.25;\n' + 'x = x + vx*v;\n' + ' x=min(1,max(-1,x));\n' + 'y = y + vy*v;\n' + ' y=min(1,max(-1,y));\n' + 'vx = vx*0.97 +sin(w)*a  + (equal(x,-1)- equal(x,1))*0.2;\n' + 'vy = vy*0.97 -cos(w)*a  + (equal(y,-1)- equal(y,1))*0.2;\n' + 'q19 = x*0.5;\n' + 'q20 = y*0.5;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});