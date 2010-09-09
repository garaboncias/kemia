goog.require('goog.testing.jsunit');
goog.require('kemia.io.json');
goog.require('goog.json.Serializer');

var rxn;
var mol;
function setUp() {
}

function test0ReadMolecule() {
	var mol = kemia.io.json.readMolecule(jmol);
	assertEquals('test', mol.name);
	assertEquals(26, mol.countAtoms());
	assertEquals(27, mol.countBonds());

	// test the string representation
	// var str = goog.json.Serializer.serialize(mol);
	// mol = goog.json.unsafeParse( str );
	// assertEquals(mol.name,"test");
	// assertEquals(mol.countAtoms(), 26);
	// assertEquals(mol.countBonds(), 27);
}

function testReadMoleculeAromatic() {
	mol = kemia.io.json.readMolecule(jmol2);
	assertEquals(mol.name, "test");
	assertEquals(mol.countAtoms(), 26);
	assertEquals(mol.countBonds(), 27);
}

function test1ExportMol() {
	mol = kemia.io.json.readMolecule(jmol);
	jmolstr = kemia.io.json.writeMolecule(mol);
	assertEquals(2856, jmolstr.length);
	// test the string representation
	var mol = kemia.io.json.readMolecule(JSON.stringify(jmol));
	jmolstr = kemia.io.json.writeMolecule(mol);
	assertEquals(2856, jmolstr.length);
}

function test2ImportReaction() {
	rxn = kemia.io.json.readReaction(jreaction);
	assertEquals("3-component UGI", rxn.getHeader());
	assertEquals(rxn.reactants.length, 3);
	assertEquals(rxn.reactants[1].name, "isocyanoethane");
	assertEquals(rxn.reactants[1].countAtoms(), 4);
	assertEquals(rxn.products[0].countBonds(), 15);
	assertEquals(rxn.products.length, 1);
	// test the string representation
	rxn = kemia.io.json.readReaction(JSON.stringify(jreaction));
	assertEquals(rxn.header, "3-component UGI");
	assertEquals(rxn.reactants.length, 3);
	assertEquals(rxn.reactants[1].name, "isocyanoethane");
	assertEquals(rxn.reactants[1].countAtoms(), 4);
	assertEquals(rxn.products[0].countBonds(), 15);
	assertEquals(rxn.products.length, 1);
}

function test3ExportReaction() {
	rxn = kemia.io.json.readReaction(jreaction);
	var jrxnstr = kemia.io.json.writeReaction(rxn);
	assertEquals(3908, jrxnstr.length);
	// test the string representation
	var rxn = kemia.io.json.readReaction(JSON.stringify(jreaction));
	var jrxnstr = kemia.io.json.writeReaction(rxn);
	assertEquals(3908, jrxnstr.length);

}

function test4ReactionToJson() {
	var rxn = kemia.io.json.readReaction(reactionDrawing);
	var rxn_json = kemia.io.json.reactionToJson(rxn);
	assertEquals(rxn.reactants.length, rxn_json.reactants.length);
	assertEquals(rxn.products.length, rxn_json.products.length);
	assertEquals(rxn.reactants[0].countAtoms(),
			rxn_json.reactants[0].atoms.length);
};