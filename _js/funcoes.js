function adicionaProfissao(){
	var profissao = document.getElementById('campoProfissao')
	var cont = 0;
	var verifica = false;	
	$('#tabelaProf > tbody  > tr').each(function() {
		if($(this).find(".valor").text() == "" ){
			$(this).find(".valor").html(profissao.value.toUpperCase());
			profissao.value = "";
			profissao.focus();
			if(verifica){
				document.getElementById('btnOk').disabled = true;
				document.getElementById('btnConfirma').disabled = false;
				profissao.disabled = true; 
				
				var resultDiv = document.getElementById("result");
				html2canvas(document.getElementById("tabelaProf"), {
				  onrendered: function(canvas) {
				     var img = canvas.toDataURL("image/png");
				     //result.innerHTML = '<img src="'+img+'"/>';	
				     var tagimg = $('#dataimg').val(img);
				     alert(img);	
				     saveImage(img);	
				  }
				});
			}
			return;
		}
		else{
			cont += 1;
			if(cont == 4)
				verifica = true;
		}
	});
		
}

function saveImage($base64img){
	var d = new Date();
	var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
    define('UPLOAD_DIR', '../_imagens/');
    $base64img = str_replace('data:image/png;base64,', '', $base64img);
    $data = base64_decode($base64img);
    $file = UPLOAD_DIR . strDate+'.png';
    file_put_contents($file, $data);
    //turn $file;
}

function scroll(){
	window.scrollTo(0, 600,10,10,4);
}


function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        adicionaProfissao();
        return false;
    }
    return true;
}