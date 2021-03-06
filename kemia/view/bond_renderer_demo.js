	goog.require('kemia.view.SingleBondRenderer');
	goog.require('kemia.view.SingleUpBondRenderer');
	goog.require('kemia.view.SingleDownBondRenderer');
	goog.require('kemia.view.SingleUpOrDownBondRenderer');
	goog.require('kemia.view.DoubleBondRenderer');
	goog.require('kemia.view.TripleBondRenderer');
	goog.require('kemia.view.QuadrupleBondRenderer');
	goog.require('kemia.model.Atom');
	goog.require('kemia.model.Molecule');
	goog.require('kemia.model.Bond');
	goog.require('goog.events.EventType');
	goog.require('goog.dom');
	goog.require('goog.graphics');
	goog.require('kemia.graphics.AffineTransform');
	goog.require('goog.debug.Console');
	goog.require('kemia.graphics.ElementArray');
	goog.require('goog.Timer');

    
function initPage(){

	var c = new goog.debug.Console(); 
	c.setCapturing(true); 
	var element = goog.dom.getElement('container')
	var graphics = goog.graphics.createGraphics(element.clientWidth,
			element.clientHeight);
	var elements = kemia.graphics.ElementArray();
	
	graphics.render(element);

	var bondPath = new goog.graphics.Path();
	var sbr = new kemia.view.SingleBondRenderer(graphics);
	
	var trans = new kemia.graphics.AffineTransform(20,0,0,-20,0,0);
	var c1 = new kemia.model.Atom("C", 2, -2);
	var o1 = new kemia.model.Atom("O", 3, -3);
	var b = new kemia.model.Bond(c1, o1, kemia.model.Bond.ORDER.SINGLE);
	sbr.render(b, trans, bondPath, elements);
	
	
	var c0 = new kemia.model.Atom("C", 4, -3);
	var o0 = new kemia.model.Atom("O", 5, -2);
	var b0 = new kemia.model.Bond(c0, o0, kemia.model.Bond.ORDER.SINGLE);
	sbr.render(b0, trans, bondPath);
	sbr.highlightOn(b0);
	
	var mol2 = new kemia.model.Molecule();
	var c2 = new kemia.model.Atom("C", 5, -2);
	var o2 = new kemia.model.Atom("O", 6, -2);
	var b2 = new kemia.model.Bond(c2, o2, kemia.model.Bond.ORDER.DOUBLE);
	mol2.addBond(b2);
	trans = new kemia.graphics.AffineTransform(30,0,0,-30,0,0);
	var dbr = new kemia.view.DoubleBondRenderer(graphics);
	dbr.render(b2, trans, bondPath);
	
	var mol3 = new kemia.model.Molecule();
	var c3 = new kemia.model.Atom("C", 7, -2);
	var c4 = new kemia.model.Atom("C", 8, -2);
	var b3 = new kemia.model.Bond(c3, c4, kemia.model.Bond.ORDER.TRIPLE);
	mol3.addBond(b3);
	trans = new kemia.graphics.AffineTransform(40,0,0,-40,0,0);
	var tbr = new kemia.view.TripleBondRenderer( graphics);
	tbr.render(b3, trans, bondPath);
	
	var n = new kemia.model.Atom("N", 2, -4);
	var s = new kemia.model.Atom("S", 2, -5);
	var b4 = new kemia.model.Bond(n,s,kemia.model.Bond.ORDER.QUADRUPLE);
	trans = new kemia.graphics.AffineTransform(30,0,0,-30,0,0);
	var qbr = new kemia.view.QuadrupleBondRenderer( graphics);
	qbr.render(b4, trans, bondPath);
	
	var mol4 = new kemia.model.Molecule();
	var p = new kemia.model.Atom("P", 4, -4);
	var cl = new kemia.model.Atom("Cl", 4, -5); 
	var b5 = new kemia.model.Bond(p,cl, kemia.model.Bond.ORDER.SINGLE, kemia.model.Bond.STEREO.UP);

	mol4.addBond(b5);
	var sbur = new kemia.view.SingleUpBondRenderer( graphics);
	sbur.render(b5, trans, bondPath);


	var f = new kemia.model.Atom("F", 6, -4);
	var br = new kemia.model.Atom("Br", 6, -5);
	var b6 = new kemia.model.Bond(f,br, kemia.model.Bond.ORDER.SINGLE, kemia.model.Bond.STEREO.DOWN);
	mol4.addBond(b6);
	var sbdr = new kemia.view.SingleDownBondRenderer( graphics);
	sbdr.render(b6, trans, bondPath);
	
	var i = new kemia.model.Atom("I", 8, -4);
	var h = new kemia.model.Atom("H", 8, -5);
	var b7 = new kemia.model.Bond(i,h, kemia.model.Bond.ORDER.SINGLE, kemia.model.Bond.STEREO.UP_OR_DOWN);

	var sbudr = new kemia.view.SingleUpOrDownBondRenderer( graphics);
	sbudr.render(b7, trans, bondPath);
	
	
//	mol4.addBond(new kemia.model.Bond(p, cl));
//	mol4.addBond(new kemia.model.Bond(f, br));
//	mol4.addBond(new kemia.model.Bond(i,h));
	
//	r.render(n, trans, group);
//	r.render(s, trans, group);
//	r.render(p, trans, group);
//	r.render(cl, trans, group);
//	r.render(f, trans, group);
//	r.render(br, trans, group);
//	r.render(i, trans, group);
//	r.render(h, trans, group);

	var bondStroke = new goog.graphics.Stroke( 1, 'black');
	var bondFill = new goog.graphics.SolidFill( 'black');

 	// elements.add(graphics.drawPath(bondPath, bond// Stroke, bondFill));
 	// 	goog.Timer.callOnce(elements.clear(), 10000);
};
goog.events.listen(window, goog.events.EventType.LOAD, initPage);

