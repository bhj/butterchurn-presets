define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 3.1,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 32.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 24.0,
		wave_scale : 0.012,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.015,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.02,
		mv_dy : -0.02,
		mv_a : 0.0,
		fshader : 0.01,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.3,
		echo_zoom : 1.104,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.48,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 0.02,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 0.49,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.ib_bass = 0;
m.nu = 0;
m.sz = 0;
m.gamma = 0;
m.oy = 0;
m.cox = 0;
m.basstime = 0;
m.coy = 0;
m.dis = 0;
m.cdelay1 = 0;
m.cdelay2 = 0;
m.musictime = 0;
m.zm = 0;
m.counter1 = 0;
m.ti = 0;
m.modx = 0;
m.counter2 = 0;
m.mox = 0;
m.mody = 0;
m.moy = 0;
m.ysec = 0;
m.xsec = 0;
m.colorcounter = 0;
m.pox = 0;
m.poy = 0;
m.ypos = 0;
m.xpos = 0;
m.ocoy = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+0.2)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+0.2)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.ib_r = (0.5*ifcond(equal(m.colorcounter, 1), 1, ifcond(equal(m.colorcounter, 2), 1, ifcond(equal(m.colorcounter, 3), 1, ifcond(equal(m.colorcounter, 4), Math.sin((m.counter2+2.1)), ifcond(equal(m.colorcounter, 5), 0, ifcond(equal(m.colorcounter, 6), 0, Math.sin(m.counter1))))))));
m.ib_g = (0.5*ifcond(equal(m.colorcounter, 1), 0, ifcond(equal(m.colorcounter, 2), Math.sin((m.counter2*0.5)), ifcond(equal(m.colorcounter, 3), Math.sin(((m.counter1+1.75)*0.4)), ifcond(equal(m.colorcounter, 4), 1, ifcond(equal(m.colorcounter, 5), 1, ifcond(equal(m.colorcounter, 6), Math.sin((m.counter2+2)), 0)))))));
m.ib_b = ifcond(equal(m.colorcounter, 1), Math.sin((m.counter1+2.1)), ifcond(equal(m.colorcounter, 2), 0, ifcond(equal(m.colorcounter, 3), 0, ifcond(equal(m.colorcounter, 4), 0, ifcond(equal(m.colorcounter, 5), Math.sin(m.counter1), ifcond(equal(m.colorcounter, 6), 1, 1))))));
m.ib_bass = Math.min(((m.bass_att*1)+0.2), 1);
m.ib_r = (m.ib_r*m.ib_bass);
m.ib_g = (m.ib_g*m.ib_bass);
m.ib_b = (m.ib_b*m.ib_bass);
m.gamma = (1+(Math.min(m.bass, 1)*0.3));
m.ob_r = (m.ib_r-0.5);
m.ob_g = (m.ib_g-0.5);
m.ob_b = (m.ib_b-0.5);
m.q1 = m.ib_r;
m.q2 = m.ib_g;
m.q3 = m.ib_b;
m.decay = 0.99;
m.solarize = above(0.5, m.bass);
m.musictime = (m.musictime+((m.bass*m.bass)*0.003));
m.basstime = (m.basstime+((m.bass*m.bass)*0.03));
m.xpos = (Math.sin((m.musictime*0.6))*0.4);
m.ypos = (Math.sin((m.musictime*0.4))*0.2);
m.q4 = m.xpos;
m.q5 = m.ypos;
m.q6 = m.basstime;
		m.rkeys = ['q1','oy','cox','coy','zoom','dx','dy','mox','moy','ocoy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.ti = (m.time*-0.6);
m.rot = (Math.sin(((m.rad+m.ti)*6.2832))*0.01);
m.sz = 0.4;
m.xsec = (above(m.x, m.sz)*below(m.x, (1-m.sz)));
m.ysec = (above(m.y, m.sz)*below(m.y, (1-m.sz)));
m.zoom = ifcond((m.xsec+m.ysec), m.zoom, 0.98);
m.dx = ifcond((m.xsec+m.ysec), m.dx, 0.5);
m.dy = ifcond((m.xsec+m.ysec), m.dy, 0.5);
m.sx = ifcond((m.xsec+m.ysec), (0.9+m.q3), 1);
m.rot = ifcond((m.xsec+m.ysec), m.rot, (m.q4*(1-(2*above(m.x, 0.8)))));
m.coy = ((m.coy+below(m.y, m.oy))*above(m.q1, 0));
m.cox = (((m.cox+1)*above(m.q1, 0))*equal(m.coy, m.ocoy));
m.moy = Math.max(m.coy, m.moy);
m.mox = Math.max(m.cox, m.mox);
m.nu = 4;
m.pox = ((div(m.cox,m.nu)-Math.floor(div(m.cox,m.nu)))*m.nu);
m.poy = ((div(m.coy,m.nu)-Math.floor(div(m.coy,m.nu)))*m.nu);
m.mod = ((1-(2*above(m.x, 0.5)))*(1-(2*above(m.y, 0.5))));
m.dx = (ifcond(equal(mod(m.coy,2), 0), (-equal(m.pox, 1)+equal(m.pox, 2)), (equal(m.pox, 0)-equal(m.pox, 3)))*0.001);
m.dy = ((ifcond(equal(mod(m.coy,2), 0), (-equal(m.pox, 1)+equal(m.pox, 2)), (equal(m.pox, 0)-equal(m.pox, 3)))*0.001)*m.mod);
m.dis = (m.x+(1-m.y));
m.mod = ifcond(above(m.dis, 1), (m.dis-1), (1-m.dis));
m.mod = (below(m.mod, 0.2)+(((1-Math.min(1, ((m.mod-0.2)*4)))*above(m.mod, 0.2))*1));
m.zm = m.q5;
m.modx = ifcond(above(m.dis, 1), m.zm, -m.zm);
m.mody = ifcond(above(m.dis, 1), -m.zm, m.zm);
m.dx = ((m.dx*m.mod)+((1-m.mod)*m.modx));
m.dy = ((m.dy*m.mod)+((1-m.mod)*m.mody));
m.rot = (((Math.sin(div(m.time,8))*0.45)+0.04201)*m.mod);
m.oy = m.y;
m.ocoy = m.coy;
m.q1 = (m.q1+1);
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
			tex_ang : 0.94248,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.53426,
			additive : 0.0,
			border_a : 0.17,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.67089,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.advs = 0;
m.q3 = 0;
m.q5 = 0;
m.flux = 0;
m.fluxs = 0;
m.adv = 0;
m.advflux = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.flux = (m.q5*9);
m.fluxs = Math.max(m.flux, 0);
m.fluxs = Math.min(m.fluxs, 1);
m.advflux = ((m.q3*m.fluxs)+(-m.q3*(1-m.fluxs)));
m.adv = (m.adv+m.advflux);
m.advs = div(m.adv,256);
m.ang = m.advs;
m.rad = (1.671+div(m.q3,25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('flux=q5*9;\n' + 'fluxs=max(flux,0);\n' + 'fluxs=min(fluxs,1);\n' + 'advflux=(q3*fluxs) + (-q3 * (1-fluxs));\n' + 'adv=adv+advflux;\n' + 'advs=adv/256;\n' + 'ang=advs;\n' + 'rad=1.671 + q3/25;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
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
			b2 : 0.1,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.35,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = (0.1+(m.q2*0.4));
m.rad = div(m.q2,2);
m.ang = (-m.q2*2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=0.1 + q2*0.4;\n' + 'rad=q2/2;\n' + 'ang=-q2*2;'),

		},
		{
		'baseVals' : {
			r2 : 0.1,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.05,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.44484,
			x : 0.59,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.mover = 0;
m.dir = 0;
m.rotator = 0;
m.dir = 3;
m.mover = 0;
m.rotator = 0.255;
			m.rkeys = ['mover','dir','rotator'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.rotator;
m.x = ifcond(equal(m.dir, 1), (1-m.mover), ifcond(equal(m.dir, 1.5), 0.15, ifcond(equal(m.dir, 2), 0, ifcond(equal(m.dir, 2.5), 0, ifcond(equal(m.dir, 3), (0+m.mover), ifcond(equal(m.dir, 3.5), 1, ifcond(equal(m.dir, 4), 1, 1)))))));
m.y = ifcond(equal(m.dir, 1), 1, ifcond(equal(m.dir, 1.5), 1, ifcond(equal(m.dir, 2), (1-m.mover), ifcond(equal(m.dir, 2.5), 0, ifcond(equal(m.dir, 3), 0, ifcond(equal(m.dir, 3.5), 0, ifcond(equal(m.dir, 4), (0+m.mover), 1)))))));
m.mover = ifcond(equal(m.dir, 1), (m.mover+0.005), ifcond(equal(m.dir, 1.5), 0, ifcond(equal(m.dir, 2), (m.mover+0.005), ifcond(equal(m.dir, 2.5), 0, ifcond(equal(m.dir, 3), (m.mover+0.005), ifcond(equal(m.dir, 3.5), 0, ifcond(equal(m.dir, 4), (m.mover+0.005), 0)))))));
m.dir = ifcond(equal(m.dir, 1), ifcond(above(m.mover, 0.995), 1.5, m.dir), ifcond(equal(m.dir, 1.5), ifcond(below(m.rotator, -1.29), 2, m.dir), ifcond(equal(m.dir, 2), ifcond(above(m.mover, 0.995), 2.5, m.dir), ifcond(equal(m.dir, 2.5), ifcond(below(m.rotator, -2.85), 3, m.dir), ifcond(equal(m.dir, 3), ifcond(above(m.mover, 0.995), 3.5, m.dir), ifcond(equal(m.dir, 3.5), ifcond(below(m.rotator, -4.44), 4, m.dir), ifcond(equal(m.dir, 4), ifcond(above(m.mover, 0.995), 4.5, m.dir), ifcond(equal(m.dir, 4.5), ifcond(below(m.rotator, -5.94), 1, m.dir), m.dir))))))));
m.rotator = ifcond(equal(m.dir, 1.5), ifcond(above(m.rotator, -1.31), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 2), -1.3, ifcond(equal(m.dir, 2.5), ifcond(above(m.rotator, -2.87), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 3), -2.86, ifcond(equal(m.dir, 3.5), ifcond(above(m.rotator, -4.46), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 4), -4.45, ifcond(equal(m.dir, 4.5), ifcond(above(m.rotator, -5.97), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 4), -5.96, 0.26))))))));
m.b = above(m.mid, 1.5);
m.r2 = above(m.mid, 1.5);
m.g2 = above(m.mid, 1.5);
m.b2 = above(m.mid, 1.5);
		return m;
	},
		'init_eqs_str' : ('dir = 3;\n' + 'mover = 0;\n' + 'rotator = .255;'),
		'frame_eqs_str' : ('ang = rotator;\n' + 'x = if(equal(dir,1),1 - mover,if(equal(dir,1.5),.15,if(equal(dir,2),0,if(equal(dir,2.5),0, if(equal(dir,3),0+mover,if(equal(dir,3.5),1,if(equal(dir,4),1,1)))))));\n' + 'y = if(equal(dir,1),1,if(equal(dir,1.5),1,if(equal(dir,2),1 - mover,if(equal(dir,2.5),0, if(equal(dir,3),0,if(equal(dir,3.5),0,if(equal(dir,4),0+mover,1)))))));\n' + 'mover = if(equal(dir,1),mover + .005,if(equal(dir,1.5),0,if(equal(dir,2),mover + .005,if(equal(dir,2.5),0, if(equal(dir,3),mover+.005,if(equal(dir,3.5),0,if(equal(dir,4),mover+.005,0)))))));\n' + 'dir = if(equal(dir,1),if(above(mover,.995),1.5,dir),if(equal(dir,1.5),if(below(rotator,-1.29),2,dir), if(equal(dir,2),if(above(mover,.995),2.5,dir),if(equal(dir,2.5),if(below(rotator,-2.85),3,dir), if(equal(dir,3),if(above(mover,.995),3.5,dir),if(equal(dir,3.5),if(below(rotator,-4.44),4,dir), if(equal(dir,4),if(above(mover,.995),4.5,dir),if(equal(dir,4.5),if(below(rotator,-5.94),1,dir),dir))))))));\n' + 'rotator = if(equal(dir,1.5),if(above(rotator,-1.31),rotator - .05,rotator),if(equal(dir,2),-1.3, if(equal(dir,2.5),if(above(rotator,-2.87),rotator-.05,rotator),if(equal(dir,3),-2.86, if(equal(dir,3.5),if(above(rotator,-4.46),rotator-.05,rotator),if(equal(dir,4),-4.45, if(equal(dir,4.5),if(above(rotator,-5.97),rotator-.05,rotator),if(equal(dir,4),-5.96,.26))))))));\n' + 'b = above(mid,1.5);\n' + 'r2 = above(mid,1.5);\n' + 'g2 = above(mid,1.5);\n' + 'b2 = above(mid,1.5);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.3,
			enabled : 1.0,
			b : 0.98,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.09,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.98,
			border_g : 1.0,
			rad : 0.1,
			x : 0.84,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin(div(m.time,2))*0.4)+0.5);
m.y = ((Math.sin(m.time)*0.4)+0.5);
m.rad = div((m.q1*m.q1),2);
m.ang = (m.q1*4);
m.r = (0.70+(Math.sin(div(m.time,2))*0.50));
m.g = (0.70+(Math.sin((div(m.time,2)+2))*0.50));
m.b = (0.70+(Math.sin((div(m.time,2)+4))*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=sin(time/2)*0.4 + 0.5;\n' + 'y=sin(time)*0.4+0.5;\n' + 'rad=(q1*q1)/2;\n' + 'ang=q1*4;\n' + 'r=0.70 + (sin(time/2))*0.50;\n' + 'g=0.70 + (sin(time/2 + 2)) * 0.50;\n' + 'b=0.70 + (sin(time/2 + 4)) * 0.5;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+.2),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+.2),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'ib_r = .5*if(equal(colorcounter,1),1, if(equal(colorcounter,2),1, if(equal(colorcounter,3),1, if(equal(colorcounter,4),sin(counter2+2.1), if(equal(colorcounter,5),0, if(equal(colorcounter,6),0,sin(counter1)))))));\n' + 'ib_g = .5*if(equal(colorcounter,1),0, if(equal(colorcounter,2),sin(counter2*.5), if(equal(colorcounter,3),sin((counter1+1.75)*.4), if(equal(colorcounter,4),1, if(equal(colorcounter,5),1, if(equal(colorcounter,6),sin(counter2+2),0))))));\n' + 'ib_b = if(equal(colorcounter,1),sin(counter1+2.1), if(equal(colorcounter,2),0, if(equal(colorcounter,3),0, if(equal(colorcounter,4),0, if(equal(colorcounter,5),sin(counter1), if(equal(colorcounter,6),1,1))))));\n' + 'ib_bass=min(bass_att*1+0.2 , 1);\n' + 'ib_r=ib_r*ib_bass;\n' + 'ib_g=ib_g*ib_bass;\n' + 'ib_b=ib_b*ib_bass;\n' + 'gamma=1+min(bass,1)*0.3;\n' + 'ob_r=ib_r-0.5;\n' + 'ob_g=ib_g-0.5;\n' + 'ob_b=ib_b-0.5;\n' + 'q1=ib_r;\n' + 'q2=ib_g;\n' + 'q3=ib_b;\n' + 'decay = 0.99;\n' + 'solarize=above(0.5,bass);\n' + 'musictime=musictime+(bass*bass)*0.003;\n' + 'basstime=basstime+(bass*bass)*0.03;\n' + 'xpos=sin(musictime*0.6)*0.4;\n' + 'ypos=sin(musictime*0.4)*0.2;\n' + 'q4=xpos;\n' + 'q5=ypos;\n' + 'q6=basstime;'),
	'pixel_eqs_str' : ('ti = time*-.6;\n' + 'rot = sin((rad+ti)*6.2832)*.01;\n' + 'sz = .4;\n' + 'xsec = above(x,sz)*below(x,1-sz);\n' + 'ysec = above(y,sz)*below(y,1-sz);\n' + 'zoom = if(xsec + ysec,zoom,.98);\n' + 'dx = if(xsec + ysec,dx,.5);\n' + 'dy = if(xsec + ysec,dy,.5);\n' + 'sx = if(xsec + ysec,.9 + q3,1);\n' + 'rot = if(xsec + ysec,rot,q4*(1-2*above(x,.8)));\n' + 'coy = (coy + below(y,oy))*above(q1,0);\n' + 'cox = (cox + 1)*above(q1,0)*equal(coy,ocoy);\n' + 'moy = max(coy,moy);\n' + 'mox = max(cox,mox);\n' + 'nu = 4;\n' + 'pox = ((cox/nu) - int(cox/nu))*nu;\n' + 'poy = ((coy/nu) - int(coy/nu))*nu;\n' + 'mod = (1-2*above(x,.5))*(1-2*above(y,.5));\n' + 'dx = if(equal(coy%2,0),-equal(pox,1) + equal(pox,2),equal(pox,0) - equal(pox,3))*.001;\n' + 'dy = if(equal(coy%2,0),-equal(pox,1) + equal(pox,2),equal(pox,0) - equal(pox,3))*.001*mod;\n' + 'dis = (x + (1-y));\n' + 'mod = if(above(dis,1),dis - 1,1-dis);\n' + 'mod = below(mod,.2) + (1-min(1,(mod-.2)*4))*above(mod,.2)*1;\n' + 'zm = q5;\n' + 'modx = if(above(dis,1),zm,-zm);\n' + 'mody = if(above(dis,1),-zm,zm);\n' + 'dx = dx*mod + (1-mod)*modx;\n' + 'dy = dy*mod + (1-mod)*mody;\n' + 'rot = (sin(time/8)*0.45+0.04201)*mod;\n' + 'oy = y;\n' + 'ocoy = coy;\n' + 'q1 = q1 + 1;'),
};

return pmap;
});