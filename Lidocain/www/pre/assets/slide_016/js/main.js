(function () {
	$('#slider').on('ready', '.slide_016', function (e, el) {
		var slide = $('#container', el);
		var dataAnswer = {
			benhvien: "Không nhập",
			khoa: "Không nhập",
			tenbs: "Không nhập",
			ansInfos: {
				ansInfo1: "Không có câu trả lời.",
				ansInfo2: "Không có câu trả lời.",
				ansInfo3: "Không có câu trả lời.",
				ansInfo4: "Không có câu trả lời.",
				ansInfo5: "Không có câu trả lời."
			}
		};	

		function setDataAnswer(){
			switch($('#stage').attr('data-lang')){
				case 'VN':
					dataAnswer.benhvien = "Không nhập";
					dataAnswer.khoa = "Không nhập";
					dataAnswer.tenbs = "Không nhập";
					
					dataAnswer.ansInfos.ansInfo1 = "Không có câu trả lời.";
					dataAnswer.ansInfos.ansInfo2 = "Không có câu trả lời.";
					dataAnswer.ansInfos.ansInfo3 = "Không có câu trả lời.";
					dataAnswer.ansInfos.ansInfo4 = "Không có câu trả lời.";
					dataAnswer.ansInfos.ansInfo5 = "Không có câu trả lời.";
					break;
					
				case 'EN':
					dataAnswer.benhvien = "No input";
					dataAnswer.khoa = "No input";
					dataAnswer.tenbs = "No input";
					
					dataAnswer.ansInfos.ansInfo1 = "No answer.";
					dataAnswer.ansInfos.ansInfo2 = "No answer.";
					dataAnswer.ansInfos.ansInfo3 = "No answer.";
					dataAnswer.ansInfos.ansInfo4 = "No answer.";
					dataAnswer.ansInfos.ansInfo5 = "No answer.";
					break;
			}
		}
		
		function showData(){
			$('.infoBenhVien',slide).html(dataAnswer.benhvien);
			$('.infoKhoa',slide).html(dataAnswer.khoa);
			$('.infoTenBS',slide).html(dataAnswer.tenbs);
			
			$('.ansInfo1',slide).html(dataAnswer.ansInfos.ansInfo1);
			$('.ansInfo2',slide).html(dataAnswer.ansInfos.ansInfo2);
			$('.ansInfo3',slide).html(dataAnswer.ansInfos.ansInfo3);
			$('.ansInfo4',slide).html(dataAnswer.ansInfos.ansInfo4);
			$('.ansInfo5',slide).html(dataAnswer.ansInfos.ansInfo5);
		
		}
		
		$('.btnVN').bind('tapone',function(){
			$('.boardAnswer',slide).hide();
			setTimeout(function(){ setDataAnswer(); },100);
		});
		$('.btnEN').bind('tapone',function(){
			$('.boardAnswer',slide).hide();
			setTimeout(function(){ setDataAnswer(); },100);
		});
		
		
		
		
		//************************************************************
		$('.btnAnswer',slide).bind('tapone',function(){
			showData();
			$('.boardAnswer', slide).show().addClass('flipInX');
			$('.board, .btnAnswer, .btnReload',slide).hide();
			//$('.boardAnswer',slide).fadeIn(500);
		});		
		$('.btnReload',slide).bind('tapone',function(){	
			$('.boardAnswer',slide).fadeOut(500);
		
			$('#dataBenhVien',slide).val('');
			$('#dataKhoa',slide).val('');
			$('#dataTenBS',slide).val('');
		
			$('#ansInfo1',slide).val('');
			$("input[name=checkbox-ans2vn]:radio",slide).removeAttr('checked');
			$("input[name=checkbox-ans3vn]:radio",slide).removeAttr('checked');
			$("input[name=checkbox-ans4vn]:radio",slide).removeAttr('checked');
			$("input[name=checkbox-ans2en]:radio",slide).removeAttr('checked');
			$("input[name=checkbox-ans3en]:radio",slide).removeAttr('checked');
			$("input[name=checkbox-ans4en]:radio",slide).removeAttr('checked');
			$('#ansInfo5',slide).val('');
		
			setDataAnswer();
		});		
		$('.btnClose',slide).bind('tapone',function(){
			$('.boardAnswer',slide).hide();
			$('.board, .btnAnswer, .btnReload',slide).show();
		});
		
		//*************************************************************
		$('#dataBenhVien',slide).focusout(function(){
			dataAnswer.benhvien = $(this).val();
			//console.log(dataAnswer);
		});
		$('#dataKhoa',slide).focusout(function(){
			dataAnswer.khoa = $(this).val();
			//console.log(dataAnswer);
		});
		$('#dataTenBS',slide).focusout(function(){
			dataAnswer.tenbs = $(this).val();
			//console.log(dataAnswer);
		});
		
		$('#ansInfo1',slide).focusout(function(){
			dataAnswer.ansInfos.ansInfo1 = $(this).val();
			//console.log(dataAnswer);
		});
		
		$("input[name=checkbox-ans2vn]:radio",slide).change(function () {
			if ($("#checkbox1vn",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo2 = $("#checkbox1vn",slide).attr('data-value');
				//console.log($("#radio1",slide).attr('data-value'));
			}else if ($("#checkbox2vn",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo2 = $("#checkbox2vn",slide).attr('data-value');
				//console.log($("#radio2",slide).attr('data-value'));
			}
		});		
		$("input[name=checkbox-ans3vn]:radio",slide).change(function () {
			if ($("#checkbox3vn",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo3 = $("#checkbox3vn",slide).attr('data-value');
				//console.log($("#radio1",slide).attr('data-value'));
			}else if ($("#checkbox4vn",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo3 = $("#checkbox4vn",slide).attr('data-value');
				//console.log($("#radio2",slide).attr('data-value'));
			}else if ($("#checkbox5vn",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo3 = $("#checkbox5vn",slide).attr('data-value');
				//console.log($("#radio3",slide).attr('data-value'));
			}
		});		
		$("input[name=checkbox-ans4vn]:radio",slide).change(function () {
			if ($("#checkbox6vn",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo4 = $("#checkbox6vn",slide).attr('data-value');
				//console.log($("#radio1",slide).attr('data-value'));
			}else if ($("#checkbox7vn",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo4 = $("#checkbox7vn",slide).attr('data-value');
				//console.log($("#radio2",slide).attr('data-value'));
			}else if ($("#checkbox8vn",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo4 = $("#checkbox8vn",slide).attr('data-value');
				//console.log($("#radio3",slide).attr('data-value'));
			}else if ($("#checkbox9vn",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo4 = $("#checkbox9vn",slide).attr('data-value');
				//console.log($("#radio4",slide).attr('data-value'));
			}
		});	
		
		$("input[name=checkbox-ans2en]:radio",slide).change(function () {
			if ($("#checkbox1en",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo2 = $("#checkbox1en",slide).attr('data-value');
				//console.log($("#radio1",slide).attr('data-value'));
			}else if ($("#checkbox2en",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo2 = $("#checkbox2en",slide).attr('data-value');
				//console.log($("#radio2",slide).attr('data-value'));
			}
		});		
		$("input[name=checkbox-ans3en]:radio",slide).change(function () {
			if ($("#checkbox3en",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo3 = $("#checkbox3en",slide).attr('data-value');
				//console.log($("#radio1",slide).attr('data-value'));
			}else if ($("#checkbox4en",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo3 = $("#checkbox4en",slide).attr('data-value');
				//console.log($("#radio2",slide).attr('data-value'));
			}else if ($("#checkbox5en",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo3 = $("#checkbox5en",slide).attr('data-value');
				//console.log($("#radio3",slide).attr('data-value'));
			}
		});		
		$("input[name=checkbox-ans4en]:radio",slide).change(function () {
			if ($("#checkbox6en",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo4 = $("#checkbox6en",slide).attr('data-value');
				//console.log($("#radio1",slide).attr('data-value'));
			}else if ($("#checkbox7en",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo4 = $("#checkbox7en",slide).attr('data-value');
				//console.log($("#radio2",slide).attr('data-value'));
			}else if ($("#checkbox8en",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo4 = $("#checkbox8en",slide).attr('data-value');
				//console.log($("#radio3",slide).attr('data-value'));
			}else if ($("#checkbox9en",slide).attr("checked")) {
				dataAnswer.ansInfos.ansInfo4 = $("#checkbox9en",slide).attr('data-value');
				//console.log($("#radio4",slide).attr('data-value'));
			}
		});
		
		$('#ansInfo5',slide).focusout(function(){
			dataAnswer.ansInfos.ansInfo5 = $(this).val();
			//console.log(dataAnswer);
		});
		
	});
})();
