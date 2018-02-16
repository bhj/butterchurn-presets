define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.34,
		mv_x : 64.0,
		warpscale : 0.107452,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.572643,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.34,
		sy : 1.0,
		ib_size : 5.0E-4,
		warp : 0.7968,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.999998,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.34,
		mv_b : 1.0,
		echo_zoom : 1.168096,
		ob_size : 5.0E-4,
		wave_smoothing : 0.0,
		warpanimspeed : 3.235352,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.000509,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.09,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.34,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.300001,
		wave_mystery : 0.0,
		decay : 0.9889,
		wave_a : 0.0033,
		ob_g : 0.34,
		ib_a : 0.350001,
		wave_b : 0.65,
		ib_b : 0.34,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.24,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.meantreb = 0;
m.q1 = 0;
m.trebdiff = 0;
m.peakbass_att = 0;
m.meanmid = 0;
m.meanbass = 0;
m.bassdiff = 0;
m.meanbass_att = 0;
m.lastbeat = 0;
m.middiff = 0;
m.runmeanbass = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.oldy = 0.4;
		return m;
	},
	'frame_eqs' : function(m) {
m.ib_g = (Math.abs(Math.sin((0.1*m.time)))*0.2);
m.ib_b = (Math.abs(Math.sin((0.3*m.time)))*0.2);
m.ib_r = (Math.abs(Math.sin((0.7*m.time)))*0.2);
m.ob_b = Math.abs(Math.sin(((m.time*100)+m.time)));
m.ob_r = Math.abs(Math.sin(((m.time*512)+m.time)));
m.ob_g = Math.abs(Math.sin(((m.time*10)+m.time)));
m.ib_b = Math.abs(Math.sin(((m.time*10)+m.time)));
m.ib_r = Math.abs(Math.sin(((m.time*512)+m.time)));
m.ib_g = Math.abs(Math.sin(((m.time*100)+m.time)));
m.meanbass = (0.01*((m.meanbass*99)+m.bass));
m.meantreb = (0.01*((m.meantreb*99)+m.treb));
m.meanmid = (0.01*((m.meanmid*99)+m.mid));
m.bassdiff = ((m.bass-m.meanbass)*15);
m.trebdiff = ((m.treb-m.meantreb)*15);
m.middiff = ((m.mid-m.meanmid)*15);
m.bassdiff = (above(m.bassdiff, 0)*m.bassdiff);
m.trebdiff = (above(m.trebdiff, 0)*m.trebdiff);
m.middiff = (above(m.middiff, 0)*m.middiff);
m.ob_g = Math.min(1, Math.max(0, (0.2*m.trebdiff)));
m.ob_r = Math.min(1, Math.max(0, (0.2*m.middiff)));
m.ob_b = Math.min(1, Math.max(0, (0.2*m.bassdiff)));
m.volume = ((0.3*m.bass)+m.mid);
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.runmeanbass = div(((m.runmeanbass*2)+m.bass_att),3);
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = (((above(m.volume, 0.8)*above(m.bass_att, (m.runmeanbass*1.1)))*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.q1 = m.beat;
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.cx = Math.sin((((m.x*10)+m.time)+m.bass));
m.cy = Math.sin((((m.y*10)+m.time)+m.treb));
m.rot = (m.rot+0.012);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.279692,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.7,
			thick : 1.0,
			sep : 16.0,
			},
		'init_eqs' : function(m) {
m.t7 = 0;
m.t8 = 0;
m.t8 = m.time;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t7 = m.t8;
m.t8 = m.time;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+Math.sin(((m.sample*3)+(m.time*0.1))));
m.y = ((0.5+Math.sin((m.sample*94.23)))+(0.02*Math.sin((m.time*4.5))));
m.b = Math.abs(Math.sin(((m.sample*100)+m.time)));
m.r = Math.abs(Math.sin(((m.sample*512)+m.time)));
m.g = Math.abs(Math.sin(((m.sample*10)+m.time)));
		return m;
	},
		'init_eqs_str' : ('t8 = time;'),
		'frame_eqs_str' : ('t7 = t8;\n' + 't8 = time;'),
		'point_eqs_str' : ('x = 0.5 + sin(sample*3 + time*0.1);\n' + 'y = 0.5 + sin(sample*94.23) + 0.02*sin(time*4.5);\n' + 'b=abs(sin(sample*100+time));\n' + 'r=abs(sin(sample*512+time));\n' + 'g=abs(sin(sample*10+time));'),

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
			tex_ang : 5.78053,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.040593,
			additive : 0.0,
			border_a : 0.7,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.400001,
			r : 1.0,
			border_g : 1.0,
			rad : 0.230672,
			x : 0.5,
			y : 0.15,
			ang : 6.031858,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.meantreb = 0;
m.trebdiff = 0;
m.meanmid = 0;
m.meanbass = 0;
m.bassdiff = 0;
m.middiff = 0;
m.o = 0;

			m.rkeys = ['meantreb','meanmid','meanbass'];
			return m;
		},
		'frame_eqs' : function(m) {
m.meanbass = (0.01*((m.meanbass*99)+m.bass));
m.meantreb = (0.01*((m.meantreb*99)+m.treb));
m.meanmid = (0.01*((m.meanmid*99)+m.mid));
m.bassdiff = ((m.bass-m.meanbass)*15);
m.trebdiff = ((m.treb-m.meantreb)*15);
m.middiff = ((m.mid-m.meanmid)*15);
m.bassdiff = (above(m.bassdiff, 0)*m.bassdiff);
m.trebdiff = (above(m.trebdiff, 0)*m.trebdiff);
m.middiff = (above(m.middiff, 0)*m.middiff);
m.o = 1;
m.g = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.trebdiff)))));
m.r = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.middiff)))));
m.b = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.bassdiff)))));
m.g2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.trebdiff)))));
m.r2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.middiff)))));
m.b2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.bassdiff)))));
m.x = ((m.x+(Math.sin((m.time*0.7))*0.06))-(0.1*m.o));
m.y = ((m.y+(Math.sin((m.time*0.5))*0.06))+(0.7*m.o));
m.ang = Math.sin(m.time);
m.rad = ((m.rad-0.4)+(0.05*m.bass));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('meanbass = 0.01*(meanbass*99+bass);\n' + 'meantreb = 0.01*(meantreb*99+treb);\n' + 'meanmid = 0.01*(meanmid*99+mid);\n' + 'bassdiff = (bass - meanbass)*15;\n' + 'trebdiff = (treb - meantreb)*15;\n' + 'middiff = (mid - meanmid)*15;\n' + 'bassdiff = above(bassdiff,0)*bassdiff;\n' + 'trebdiff = above(trebdiff,0)*trebdiff;\n' + 'middiff = above(middiff,0)*middiff;\n' + 'o=1;\n' + 'g = abs(1*o-min(1,max(0,0.2*trebdiff)));\n' + 'r = abs(1*o-min(1,max(0,0.2*middiff)));\n' + 'b = abs(1*o-min(1,max(0,0.2*bassdiff)));\n' + 'g2 = abs(1*o-min(1,max(0,0.2*trebdiff)));\n' + 'r2 = abs(1*o-min(1,max(0,0.2*middiff)));\n' + 'b2 = abs(1*o-min(1,max(0,0.2*bassdiff)));\n' + 'x=x+sin(time*.7)*.06-.1*o;\n' + 'y=y+sin(time*.5)*.06+.7*o;\n' + 'ang =sin(time);\n' + 'rad=rad-.4+.05*bass;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.89,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.31,
			r : 1.0,
			border_g : 1.0,
			rad : 0.506271,
			x : 0.82,
			y : 0.22,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flag = 0;

			m.rkeys = ['flag'];
			return m;
		},
		'frame_eqs' : function(m) {
m.flag = Math.abs((m.flag-m.q1));
m.y = ifcond(m.flag, 0.8, 0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('flag = abs(flag-q1);\n' + 'y = if(flag,.8,.2);'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.599578,
			x : 0.18,
			y : 0.8,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flag = 0;

			m.rkeys = ['flag'];
			return m;
		},
		'frame_eqs' : function(m) {
m.flag = Math.abs((m.flag-m.q1));
m.y = ifcond(m.flag, 0.2, 0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('flag = abs(flag-q1);\n' + 'y = if(flag,.2,.8);'),

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
			tex_zoom : 0.01,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 0.230671,
			x : 0.56,
			y : 0.15,
			ang : 5.403541,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.meantreb = 0;
m.trebdiff = 0;
m.meanmid = 0;
m.meanbass = 0;
m.bassdiff = 0;
m.middiff = 0;
m.o = 0;

			m.rkeys = ['meantreb','meanmid','meanbass'];
			return m;
		},
		'frame_eqs' : function(m) {
m.meanbass = (0.01*((m.meanbass*99)+m.bass));
m.meantreb = (0.01*((m.meantreb*99)+m.treb));
m.meanmid = (0.01*((m.meanmid*99)+m.mid));
m.bassdiff = ((m.bass-m.meanbass)*15);
m.trebdiff = ((m.treb-m.meantreb)*15);
m.middiff = ((m.mid-m.meanmid)*15);
m.bassdiff = (above(m.bassdiff, 0)*m.bassdiff);
m.trebdiff = (above(m.trebdiff, 0)*m.trebdiff);
m.middiff = (above(m.middiff, 0)*m.middiff);
m.o = 0;
m.g = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.trebdiff)))));
m.r = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.middiff)))));
m.b = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.bassdiff)))));
m.g2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.trebdiff)))));
m.r2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.middiff)))));
m.b2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.bassdiff)))));
m.x = ((m.x+(Math.sin((m.time*0.7))*0.06))-(0.1*m.o));
m.y = ((m.y+(Math.sin((m.time*0.5))*0.06))+(0.7*m.o));
m.ang = Math.sin(m.time);
m.rad = ((m.rad-0.4)+(0.05*m.bass));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('meanbass = 0.01*(meanbass*99+bass);\n' + 'meantreb = 0.01*(meantreb*99+treb);\n' + 'meanmid = 0.01*(meanmid*99+mid);\n' + 'bassdiff = (bass - meanbass)*15;\n' + 'trebdiff = (treb - meantreb)*15;\n' + 'middiff = (mid - meanmid)*15;\n' + 'bassdiff = above(bassdiff,0)*bassdiff;\n' + 'trebdiff = above(trebdiff,0)*trebdiff;\n' + 'middiff = above(middiff,0)*middiff;\n' + 'o=0;\n' + 'g = abs(1*o-min(1,max(0,0.2*trebdiff)));\n' + 'r = abs(1*o-min(1,max(0,0.2*middiff)));\n' + 'b = abs(1*o-min(1,max(0,0.2*bassdiff)));\n' + 'g2 = abs(1*o-min(1,max(0,0.2*trebdiff)));\n' + 'r2 = abs(1*o-min(1,max(0,0.2*middiff)));\n' + 'b2 = abs(1*o-min(1,max(0,0.2*bassdiff)));\n' + 'x=x+sin(time*.7)*.06-.1*o;\n' + 'y=y+sin(time*.5)*.06+.7*o;\n' + 'ang =sin(time);\n' + 'rad=rad-.4+.05*bass;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('oldy=.4;'),
	'frame_eqs_str' : ('ib_g = abs(sin(0.1*time))*0.2;\n' + 'ib_b = abs(sin(0.3*time))*0.2;\n' + 'ib_r = abs(sin(0.7*time))*0.2;\n' + 'ob_b=abs(sin(time*100+time));\n' + 'ob_r=abs(sin(time*512+time));\n' + 'ob_g=abs(sin(time*10+time));\n' + 'ib_b=abs(sin(time*10+time));\n' + 'ib_r=abs(sin(time*512+time));\n' + 'ib_g=abs(sin(time*100+time));\n' + 'meanbass = 0.01*(meanbass*99+bass);\n' + 'meantreb = 0.01*(meantreb*99+treb);\n' + 'meanmid = 0.01*(meanmid*99+mid);\n' + 'bassdiff = (bass - meanbass)*15;\n' + 'trebdiff = (treb - meantreb)*15;\n' + 'middiff = (mid - meanmid)*15;\n' + 'bassdiff = above(bassdiff,0)*bassdiff;\n' + 'trebdiff = above(trebdiff,0)*trebdiff;\n' + 'middiff = above(middiff,0)*middiff;\n' + 'ob_g = min(1,max(0,0.2*trebdiff));\n' + 'ob_r = min(1,max(0,0.2*middiff));\n' + 'ob_b = min(1,max(0,0.2*bassdiff));\n' + 'volume = 0.3*bass+mid;\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'runmeanbass =(runmeanbass*2 + bass_att)/3;\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*above(bass_att,runmeanbass*1.1)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'q1 = beat;'),
	'pixel_eqs_str' : ('cx =sin(x*10+time+bass);\n' + 'cy =sin(y*10+time+treb);\n' + 'rot=rot+.012;'),
};

return pmap;
});