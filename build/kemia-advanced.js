function t(d){return function(){return this[d]}}var aa=this;function u(d,f,e){d=d.split(".");e=e||aa;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)if(!d.length&&f!==undefined)e[g]=f;else e=e[g]?e[g]:(e[g]={})}
function ba(d){var f=typeof d;if(f=="object")if(d){if(d instanceof Array||!(d instanceof Object)&&Object.prototype.toString.call(d)=="[object Array]"||typeof d.length=="number"&&typeof d.splice!="undefined"&&typeof d.propertyIsEnumerable!="undefined"&&!d.propertyIsEnumerable("splice"))return"array";if(!(d instanceof Object)&&(Object.prototype.toString.call(d)=="[object Function]"||typeof d.call!="undefined"&&typeof d.propertyIsEnumerable!="undefined"&&!d.propertyIsEnumerable("call")))return"function"}else return"null";
else if(f=="function"&&typeof d.call=="undefined")return"object";return f}function v(d){var f=ba(d);return f=="array"||f=="object"&&typeof d.length=="number"}function x(d){return typeof d=="string"}function ca(d){if(d.hasOwnProperty&&d.hasOwnProperty(y))return d[y];d[y]||(d[y]=++da);return d[y]}var y="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),da=0;
function ea(d,f){var e=f||aa;if(arguments.length>2){var g=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(j,g);return d.apply(e,j)}}else return function(){return d.apply(e,arguments)}};var z=Array.prototype,B=z.indexOf?function(d,f,e){return z.indexOf.call(d,f,e)}:function(d,f,e){e=e==null?0:e<0?Math.max(0,d.length+e):e;if(x(d)){if(!x(f)||f.length!=1)return-1;return d.indexOf(f,e)}for(e=e;e<d.length;e++)if(e in d&&d[e]===f)return e;return-1},C=z.forEach?function(d,f,e){z.forEach.call(d,f,e)}:function(d,f,e){for(var g=d.length,j=x(d)?d.split(""):d,h=0;h<g;h++)h in j&&f.call(e,j[h],h,d)},D=z.map?function(d,f,e){return z.map.call(d,f,e)}:function(d,f,e){for(var g=d.length,j=new Array(g),
h=x(d)?d.split(""):d,m=0;m<g;m++)if(m in h)j[m]=f.call(e,h[m],m,d);return j};function fa(d,f,e,g){if(d.reduce)return g?d.reduce(ea(f,g),e):d.reduce(f,e);var j=e;C(d,function(h,m){j=f.call(g,j,h,m,d)});return j}function ga(d,f,e){ha(d,e,0,f)}function E(d,f){f=B(d,f);var e;if(e=f>=0)F(d,f);return e}function F(d,f){return z.splice.call(d,f,1).length==1}function ha(d){return z.splice.apply(d,ia(arguments,1))}function ia(d,f,e){return arguments.length<=2?z.slice.call(d,f):z.slice.call(d,f,e)}
function ja(d,f,e){if(!v(d)||!v(f)||d.length!=f.length)return false;var g=d.length;e=e||ka;for(var j=0;j<g;j++)if(!e(d[j],f[j]))return false;return true}function la(d,f){return d>f?1:d<f?-1:0}function ka(d,f){return d===f}function G(d,f){for(var e=[],g=0;g<f;g++)e[g]=d;return e};function ma(d){var f=[],e=0;for(var g in d)f[e++]=d[g];return f};function na(d){if(typeof d.i=="function")return d.i();if(x(d))return d.split("");if(v(d)){for(var f=[],e=d.length,g=0;g<e;g++)f.push(d[g]);return f}return ma(d)};function H(d){this.l={};this.g=[];var f=arguments.length;if(f>1){if(f%2)throw Error("Uneven number of arguments");for(var e=0;e<f;e+=2)I(this,arguments[e],arguments[e+1])}else d&&this.da(d)}H.prototype.L=0;H.prototype.qa=0;H.prototype.$=t("L");H.prototype.i=function(){J(this);for(var d=[],f=0;f<this.g.length;f++)d.push(this.l[this.g[f]]);return d};H.prototype.remove=function(d){if(Object.prototype.hasOwnProperty.call(this.l,d)){delete this.l[d];this.L--;this.qa++;this.g.length>2*this.L&&J(this);return true}return false};
function J(d){if(d.L!=d.g.length){for(var f=0,e=0;f<d.g.length;){var g=d.g[f];if(Object.prototype.hasOwnProperty.call(d.l,g))d.g[e++]=g;f++}d.g.length=e}if(d.L!=d.g.length){var j={};for(e=f=0;f<d.g.length;){g=d.g[f];if(!Object.prototype.hasOwnProperty.call(j,g)){d.g[e++]=g;j[g]=1}f++}d.g.length=e}}function I(d,f,e){if(!Object.prototype.hasOwnProperty.call(d.l,f)){d.L++;d.g.push(f);d.qa++}d.l[f]=e}
H.prototype.da=function(d){var f;if(d instanceof H){J(d);f=d.g.concat();d=d.i()}else{f=[];var e=0;for(var g in d)f[e++]=g;f=f;d=ma(d)}for(e=0;e<f.length;e++)I(this,f[e],d[e])};function K(d){this.l=new H;d&&this.da(d)}function oa(d){var f=typeof d;return f=="object"&&d||f=="function"?"o"+ca(d):f.substr(0,1)+d}K.prototype.$=function(){return this.l.$()};K.prototype.add=function(d){I(this.l,oa(d),d)};K.prototype.da=function(d){d=na(d);for(var f=d.length,e=0;e<f;e++)this.add(d[e])};K.prototype.remove=function(d){return this.l.remove(oa(d))};K.prototype.i=function(){return this.l.i()};function pa(d,f){this.a=d;this.b=f;for(var e=f=d=0,g=this.a.length;e<g;e++){d+=this.a[e].J.x;f+=this.a[e].J.y}this.Oa=new L(d/this.a.length,f/this.a.length);this.ra=new Array(3)};function M(d){this.a=d}function qa(d){var f=d.a.length-1;return d.a.length>2&&d.a[0]==d.a[f]}
M.prototype.splice=function(d){var f;var e=d.a;f=this.a.length-1;var g=e.length-1;if(this.a[f]==e[0]||this.a[f]==e[g])f=this.a[f];else if(this.a[0]==e[0]||this.a[0]==e[g])f=this.a[0];else throw"Couldn't splice - no intersection";e=[];g=0;for(var j=this.a.length;g<j;g++)e.push(this.a[g]);this.a[0]==f&&e.reverse();if(d.a[0]==f){g=1;for(j=d.a.length;g<j;g++)e.push(d.a[g])}else for(g=d.a.length-2;g>=0;g--)e.push(d.a[g]);a:{d=1;for(f=e.length-1;d<f;d++)for(g=1;g<f;g++)if(d!=g)if(e[d]==e[g]){d=false;break a}d=
true}if(!d)return null;return new M(e)};function ra(d){this.v=[];this.a=[];for(var f=0,e=d.t();f<e;f++){bond=d.b[f];this.v.push(new M([bond.source,bond.target]))}f=0;for(e=d.a.length;f<e;f++)this.a.push(d.d(f))}
ra.prototype.remove=function(d,f){for(var e=[],g=0,j=this.v.length;g<j;g++){var h=this.v[g];if(qa(h))B(h.a,d)>=0&&e.push(h);else{var m=h.a.length-1;if(h.a[0]==d||h.a[m]==d)e.push(h)}}g=[];h=0;for(m=e.length;h<m;h++)qa(e[h])&&g.push(e[h]);h=0;for(m=g.length;h<m;h++){B(e,g[h])>=0&&E(e,g[h]);B(this.v,g[h])>=0&&E(this.v,g[h])}j=[];h=0;for(m=e.length;h<m;h++)for(var l=h+1;l<m;l++){var k=e[l].splice(e[h]);k!=null&&j.push(k)}h=0;for(m=e.length;h<m;h++)B(this.v,e[h])>=0&&E(this.v,e[h]);h=0;for(m=j.length;h<
m;h++)!(B(this.v,j[h])>=0)&&j[h].a.length<=f+1&&this.v.push(j[h]);E(this.a,d);return g};function sa(d){for(var f=[],e=0,g=d.length;e<g;e++){var j=d[e];j instanceof Array?f.push(sa(j)):f.push(j)}return f}function ta(d,f,e){if(d.length)d.push(f[0].concat(e[0]));else d[0]=f[0].concat(e[0])}function ua(d,f){return d.Cnum-f.Cnum}
function N(d,f,e,g){for(var j=0,h=f.length;j<h;j++){var m=f[j];if(d.length>=m.length){for(var l=true,k=0,n=m.length;k<n;k++)B(d,m[k])>=0||(l=false);if(l)return true}k=0;for(n=d.length;k<n;k++)B(m,d[k])>=0&&g[k]++}f=false;k=0;for(n=d.length;k<n;k++)if(g[d[k]]<e[d[k]]-1)f=true;if(f){k=0;for(n=d.length;k<n;k++)g[d[k]]++;return false}return true}function va(d,f){for(var e=[],g=0,j=d.length;g<j;g++){var h=f.b[d[g]],m=f.f(h.source);h=f.f(h.target);B(e,m)>=0||e.push(m);B(e,h)>=0||e.push(h)}return e}
function wa(d,f){for(var e=[d[0]],g=f.d(d[0]),j=0;d.length!=e.length;){j++;if(j>1E3)break;for(var h=1,m=d.length;h<m;h++){var l=f.d(e[e.length-1]),k=f.d(d[h]);if(!(B(e,d[h])>=0))if(f.h(l,k))e.push(d[h]);else f.h(g,k)&&ga(e,d[h],0)}}return e}
function O(d){var f=d.t()-d.a.length+1;if(!f)return[];var e;e=d.a.length;for(var g=[],j=0;j<e;j++){for(var h=[],m=0;m<e;m++)if(j==m)h.push(0);else d.h(d.d(j),d.d(m))?h.push(1):h.push(99999999);g.push(h)}j=[];for(h=0;h<e;h++){m=[];for(var l=0;l<e;l++){var k=d.h(d.d(h),d.d(l));k?m.push([[B(d.b,k)]]):m.push([])}j.push(m)}h=[];for(m=0;m<e;m++){l=[];for(k=0;k<e;k++)l.push([]);h.push(l)}for(m=0;m<e;m++)for(l=0;l<e;l++)for(k=0;k<e;k++){var n=g[l][k],q=g[l][m]+g[m][k],o=j[l][m],p=j[m][k];if(q!=1E8)if(n>q){h[l][k]=
n==q+1?sa(j[l][k]):[];g[l][k]=q;j[l][k]=[o[0].concat(p[0])]}else if(n==q)o.length&&p.length&&ta(j[l][k],o,p);else if(n==q-1)ta(h[l][k],o,p);else g[l][k]=g[l][k]}e={D:g,Pe1:j,Pe2:h};g=e.D;j=e.Pe1;h=e.Pe2;m=g.length;e=[];for(l=0;l<m;l++)for(k=0;k<m;k++)g[l][k]==0||j[l][k].length==1&&h[l][k].length==0||e.push({Cnum:h[l][k].length?2*(g[l][k]+0.5):2*g[l][k],Pe1:j[l][k],Pe2:h[l][k]});e.sort(ua);a:{g=[];j=[];h=0;for(m=d.a.length;h<m;h++)j.push(d.d(h).t());l=[];for(h=0;h<d.a.length;h++)l[h]=0;h=0;for(m=e.length;h<
m;h++){k=e[h];if(k.Cnum%2){n=0;for(q=k.Pe2.length;n<q;n++){o=o=k.Pe1[0].concat(k.Pe2[n]);p=va(o,d);if(o.length===p.length)N(p,g,j,l)||g.push(p);if(g.length==f){f=g;break a}}}else{n=0;for(q=k.Pe1.length-1;n<q;n++){o=o=k.Pe1[n].concat(k.Pe1[n+1]);p=va(o,d);if(o.length===p.length)N(p,g,j,l)||g.push(p);if(g.length==f){f=g;break a}}}}f=g}e=0;for(g=f.length;e<g;e++)f[e]=wa(f[e],d);return f}u("kemia.ring.SSSR.findRings",O,void 0);function xa(d,f){for(var e=[],g=0,j=d.length;g<j;g++)e.push(f.d(d[g]));d=[];g=0;for(j=e.length-1;g<j;g++){var h=f.h(e[g],e[g+1]);h!=null&&d.push(h)}h=f.h(e[0],e[e.length-1]);h!=null&&d.push(h);return new pa(e,d)}
function ya(d){if(!(d.t()-d.a.length+d.Z))return[];for(var f=0,e=d.a.length;f<e;f++)d.a[f].index=f;f=0;for(e=d.b.length;f<e;f++)d.b[f].index=f;if(e=d.a.length){f=G(false,e);e=G(false,e);var g=[],j=d.a[0];j.u=0;g.push(j);for(f[0]=true;;){if(!g.length)break;j=g[0];F(g,0);for(var h=j.b.i(),m=0,l=h.length;m<l;m++){var k=h[m],n=k.index;if(!e[n]){e[n]=true;var q=P(k,j);k=q.index;if(f[k]){k=[];if(j.u==q.u){k.push(j);k.push(q)}else{q.T=true;var o=q.M();n=0;for(var p=o.length;n<p;n++){var s=o[n];s.u==q.u-
1&&k.push(s)}}for(q=j.u;;){k[0].T=true;k[1].T=true;q--;o=k[0].M();n=0;for(p=o.length;n<p;n++)if(o[n].u==q){k[0]=o[n];break}o=k[1].M();n=0;for(p=o.length;n<p;n++)if(o[n].u==q){k[1]=o[n];break}if(k[0]==k[1]){k[0].T=true;break}}}else{q.u=j.u+1;f[k]=true;g.push(q)}}}}}f=[];j=d.a.length;e=G(false,j);g=G(false,j);j=G(-1,j);h=0;for(m=d.a.length;h<m;h++){k=d.a[h];if(!e[k.index])if(k.T){l=new R;p=[];p.push(k);e[0]=true;s=new S;s.ba=k.index;j[k.index]=0;for(l.w(s);;){if(!p.length)break;q=p[0];F(p,0);o=q.b.i();
k=0;for(n=o.length;k<n;k++){var w=o[k];s=w.index;if(!g[s]){g[s]=true;w=P(w,q);s=w.index;if(w.T){if(e[s]){s=d.h(q,w);var A=new T(l.a[j[q.index]],l.a[j[w.index]]);A.ba=s.index}else{e[s]=true;p.push(w);s=new S;s.ba=w.index;j[w.index]=l.a.length;l.w(s);w=d.h(q,w);A=new T(l.a[j[q.index]],s);A.ba=w.index}l.q(A)}}}}k=0;for(n=l.a.length;k<n;k++)l.a[k].index=k;k=0;for(n=l.b.length;k<n;k++)l.b[k].index=k;k=l.b.length-l.a.length+1;n=[];p=new ra(l);q=0;for(o=l.a.length;q<o;q++){s=p.remove(l.d(q),6);for(w=0;w<
s.length;w++){A=s[w].a;F(A,A.length-1);for(var Q=0,Pa=A.length;Q<Pa;Q++)A[Q]=A[Q];n.push(A)}}z.sort.call(n,la);if(n.length>=k){a:{p=[];q=[];o=0;for(s=l.a.length;o<s;o++)q.push(l.d(o).t());w=G(0,l.a.length);o=0;for(s=n.length;o<s;o++){A=n[o];if(!N(A,p,q,w)){p.push(A);if(p.length==k){p=p;break a}}}p=p}if(p.length<k)p=O(l)}else p=O(l);k=0;for(n=p.length;k<n;k++){q=p[k];o=0;for(s=q.length;o<s;o++)q[o]=l.a[q[o]].ba}k=0;for(l=p.length;k<l;k++)f.push(xa(p[k],d))}}return f}
u("kemia.ring.RingFinder.findRings",ya,void 0);var za={C:4,Si:4,N:3,P:3,O:2,S:2,H:1};function L(d,f){this.x=d!==undefined?d:0;this.y=f!==undefined?f:0}L.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function S(d,f,e,g,j,h){this.e=d!==undefined?d:"C";this.J=new L(f!==undefined?f:0,e!==undefined?e:0);this.b=new K;this.r=g!==undefined?g:0;this.ea=h!==undefined?h:0;this.z=j!==undefined?j:false;this.Ia=null;this.ra=new Array(3)}u("kemia.model.Atom",S,void 0);S.prototype.ta=t("e");u("kemia.model.Atom.prototype.getSymbol",S.prototype.ta,void 0);S.prototype.sa=t("r");u("kemia.model.Atom.prototype.getCharge",S.prototype.sa,void 0);S.prototype.t=function(){return this.b.$()};
S.prototype.va=function(){var d=za[this.e],f=this.b.i();f=fa(f,function(g,j){return g+j.G},0);var e=0;if(d)e=d-f+this.r;return e};u("kemia.model.Atom.prototype.hydrogenCount",S.prototype.va,void 0);S.prototype.M=function(){for(var d=this.b.i(),f=[],e=0,g=d.length;e<g;e++)f.push(P(d[e],this));return f};function R(d){this.b=[];this.a=[];this.name=d?d:"";this.ca=[];this.na=true;this.k=[];this.Z=0}u("kemia.model.Molecule",R,void 0);R.prototype.q=function(d){var f=this.f(d.source),e=this.f(d.target);if(this.k[f]!=this.k[e]){var g;if(this.k[f]<this.k[e]){f=this.k[f];g=this.k[e]}else{g=this.k[f];f=this.k[e]}this.Z--;e=0;for(var j=this.a.length;e<j;e++)if(this.k[e]==f)this.k[e]=g}this.b.push(d);d.source.b.add(d);d.target.b.add(d);d.ma=this};u("kemia.model.Molecule.prototype.addBond",R.prototype.q,void 0);
R.prototype.d=function(d){return this.a[d]};u("kemia.model.Molecule.prototype.getAtom",R.prototype.d,void 0);R.prototype.h=function(d,f){for(var e=d.b.i(),g=0,j=e.length;g<j;g++){var h=e[g];if(P(h,d)==f)return h}return null};R.prototype.f=function(d){return B(this.a,d)};R.prototype.la=function(){return this.a.length};u("kemia.model.Molecule.prototype.countAtoms",R.prototype.la,void 0);R.prototype.t=function(){return this.b.length};u("kemia.model.Molecule.prototype.countBonds",R.prototype.t,void 0);
R.prototype.w=function(d){var f=this.a.length;this.Z++;this.k[f]=this.Z;this.a.push(d);d.ma=this};u("kemia.model.Molecule.prototype.addAtom",R.prototype.w,void 0);function Aa(d){if(d.na){d.na=false;d.ca=ya(d)}return d.ca}R.prototype.toString=function(){return D(this.a,function(d){return d.e+d.index+d.J.toString()}).toString()};function U(){this.aa="";this.ia=[];this.ha=[];this.Ea=[];this.Ka=[];this.Ha=this.Ma=""}U.prototype.getHeader=t("aa");u("kemia.model.Reaction.prototype.getHeader",U.prototype.getHeader,void 0);function T(d,f,e,g,j,h){this.source=d;this.target=f;this.G=e!==undefined?e:V;this.m=g!==undefined?g:Ba;this.z=j!==undefined?j:false;this.ma=h!==undefined?h:null}u("kemia.model.Bond",T,void 0);function P(d,f){if(f===d.source)return d.target;if(f===d.target)return d.source;return null}var V=1,Ba=10;function Ca(d){d=String(d);if(/^\s*$/.test(d)?false:/^[\],:{}\s\u2028\u2029]*$/.test(d.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+d+")")}catch(f){}throw Error("Invalid JSON string: "+d);}function Da(){}function Ea(d,f){var e=[];W(d,f,e);return e.join("")}
function W(d,f,e){switch(typeof f){case "string":Fa(d,f,e);break;case "number":e.push(isFinite(f)&&!isNaN(f)?f:"null");break;case "boolean":e.push(f);break;case "undefined":e.push("null");break;case "object":if(f==null){e.push("null");break}if(ba(f)=="array"){var g=f.length;e.push("[");for(var j="",h=0;h<g;h++){e.push(j);W(d,f[h],e);j=","}e.push("]");break}e.push("{");g="";for(j in f)if(f.hasOwnProperty(j)){h=f[j];if(typeof h!="function"){e.push(g);Fa(d,j,e);e.push(":");W(d,h,e);g=","}}e.push("}");
break;case "function":break;default:throw Error("Unknown type: "+typeof f);}}var X={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},Ga=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Fa(d,f,e){e.push('"',f.replace(Ga,function(g){if(g in X)return X[g];var j=g.charCodeAt(0),h="\\u";if(j<16)h+="000";else if(j<256)h+="00";else if(j<4096)h+="0";return X[g]=h+j.toString(16)}),'"')};function Ha(d){if(d.G==V)return"SINGLE_BOND";if(d.G==2)return"DOUBLE_BOND";if(d.G==3)return"TRIPLE_BOND";if(d.G==4)return"QUADRUPLE_BOND";throw new Error("Invalid bond type ["+d.toString()+"]");}function Ia(d){if(d.m==11)return"SINGLE_BOND_UP";if(d.m==13)return"SINGLE_BOND_DOWN";if(d.m==12)return"SINGLE_BOND_UP_OR_DOWN";return"NOT_STEREO"}
function Ja(d,f,e,g){switch(d){case "SINGLE_BOND":switch(f){case "NOT_STEREO":return new T(e,g);case "SINGLE_BOND_UP":return new T(e,g,V,11);case "SINGLE_BOND_UP_OR_DOWN":return new T(e,g,V,12);case "SINGLE_BOND_DOWN":return new T(e,g,V,13);default:throw new Error("invalid bond type/stereo ["+d+"]/["+f+"]");}case "DOUBLE_BOND":return new T(e,g,2);case "TRIPLE_BOND":return new T(e,g,3);case "QUADRUPLE_BOND":return new T(e,g,4);case "AROMATIC":return new T(e,g,undefined,undefined,true);case "SINGLE_OR_DOUBLE":case "SINGLE_OR_AROMATIC":case "DOUBLE_OR_AROMATIC":case "ANY":default:throw new Error("invalid bond type/stereo ["+
d+"]/["+f+"]");}}function Ka(d){d=d.constructor==String?Ca(d):d;var f=new R;f.name=d.name;C(d.atoms,function(e){f.w(new S(e.symbol,e.coord.x,e.coord.y,e.charge))});C(d.bondindex,function(e){f.q(Ja(e.type,e.stereo,f.d(e.source),f.d(e.target)))});return f}u("kemia.io.json.readMolecule",Ka,void 0);u("kemia.io.json.writeMolecule",function(d){return Ea(new Da,La(d))},void 0);
function La(d){var f=D(d.a,function(g){return{e:g.e,J:{x:g.J.x,y:g.J.y},r:g.r}}),e=D(d.b,function(g){var j=Ha(g),h=Ia(g);return{source:d.f(g.source),target:d.f(g.target),type:j,m:h}});return{name:d.name,a:f,Fa:e}}u("kemia.io.json.readReaction",function(d){d=d.constructor==String?Ca(d):d;var f=new U;f.aa=d.header;C(d.reactants,function(e){e=Ka(e);f.ia.push(e);e.Aa=f});C(d.products,function(e){e=Ka(e);f.ha.push(e);e.Aa=f});return f},void 0);
function Ma(d){var f=d.aa,e=D(d.ia,La);d=D(d.ha,La);return{aa:f,ia:e,ha:d}}u("kemia.io.json.writeReaction",function(d){return Ea(new Da,Ma(d))},void 0);var Na=3;Na=3;
function Oa(d,f,e,g){switch(d){case 1:switch(f){case 0:return new T(e,g);case 1:return new T(e,g,V,11);case 4:return new T(e,g,V,12);case 6:return new T(e,g,V,13);default:throw new Error("invalid bond type/stereo ["+d+"]/["+f+"]");}case 2:return new T(e,g,2);case Na:return new T(e,g,3);case 4:d=new T(e,g);d.z=true;return d;case 5:throw new Error("type not implemented ["+d+"]");case 6:throw new Error("type not implemented ["+d+"]");case 7:throw new Error("type not implemented ["+d+"]");case 8:throw new Error("type not implemented ["+
d+"]");default:throw new Error("invalid bond type/stereo ["+d+"]/["+f+"]");}}
function Qa(d){d=d.split(d.indexOf("\r\n")>0?"\r\n":"\n");for(var f=new R(d[0]),e=parseInt(d[3].substr(0,3),10),g=parseInt(d[3].substr(3,3),10),j=1;j<=e;j++){var h=d[j+3],m=h.substr(30,4).replace(/(^\s*)|(\s*$)/g,""),l=parseFloat(h.substr(0,10)),k=parseFloat(h.substr(10,10));h=parseInt(h.substr(36,3),10);var n=0;if(h!=0)if(h==1)n=3;else if(h==2)n=2;else if(h==3)n=1;else if(h!=4)if(h==5)n=-1;else if(h==6)n=-2;else if(h==7)n=-3;h=new S(m,l,k,n);f.w(h)}for(j=1;j<=g;j++){h=d[j+3+e];n=f.d(parseInt(h.substr(0,
3),10)-1);m=f.d(parseInt(h.substr(3,3),10)-1);h=Oa(parseInt(h.substr(6,3),10),parseInt(h.substr(9,3),10),n,m);f.q(h)}j=4+e+g;e=d.length;for(g=false;;){h=d[j++];if(j==e||h.indexOf("M  END")>=0)break;if(h.indexOf("M  CHG")>=0){if(!g){n=0;for(g=f.a.length;n<g;n++)f.d(n).r=0;g=true}m=parseInt(h.substr(6,3),10);for(l=0;l<m;l++){k=parseInt(h.substr(10+8*l,3),10);n=parseInt(h.substr(14+8*l,3),10);f.d(k-1).r=n}}}return f}u("kemia.io.mdl.readMolfile",Qa,void 0);u("kemia.io.mdl.readMolfile",Qa,void 0);function Ra(d,f,e){this.type=d;this.j=f;this.Q=e;this.ca=Aa(e);this.A=[];this.R=[];this.p=[]};function Y(d){this.j=d}u("kemia.query.DFSMapper",Y,void 0);function Sa(d,f){if(d.A.length===d.j.a.length){for(var e=new H,g=0,j=d.A.length;g<j;g++)I(e,d.j.f(d.A[g]),d.Q.f(d.R[g]));if(d.type===1){d=e.i();d.sort(function(l,k){return l-k});var h=true;g=0;for(j=f.length;g<j;g++){var m=f[g].i();m.sort(function(l,k){return l-k});if(ja(d,m))h=false}h&&f.push(e)}else f.push(e)}}
function Ta(d,f,e,g){for(var j=f.M(),h=e.M(),m=[],l=0,k=j.length;l<k;l++)for(var n=j[l],q=0,o=h.length;q<o;q++)m.push({za:f,pa:n,ya:e,oa:h[q]});for(d.p.length?d.p.push(d.p[d.p.length-1].concat(m)):d.p.push(m);d.p[d.p.length-1].length;){f=d.p[d.p.length-1].pop();m=f.za;h=f.ya;e=f.pa;j=f.oa;if(B(d.A,e)!==-1)e=false;else if(B(d.R,j)!==-1)e=false;else if(e.X(j,d.Q,d.ca)){m=d.j.h(m,e);h=d.Q.h(h,j);if(m.X(h,d.Q)){d.A.push(e);d.R.push(j);Sa(d,g);e=true}else e=false}else e=false;if(e){Ta(d,f.pa,f.oa,g);d.A.pop();
d.R.pop();d.p.pop()}}}Y.prototype.xa=function(d){for(var f=[],e=this.j.d(0),g=0,j=d.a.length;g<j;g++){var h=new Ra(1,this.j,d),m=d.d(g);if(e.X(m))if(this.j.a.length>1){h.A.push(e);h.R.push(m);Ta(h,e,m,f)}else{var l=new H;I(l,h.j.f(e),h.Q.f(m));f.push(l)}}return f};u("kemia.query.DFSMapper.prototype.mapUnique",Y.prototype.xa,void 0);H.prototype.getCount=H.prototype.$;
Y.prototype.wa=function(d){for(var f=[],e=this.j.d(0),g=0,j=d.a.length;g<j;g++){var h=new Ra(0,this.j,d),m=d.d(g);if(e.X(m)){if(this.j.a.length>1){h.A.push(e);h.R.push(m);Ta(h,e,m,f)}else{d=new H;I(d,h.j.f(e),h.Q.f(m));return d}if(f.length)return f[0]}}return new H};u("kemia.query.DFSMapper.prototype.mapFirst",Y.prototype.wa,void 0);var Ua=new RegExp(/\[[^[]+\]|Br|B|Cl|C|N|F|O|P]|S|c|n|o|s|-|=|#|%[0-9][0-9]|[0-9]|\(|\)|./g),Va=new RegExp(/^\[([0-9]*)([A-Z][a-z]?|c|n|o|se|s|as)(@|@@)?(H)?([0-9])?([+-][\d]?)?\]$/),Wa=["C","c","N","n","O","o","S","s","P","F","Br","Cl","I","B"],Xa=["c","n","o","s","as","se"];
function Ya(d){for(var f=d.match(Ua),e=new R(d),g=0,j,h="NONE",m=[],l=[],k="",n=[],q=0;q<f.length;q++){var o=f[q];if(o!=".")if(o=="(")m.push(j);else if(o==")")if(m.length)j=m.pop();else k=" unbalanced parens";else if(o=="-")h="-";else if(o=="=")h="=";else if(o=="#")h="#";else if(o=="$")h="$";else if(o==":")h=":";else if(o[0]=="%"){ringid=parseInt(o[1]+o[2],10);if(ring_atom=l[ringid]){e.q(Za(h,j,ring_atom));h="NONE";l[ringid]=null}else l[ringid]=j}else if(o!="/")if(o!="\\")if(isNaN(ringid=parseInt(o,
10))){var p={ea:null,symbol:null,m:"NONE",ua:null,r:null,z:false,ka:false},s=Va.exec(o);if(s){p.ea=s[1];if($a[s[2]])p.e=s[2];if(s[3]=="@"||s[3]=="@@"){p.m=s[3];if(s[4]=="H")p.ka=true}else p.m="NONE";if(s[4]=="H")p.ua=s[5]?s[5]:1;p.r=s[6]=="+"?1:s[6]=="-"?-1:parseInt(s[6],10)}else if(B(Wa,o)>=0)p.e=o;if(B(Xa,p.e)>=0){p.z=true;p.e=p.e.length==1?p.e.toUpperCase():p.e[0].toUpperCase()+p.e[1]}smi_atom=p;if(smi_atom.e){g+=1;o=new S(smi_atom.e,0,0,smi_atom.r,smi_atom.z,smi_atom.ea);if(j){e.q(Za(h,j,o));
h="NONE"}e.w(o);if(smi_atom.m!="NONE"){n.push(e.f(o));n.push(smi_atom.m);n.push(smi_atom.ka)}j=o}else k=" unknown atom "+o}else if(ring_atom=l[ringid]){e.q(Za(h,j,ring_atom));h="NONE";l[ringid]=null}else l[ringid]=j;if(k)throw new Error(d+k);}ab(e,n);if(m.length)throw new Error(smi+" unbalanced parens");for(d=0;d<l.length;++d)if(l[d])throw new Error(smi+" unclosed rings");if(h!="NONE")throw new Error(smi+" unpaired bond "+h);return e}u("kemia.io.smiles.SmilesParser.parse",Ya,void 0);
function Za(d,f,e){var g=d;if(d=="NONE")g=f.z&&e.z?":":"-";switch(g){case "-":return new T(f,e,V);case "=":return new T(f,e,2);case "#":return new T(f,e,3);case ":":d=new T(f,e);d.z=true;return d;case "~":default:throw new Error("invalid bond type/stereo ["+d+"]/["+stereo+"]");}}
function ab(d,f){c=0;for(centers=f.length;c<centers;c++){var e=d.d(f[c]);if(e!=undefined){var g=f[++c];++c;var j=[],h=0,m=null;C(d.a,function(k){bond_=d.h(e,k);if(bond_!=null&&bond_!=undefined){if(bond_.source!=e){bond_.source=e;bond_.target=k}h++;a:{k=bond_;rings=Aa(d);r=0;for(ringCount=rings.length;r<ringCount;r++){b=0;for(bondCount=rings[r].b.length;b<bondCount;b++)if(k==rings[r].b[b]){k=true;break a}}k=false}k||j.push(bond_)}});var l=j.length;if((h==3||h==4)&&l>0){bondidx=0;if(h==3&&l>1||h==4&&
l>2)bondidx=1;m=j[bondidx];m.m=g=="@"?11:13}if(h==4&&l>1){bondidx=1;if(l==4)bondidx=3;else if(l==4)bondidx=2;m=j[bondidx];m.m=g=="@"?13:11}}}}
var $a={H:{number:1,name:"Hydrogen"},He:{number:2,name:"Helium"},Li:{number:3,name:"Lithium"},Be:{number:4,name:"Beryllium"},B:{number:5,name:"Boron"},C:{number:6,name:"Carbon"},c:{number:6,name:"Carbon"},N:{number:7,name:"Nitrogen"},n:{number:7,name:"Nitrogen"},O:{number:8,name:"Oxygen"},o:{number:8,name:"Oxygen"},F:{number:9,name:"Fluorine"},Ne:{number:10,name:"Neon"},Na:{number:11,name:"Sodium"},Mg:{number:12,name:"Magnesium"},Al:{number:13,name:"Aluminium"},Si:{number:14,name:"Silicon"},P:{number:15,
name:"Phosphorus"},S:{number:16,name:"Sulfur"},s:{number:16,name:"Sulfur"},Cl:{number:17,name:"Chlorine"},Ar:{number:18,name:"Argon"},K:{number:19,name:"Potassium"},Ca:{number:20,name:"Calcium"},Sc:{number:21,name:"Scandium"},Ti:{number:22,name:"Titanium"},V:{number:23,name:"Vanadium"},Cr:{number:24,name:"Chromium"},Mn:{number:25,name:"Manganese"},Fe:{number:26,name:"Iron"},Co:{number:27,name:"Cobalt"},Ni:{number:28,name:"Nickel"},Cu:{number:29,name:"Copper"},Zn:{number:30,name:"Zinc"},Ga:{number:31,
name:"Gallium"},Ge:{number:32,name:"Germanium"},As:{number:33,name:"Arsenic"},as:{number:33,name:"Arsenic"},Se:{number:34,name:"Selenium"},se:{number:34,name:"Selenium"},Br:{number:35,name:"Bromine"},Kr:{number:36,name:"Krypton"},Rb:{number:37,name:"Rubidium"},Sr:{number:38,name:"Strontium"},Y:{number:39,name:"Yttrium"},Zr:{number:40,name:"Zirconium"},Nb:{number:41,name:"Niobium"},Mo:{number:42,name:"Molybdenum"},Tc:{number:43,name:"Technetium"},Ru:{number:44,name:"Ruthenium"},Rh:{number:45,name:"Rhodium"},
Pd:{number:46,name:"Palladium"},Ag:{number:47,name:"Silver"},Cd:{number:48,name:"Cadmium"},In:{number:49,name:"Indium"},Sn:{number:50,name:"Tin"},Sb:{number:51,name:"Antimony"},Te:{number:52,name:"Tellurium"},I:{number:53,name:"Iodine"},Xe:{number:54,name:"Xenon"},Cs:{number:55,name:"Caesium"},Ba:{number:56,name:"Barium"},La:{number:57,name:"Lanthanum"},Ce:{number:58,name:"Cerium"},Pr:{number:59,name:"Praseodymium"},Nd:{number:60,name:"Neodymium"},Pm:{number:61,name:"Promethium"},Sm:{number:62,name:"Samarium"},
Eu:{number:63,name:"Europium"},Gd:{number:64,name:"Gadolinium"},Tb:{number:65,name:"Terbium"},Dy:{number:66,name:"Dysprosium"},Ho:{number:67,name:"Holmium"},Er:{number:68,name:"Erbium"},Tm:{number:69,name:"Thulium"},Yb:{number:70,name:"Ytterbium"},Lu:{number:71,name:"Lutetium"},Hf:{number:72,name:"Hafnium"},Ta:{number:73,name:"Tantalum"},W:{number:74,name:"Tungsten"},Re:{number:75,name:"Rhenium"},Os:{number:76,name:"Osmium"},Ir:{number:77,name:"Iridium"},Pt:{number:78,name:"Platinum"},Au:{number:79,
name:"Gold"},Hg:{number:80,name:"Mercury"},Tl:{number:81,name:"Thallium"},Pb:{number:82,name:"Lead"},Bi:{number:83,name:"Bismuth"},Po:{number:84,name:"Polonium"},At:{number:85,name:"Astatine"},Rn:{number:86,name:"Radon"},Fr:{number:87,name:"Francium"},Ra:{number:88,name:"Radium"},Ac:{number:89,name:"Actinium"},Th:{number:90,name:"Thorium"},Pa:{number:91,name:"Protactinium"},U:{number:92,name:"Uranium"},Np:{number:93,name:"Neptunium"},Pu:{number:94,name:"Plutonium"},Am:{number:95,name:"Americium"},
Cm:{number:96,name:"Curium"},Bk:{number:97,name:"Berkelium"},Cf:{number:98,name:"Californium"},Es:{number:99,name:"Einsteinium"},Fm:{number:100,name:"Fermium"},Md:{number:101,name:"Mendelevium"},No:{number:102,name:"Nobelium"},Lr:{number:103,name:"Lawrencium"},Rf:{number:104,name:"Rutherfordium"},Db:{number:105,name:"Dubnium"},Sg:{number:106,name:"Seaborgium"},Bh:{number:107,name:"Bohrium"},Hs:{number:108,name:"Hassium"},Mt:{number:109,name:"Meitnerium"},Ds:{number:110,name:"Darmstadtium"},Rg:{number:111,
name:"Roentgenium"},Cn:{number:112,name:"Copernicium"}};function Z(){this.a=[];this.b=[];this.Ja=false}Z.prototype.la=function(){return this.a.length};Z.prototype.f=function(d){return B(this.a,d)};Z.prototype.d=function(d){return this.a[d]};Z.prototype.w=function(d){this.a.push(d)};Z.prototype.q=function(d){d.source.fa.push(d.target);d.target.fa.push(d.source);this.b.push(d)};Z.prototype.h=function(d,f){for(var e=0,g=this.b.length;e<g;e++){var j=this.b[e];if(d===j.source&&f===j.target||f===j.source&&d===j.target)return j}return null};function bb(){this.ja=[];this.Da=0;this.fa=[]}bb.prototype.X=function(d){var f=true;if(this.ja.length)if(B(this.ja,d.e)===-1)f=false;d=this.Da<=d.t();return f&&d};bb.prototype.M=t("fa");function cb(d,f){this.ga=[];this.source=d;this.target=f}cb.prototype.X=function(d){if(!this.ga.length)return true;if(B(this.ga,d.G)!==-1)return true;return false};function $(){}u("kemia.query.MoleculeCompiler",$,void 0);$.prototype.compile=function(d){for(var f=new Z,e=0,g=d.a.length;e<g;e++){var j=new bb;j.ja.push(d.d(e).e);f.w(j)}e=0;for(g=d.t();e<g;e++){j=d.b[e];var h=f.d(d.f(j.source)),m=f.d(d.f(j.target));h=new cb(h,m);h.ga.push(j.G);f.q(h)}return f};u("kemia.query.MoleculeCompiler.prototype.compile",$.prototype.compile,void 0);function db(){}u("kemia.query.SmilesCompiler",db,void 0);db.prototype.compile=function(d){d=Ya(d);return(new $).compile(d)};u("kemia.query.SmilesCompiler.prototype.compile",db.prototype.compile,void 0);