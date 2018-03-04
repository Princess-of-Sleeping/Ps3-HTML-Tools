
/* Do not ask questions about function names lol */

var id_titleid;
var id_output;

var version = "-ver.xml";
var a0_psn_np = "https://a0.ww.np.dl.playstation.net/tpl/np/";


function ScePageLoad(){

	id_titleid = document.getElementById("titleid");
	id_output = document.getElementById("output");

}

function SceInputCheck(){

	id_titleid.value = id_titleid.value.toUpperCase();

	if(id_titleid.value.length == 9){

		SceGameGetUpdatePkgUrl();

	}else{

		id_output.innerHTML = "<br/>";

	}

}

function SceGameGetUpdatePkgUrl(){

	var TitleId = id_titleid.value;

	var Ps3AndPspGameUpdatePkgUri = a0_psn_np + TitleId + "/" + TitleId + version;

	id_output.innerHTML = "<a href=\"" + Ps3AndPspGameUpdatePkgUri + "\">" + Ps3AndPspGameUpdatePkgUri + "</a>";

}




