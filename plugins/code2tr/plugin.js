tinymce.PluginManager.add("code2tr",function(e){	
	kod003= "Şablon dosyalarını indirin, onları sıkıştırılmış dosyadan çıkartın.<br>Sayfanızı hazırlayın ve 'Şablon Dosyalarını İndirin' butonuna basın<br>Kodu html sayfasına kopyalayın ve html sayfanızı TEMPLATE_FILES dosyasının kök dizinine yerleştirin.<br>Html sayfasını Firefox,Chrome gibi bir tarayıcı ile açın.<br>Bu dosya taşınabilirdir, dilerseniz TEMPLATE_FILES dosyasını kopyalabilir, başka bir bilgisayara veya sunucuya taşıyabilirsiniz.<br><a href='plugins/code2/TEMPLATE_FILES.tar.gz' style='text-decoration:none;'><button type='submit' id='downloadtemplate'>Şablon Dosyalarını İndirin</button></a><br><br>Bütün çalışma dosyalarını da indirebilir ve kendi bilgisayarınızda çalışabilirsiniz, 'Download Workspace' butonuna basın ve tüm dosyaları indirin.<br><a href='plugins/code2/workspace.tar.gz' style='text-decoration:none;'><button type='submit' id='downloadworkspace'>Download Workspace</button></a><br><br>Code2tr eklentisi (plugin) kodu anlamanıza yardımcı olur. Code2tr eklentisi ile kodu değiştiremezsiniz eğer deneyimli bir kullanıcı değilseniz. Kodu değiştirmek isterseniz menüden Araçlar-Kaynak Kodu'nu seçmeli veya Kaynak Kodu butonuna tıklamalısınız.<br><br>Kaynak Kodu butonu herhangi html tagından çıkış için de işinize yarayacaktır. Örneğin 'kaynak kodu' butonuna basar ve içinde bulunduğunuz tagın dışına 'a' veya başka bir karakter yazarsanız içinde kaldığınız html tagından çıkmış olursunuz. Böylece yeni bir 'p' tagı oluşturmuş oldunuz, öntanımlı ayarlara göre tabii.<br><br>Yinele ve Geri al butonları da bu konularda size yardımcı olacaktır. <br><br>Site simgenizi değiştirmek için bir 16x16 piksel boyutunda bir favicon.png hazırlayın ve onu TEMPLATE_FILES dosyasının kök dizinine (yani direkt içine atın) koyun. (Aynı isimde başka bir dosya varsa onu silin) <br><br> Bazı w3css2 kodları sadece  TEMPLATE_FILES dosyasının içerisinde düzgün çalışacaktır. (Yalnızca Şablonda Çalışır & Yalnızca Şablonda Çalışır2)<br><br>Yeni bir versiyonun olup olmadığını şu linkten kontrol edebilirsiniz: <a href='https://www.fullportal.org/WEBTASARIM/Tinymce/index.html'>www.fullportal.org/WEBTASARIM/Tinymce/index.html</a><br><br> ";
// codes to html - start
	function vv1(){	kod233= '<div class="w3-card w3-green" id="kod_div"><span style="font-size: 18pt;">&nbsp;</span><button type="submit" id="button11" class="btn11" data-clipboard-text="denemeler">Kodu Hazırla</button><button type="submit" id="code2button" >Kaynak Kodu</button><button type="submit" id="hidebutton" >Kodu Sakla</button><button type="submit" id="INFO">Kullanım Bilgisi</button><div class="w3-panel w3-pale-blue w3-leftbar w3-border-blue" ><span id="anakod">' + kod003 + '</span></div></div>';		
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


