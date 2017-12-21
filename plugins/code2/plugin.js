tinymce.PluginManager.add("code2",function(e){	
	kod003= "Download template files, extract them.<br>Prepare your page and press 'Prepare Download Code' button<br>Copy code to html file and put it to root of TEMPLATE_FILES folder.<br>Open html page with Firefox,Chrome etc.<br>This file is portable, you can copy TEMPLATE_FILES folder to server or different computer.<br><a href='plugins/code2/TEMPLATE_FILES.tar.gz' style='text-decoration:none;'><button type='submit' id='downloadtemplate'>Download Template Files</button></a><br><br>You can download all files and you can work your local computer, press 'Download Workspace' button.<br><a href='plugins/code2/workspace.tar.gz' style='text-decoration:none;'><button type='submit' id='downloadworkspace'>Download Workspace</button></a><br><br>Code2 plugin helps understanding the code. You can not change the code with code2 plugin if you aren't an advanced user. If you wish change the code you must use Tools-Source Code from Menu or Source Code button.<br><br>Source Code button is useful for exit from any html element. For example press 'source-code' button and write 'a' or any character outside of the tags. You are in a new 'p' tag as your default setting.<br><br>Undo and Redo buttons are very useful. You can take back your last action easily or you can redo your last action.<br><br>You can change the favicon. Prepare a favicon.png as 16x16 pixels and put it inside TEMPLATE_FILES folder(delete old one).<br><br>Some w3css2 codes works only inside TEMPLATE_FILES folder.(Works Only At Page & Works Only At Page2)<br><br>You can check <a href='https://www.fullportal.org/ENGLISH/WEBDESIGN/tinymce/index.html'>www.fullportal.org/ENGLISH/WEBDESIGN/tinymce/index.html</a> for new editons.<br><br>";
// codes to html - start
	function vv1(){	kod233= '<div class="w3-card w3-green" id="kod_div"><span style="font-size: 18pt;">&nbsp;</span><button type="submit" id="button11" class="btn11" data-clipboard-text="denemeler">Prepare Download Code</button><button type="submit" id="code2button" >Source Code</button><button type="submit" id="hidebutton" >Hide Code</button><button type="submit" id="INFO">Usage INFO</button><div class="w3-panel w3-pale-blue w3-leftbar w3-border-blue" ><span id="anakod">' + kod003 + '</span></div></div>';		
	var div1 = document.createElement("div");
	div1.setAttribute("id","div1");
	document.body.appendChild(div1); 
	document.getElementsByTagName("div")[0].innerHTML=kod233;
}			
	vv1();
// codes to html - end
	
// onclick events start
	// fix our code button -start	
	document.getElementById("button11").onclick = function vv(){		
		kod001= e.getContent({source_view:!0});
		kodekle= '<head><link type="text/css" rel="stylesheet" href="./css/w3.css"><link type="text/css" rel="stylesheet" href="./css/font-awesome.min.css"><link type="text/css" rel="stylesheet" href="./css/mytiny.css"><link rel="shortcut icon" href="./favicon.png" type="image/x-icon"><meta name="robots" content="index, follow"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="date" content="' + Date() + '"><meta name="revised" content="' + Date() + '"><meta http-equiv="content-style-type" content="text/css"><meta http-equiv="expires" content="0"><meta http-equiv="content-language" content="tr"><script type="text/javascript" src="js/ourscript.js"></script>';
		// kod001=kod001.replace(/<div id="infocontainer24" style="display: none;">[^>]*>/g, ""); //clear mysavebutton code
		//alert(kod001);
		kod001= kod001.replace(/<head>/, kodekle);
		kod001= kod001.replace(/src="file:\/\/[^"]*\/plugins\/emoticons\/img\//g,'src="./plugins/emoticons/img/');
		kod588=kod001; // code for clipboard.js
		kod001=kod001.replace("<","&lt;").replace(/</g,"\n<br>&lt;").replace(/&nbsp;/g,"&#38;nbsp;");
		document.getElementById("anakod").innerHTML= kod001;
		document.getElementById("anakod").style.display="block";			
		document.getElementById("button11").attributes[3].value=kod588;	// code for clipboard.js
		};

	// fix our code button -end
		
	document.getElementById("code2button").onclick = function code2code() {document.getElementById("anakod").innerHTML=e.getContent({source_view:!0}).replace("<","&lt;").replace(/</g,"<br>&lt;").replace(/&nbsp;/g,"&#38;nbsp;");document.getElementById("anakod").style.display="block";};
		
	document.getElementById("hidebutton").onclick = function yy(){document.getElementById("anakod").style.display="none";};

	document.getElementById("INFO").onclick = function yy(){document.getElementById("anakod").innerHTML=kod003;document.getElementById("anakod").style.display="block";};
	
// onclick events end   


});


