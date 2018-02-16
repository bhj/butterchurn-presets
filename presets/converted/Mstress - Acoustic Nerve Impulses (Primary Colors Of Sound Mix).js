define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.34,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.572643,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.34,
		sy : 1.0,
		ib_size : 0.0,
		warp : 2.2E-5,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.999998,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.34,
		mv_b : 1.0,
		echo_zoom : 1.1003,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
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
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.34,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.300001,
		wave_mystery : 0.0,
		decay : 0.885,
		wave_a : 0.0033,
		ob_g : 0.34,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.34,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.24,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.meanbass_att = 0;
m.lastbeat = 0;
m.runmeanbass = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.oldy = 0.4;
		return m;
	},
	'frame_eqs' : function(m) {
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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.49338,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.6056,
			x : 0.5,
			y : 0.5,
			ang : 6.031858,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flag1 = 0;
m.flag = 0;

			m.rkeys = ['flag','flag1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.flag1 = Math.floor(Math.abs((m.flag1-m.q1)));
m.flag = Math.floor(Math.abs((m.flag-(m.q1*m.flag1))));
m.ang = ((m.ang+ifcond(m.flag, 0, -0.4))+((Math.abs(Math.sin(m.bass))*0.4)*ifcond(m.flag, 1, -1)));
m.x = (m.x+(Math.sin((m.time*0.7))*0.06));
m.y = (m.y+(Math.sin((m.time*0.5))*0.06));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('flag1=int(abs(flag1-q1));\n' + 'flag=int(abs(flag-q1*flag1));\n' + 'ang =ang +if(flag,0,-.4)+abs(sin(bass))*.4*if(flag,1,-1);\n' + 'x=x+sin(time*.7)*.06;\n' + 'y=y+sin(time*.5)*.06;'),

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
			x : 0.29,
			y : 0.66,
			ang : 5.403541,
			sides : 45.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.meanbass = 0;
m.bassdiff = 0;

			m.rkeys = ['meanbass'];
			return m;
		},
		'frame_eqs' : function(m) {
m.meanbass = (0.01*((m.meanbass*99)+m.bass));
m.bassdiff = ((m.bass-m.meanbass)*15);
m.bassdiff = (above(m.bassdiff, 0)*m.bassdiff);
m.g = Math.min(1, Math.max(0, (0.05*m.bassdiff)));
m.b = Math.min(1, Math.max(0, (0.2*m.bassdiff)));
m.r = Math.min(1, Math.max(0, (0.05*m.bassdiff)));
m.g2 = Math.min(1, Math.max(0, (0.025*m.bassdiff)));
m.b2 = Math.min(1, Math.max(0, (0.1*m.bassdiff)));
m.r2 = Math.min(1, Math.max(0, (0.025*m.bassdiff)));
m.x = (m.x+(Math.sin((m.time*0.7))*0.06));
m.y = (m.y+(Math.sin((m.time*0.5))*0.06));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('meanbass = 0.01*(meanbass*99+bass);\n' + 'bassdiff = (bass - meanbass)*15;\n' + 'bassdiff = above(bassdiff,0)*bassdiff;\n' + 'g = min(1,max(0,0.05*bassdiff));\n' + 'b = min(1,max(0,0.2*bassdiff));\n' + 'r = min(1,max(0,0.05*bassdiff));\n' + 'g2 = min(1,max(0,0.025*bassdiff));\n' + 'b2 = min(1,max(0,0.1*bassdiff));\n' + 'r2 = min(1,max(0,0.025*bassdiff));\n' + 'x=x+sin(time*.7)*.06;\n' + 'y=y+sin(time*.5)*.06;'),

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
			x : 0.75,
			y : 0.67,
			ang : 5.403541,
			sides : 45.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.meantreb = 0;
m.trebdiff = 0;

			m.rkeys = ['meantreb'];
			return m;
		},
		'frame_eqs' : function(m) {
m.meantreb = (0.01*((m.meantreb*99)+m.treb));
m.trebdiff = ((m.treb-m.meantreb)*15);
m.trebdiff = (above(m.trebdiff, 0)*m.trebdiff);
m.r = Math.min(1, Math.max(0, (0.2*m.trebdiff)));
m.g = Math.min(1, Math.max(0, (0.05*m.trebdiff)));
m.b = Math.min(1, Math.max(0, (0.05*m.trebdiff)));
m.r2 = Math.min(1, Math.max(0, (0.1*m.trebdiff)));
m.g2 = Math.min(1, Math.max(0, (0.025*m.trebdiff)));
m.b2 = Math.min(1, Math.max(0, (0.025*m.trebdiff)));
m.x = (m.x+(Math.sin((m.time*0.7))*0.06));
m.y = (m.y+(Math.sin((m.time*0.5))*0.06));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('meantreb = 0.01*(meantreb*99+treb);\n' + 'trebdiff = (treb - meantreb)*15;\n' + 'trebdiff = above(trebdiff,0)*trebdiff;\n' + 'r = min(1,max(0,0.2*trebdiff));\n' + 'g = min(1,max(0,0.05*trebdiff));\n' + 'b = min(1,max(0,0.05*trebdiff));\n' + 'r2 = min(1,max(0,0.1*trebdiff));\n' + 'g2 = min(1,max(0,0.025*trebdiff));\n' + 'b2 = min(1,max(0,0.025*trebdiff));\n' + 'x=x+sin(time*.7)*.06;\n' + 'y=y+sin(time*.5)*.06;'),

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
			y : 0.21,
			ang : 5.403541,
			sides : 45.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.meanmid = 0;
m.middiff = 0;

			m.rkeys = ['meanmid'];
			return m;
		},
		'frame_eqs' : function(m) {
m.meanmid = (0.01*((m.meanmid*99)+m.mid));
m.middiff = ((m.mid-m.meanmid)*15);
m.middiff = (above(m.middiff, 0)*m.middiff);
m.g = Math.min(1, Math.max(0, (0.2*m.middiff)));
m.r = Math.min(1, Math.max(0, (0.05*m.middiff)));
m.b = Math.min(1, Math.max(0, (0.05*m.middiff)));
m.g2 = Math.min(1, Math.max(0, (0.2*m.middiff)));
m.r2 = Math.min(1, Math.max(0, (0.025*m.middiff)));
m.b2 = Math.min(1, Math.max(0, (0.025*m.middiff)));
m.x = (m.x+(Math.sin((m.time*0.7))*0.06));
m.y = (m.y+(Math.sin((m.time*0.5))*0.06));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('meanmid = 0.01*(meanmid*99+mid);\n' + 'middiff = (mid - meanmid)*15;\n' + 'middiff = above(middiff,0)*middiff;\n' + 'g = min(1,max(0,0.2*middiff));\n' + 'r = min(1,max(0,0.05*middiff));\n' + 'b = min(1,max(0,0.05*middiff));\n' + 'g2 = min(1,max(0,0.2*middiff));\n' + 'r2 = min(1,max(0,0.025*middiff));\n' + 'b2 = min(1,max(0,0.025*middiff));\n' + 'x=x+sin(time*.7)*.06;\n' + 'y=y+sin(time*.5)*.06;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('oldy=.4;'),
	'frame_eqs_str' : ('volume = 0.3*bass+mid;\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'runmeanbass =(runmeanbass*2 + bass_att)/3;\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*above(bass_att,runmeanbass*1.1)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'q1 = beat;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});