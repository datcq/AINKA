(function () {
	$('#slider').on('ready', '.slide_066', function (e, el) {
		var slide =  $('#container', el);		
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
		
		$('.result',slide).bind('tapone',function(){
			showData();
			$('.light_pu', slide).show().addClass('opa');
			$('.cont_kq_en', slide).hide();
			$('.cont_kq', slide).show();
			$('.popKetQua',slide).fadeIn(200);
			$('.btnVN, .btnEN').hide();
		});
		$('.result_en ',slide).bind('tapone',function(){
			showData();
			$('.light_pu', slide).show().addClass('opa');
			$('.cont_kq_en', slide).show();
			$('.cont_kq', slide).hide();
			$('.popKetQua',slide).fadeIn(200);
			$('.btnVN, .btnEN').hide();
		});
		
		$('.reset, .reset_en').bind('tapone',function(){
			$('.popKetQua',slide).fadeOut(200);
			setDataAnswer();
		
			$('#dataBV',slide).val('');
			$('#dataKhoa',slide).val('');
			$('#dataBS',slide).val('');
			
			$('#boxQ1',slide).val('');
			$('.qRow div',slide).removeClass('checked');
			$('#boxQ5',slide).val('');
			
			$('#boxQ1_en',slide).val('');
			$('.qRow_en div',slide).removeClass('checked');
			$('#boxQ5_en',slide).val('');
		});
		
		$('.btnClose',slide).bind('tapone',function(){
			$('.popKetQua',slide).fadeOut(200);
			$('.btnVN, .btnEN').show();
		});
			
		/***********************************************************************/
		$('#dataBV',slide).focusout(function(){
			dataAnswer.benhvien = $(this).val();
			//console.log(dataAnswer);
		});
		$('#dataKhoa',slide).focusout(function(){
			dataAnswer.khoa = $(this).val();
			//console.log(dataAnswer);
		});
		$('#dataBS',slide).focusout(function(){
			dataAnswer.tenbs = $(this).val();
			//console.log(dataAnswer);
		});
		
		$('#boxQ1',slide).focusout(function(){
			dataAnswer.ansInfos.ansInfo1 = $(this).val();
			//console.log(dataAnswer);
		});
		$('#boxQ5',slide).focusout(function(){
			dataAnswer.ansInfos.ansInfo5 = $(this).val();
			//console.log(dataAnswer);
		});
		$('.qRow div',slide).bind('tapone',function(){
			console.log($($(this).parent())[0].id);
			switch($($(this).parent())[0].id){
				case "boxQ2":
					dataAnswer.ansInfos.ansInfo2 = $(this).attr('data-value');
					break;
				case "boxQ3":
					dataAnswer.ansInfos.ansInfo3 = $(this).attr('data-value');
					break;
				case "boxQ4":
					dataAnswer.ansInfos.ansInfo4 = $(this).attr('data-value');
					break;
			}
		});
		
		$('#boxQ1_en',slide).focusout(function(){
			dataAnswer.ansInfos.ansInfo1 = $(this).val();
			//console.log(dataAnswer);
		});
		$('#boxQ5_en',slide).focusout(function(){
			dataAnswer.ansInfos.ansInfo5 = $(this).val();
			//console.log(dataAnswer);
		});
		$('.qRow_en div',slide).bind('tapone',function(){
			console.log($($(this).parent())[0].id);
			switch($($(this).parent())[0].id){
				case "boxQ2_en":
					dataAnswer.ansInfos.ansInfo2 = $(this).attr('data-value');
					break;
				case "boxQ3_en":
					dataAnswer.ansInfos.ansInfo3 = $(this).attr('data-value');
					break;
				case "boxQ4_en":
					dataAnswer.ansInfos.ansInfo4 = $(this).attr('data-value');
					break;
			}
		});
		/***********************************************************************/
		$('.btnVN, .btnEN').bind('tapone',function(){
		setTimeout(function(){
			setDataAnswer();
		},100);
		});
			
		$('.aniCt',slide).fadeIn(function(){
			//setDataAnswer();
			//vietnam
			$('.qRow div',slide).bind('tapone', function(){
				$($(this,slide).siblings('div')).removeClass('checked');
				$(this,slide).addClass('checked');
			});
			
			/*$('.reset',slide).bind('tapone', function(){
				$('.qRow div',slide).removeClass('checked');
			});*/
			
			//english
			$('.qRow_en div',slide).bind('tapone', function(){
				$($(this,slide).siblings('div')).removeClass('checked');
				$(this,slide).addClass('checked');
			});
			/*$('.reset_en',slide).bind('tapone', function(){
				$('.qRow_en div',slide).removeClass('checked');
			});*/
		});
		
		
	});
})();
