tinymce.PluginManager.add("bgcolor", function(e){
 	
e.addButton("bgcolor",{type: 'menubutton', text:'BG', tooltip:"Body Background Color", menu:[{text: 'BG-Color', menu:[{text:'Blue', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:blue;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'Green', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:green;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'Black', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:black;color:white;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'White', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:white;color:black;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'Yellow', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:yellow;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'Red', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:red;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'Pink', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:pink;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'Brown', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:brown;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'Aqua', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:aqua;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'Purple', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:purple;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}, {text:'Gray', onclick: function(){var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:gray;'>");e.insertContent("&nbsp;");e.undoManager.transact(function(){e.setContent(bak01)}),e.nodeChanged()}}]},



	{text: 'BG-Image', menu:[{text:'Repeat', onclick:  function () {var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style=\"background-image: url('./plugins/bgcolor/images/tajmahal_opa.jpg');\">");e.setContent(bak01);e.insertContent("&nbsp;");} },
		{text:'Repeat-x', onclick:  function () {var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style=\"background-image: url('./plugins/bgcolor/images/tajmahal.jpg');background-repeat: repeat-x;\">");e.setContent(bak01);e.insertContent("&nbsp;");} },
		{text:'No-Repeat', onclick:  function () {var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style=\"background-image: url('./plugins/bgcolor/images/tajmahal.jpg');background-repeat: no-repeat;\">");e.setContent(bak01);e.insertContent("&nbsp;");} },
		{text:'Fixed', onclick:  function () {var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style=\"background-image: url('./plugins/bgcolor/images/tajmahal.jpg');background-attachment: fixed;\">");e.setContent(bak01);e.insertContent("&nbsp;");} },		
		{text:'Position', onclick:  function () {var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style=\"background-image: url('./plugins/bgcolor/images/tajmahal2.jpg');background-repeat: no-repeat;background-position:right top;margin-right: 600px;\">");e.setContent(bak01);e.insertContent("&nbsp;");} }							
		]},	



	{text: 'BG-Select', onclick: function () {e.windowManager.open({title:'Select a Color', url: './plugins/bgcolor/jscolor.html', buttons:[{text:"Select",onclick:function(){
	color123= document.getElementsByTagName("iframe")[1].contentWindow.document.getElementById("asader2").value;
	var bak01=e.getContent({source_view:!0}).replace(/<body[^>]*>/,"<body style='background-color:#"+ color123 + ";'>");
	e.setContent(bak01);}},{text:"Close",onclick:function(){e.windowManager.close();e.insertContent("&nbsp;");}}],width: 320, height: 240}, {custom_param: 1} 
//	color123= document.getElementById("iframe33").contentWindow.document.getElementById("asader2").value;		
	);}}




	
	]}


	)
	


	});
