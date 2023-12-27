var CPO = {
	POPUP_open : function(obj, alertMessage){// 토스트 팝업 (DIV ID - DIV CLASS - 메세지)
		
		if (obj == 'CPOAlert_Wrap02' || obj == 'CPOAlert_Wrap'){
			var objCont = $('#' + obj);
			var objTextBox = $('#' + obj + ' > .message');
			objTextBox.append( alertMessage );

		} else {
			var objData = obj.attr('data-popup');
			var objCont = $('#' + objData);
		}
		objCont.addClass("active");
		$("html").addClass('scroll_hidden');

		/* 딤드*/
		var dimd = '';
			dimd += '<div class="CPO_dimd"></div>';
		if($('.CPO_dimd').length < 1){
			$('body').append(dimd);
		}
		/* //딤드*/

	},
	POPUP_close : function(){
		$('.pop_close, .CPOpop_alert .btn_mid02, .CPOpop_alert .btn_mid01').on('click', function(){
			$(this).closest('[class^="CPOpop_"]').removeClass('active');
			const pop_name = $('[class^="CPOpop_"].active').length;

			if(pop_name < 1){
				$("html").removeClass('scroll_hidden');
			}
			if(pop_name < 1){
				$('.CPO_dimd').remove();
			}
			
			var objTextBox = $('.CPOpop_alert > .message');
			objTextBox.empty();
		});
	},
	POPUP_toast : function(obj, toastMessage){// 토스트 팝업 (DIV ID - DIV CLASS - 메세지)
		var objID = $('#' + obj);
		var objTextBox = $('#' + obj + ' > div');
		objTextBox.empty();
		objTextBox.append( toastMessage );
		if(!$('#CPOactionbar').length == 0){
			objID.css({'bottom':'72px','opacity':'1',});
		} else if(!$('.btn_sticky').length == 0){
			objID.css({'bottom':'76px','opacity':'1',});
		} else {
			objID.css({'bottom':'20px','opacity':'1',});
		}
		setTimeout(() => {
			const objH = objID.outerHeight();
			objID.css({
				'bottom':((10 + objH) * -1) + 'px',
				'opacity':'0',
			});
		}, 3000);
	},
	tooltip : function(){
		/* 열기 */
		$(document).off("click",".cpo_tooltip .open").on("click",".cpo_tooltip .open", function(){
			var _objWindow = $(window).width();
			var _obj = $(this).parent();
			var _objLeft = _obj.offset().left;
			var _objCont = $(this).parent().children('.cont');
			var _objWidth = _objCont.width();
			if(_objLeft > _objWidth){
				var minusLeft2 =  _objWidth - _objWindow;
				_objCont.css({
					"margin-left":minusLeft2,
				});
			}
			if(_obj.hasClass('on')){
				_obj.removeClass('on')
			} else {
				_obj.addClass('on');
			}
			console.log(_objWindow, _objLeft, _objWidth);
		});
		/* //열기 */
		/* 닫기 */
		$(document).off("click",".cpo_tooltip .close").on("click",".cpo_tooltip .close", function(){
			var _obj = $(this).parent().parent();
			_obj.removeClass('on')
		});
		/* //닫기 */
	},
	accordion : function(){
		$('.accordion li').on('click', function(e){
			e.stopPropagation();
			$(this).find('> ul').slideDown(300);
			$(this).siblings().find('ul').slideUp(300);
		});
	},
	toggle : function(){
		$('.toggle li').on('click', function(e){
			e.stopPropagation();
			$(this).find('> ul').slideToggle(300);
		});
	},
	tab : function(){
		$('.tab .select_tab').on('click', function(){
			const tab_idx = $('.tab .select_tab').index(this);
			$('.tab .select_tab').removeClass('on');
			$(this).addClass('on');
			$('.tab .cont_tab').removeClass('on').eq(tab_idx).addClass('on');
		});
	},
	textbox : function(){
		$('.form_txt input').on('keydown',function(){
			if($(this).val().length > 0){
				$(this).parent().find('.btn_delete').show();
				if($(this).parent().find('span').length > 0){
					$(this).parent().addClass('on');
				}
			}else{
				$(this).parent().find('.btn_delete').hide();
				$(this).parent().removeClass('on');
			}
		});
		$('.form_txt .btn_delete').on('click',function(){
			$(this).parent().find('input').val('');
			$(this).parent().find('.btn_delete').hide();
			$(this).parent().removeClass('on');
		});
	},
}

function progress(target, animate, animateTxt, time){
	const options = {
		animate : animate,
		animateTxt : animateTxt,
	}
	target.each(function(){
		if(!$(this).hasClass('progressBar02')){
			$(this).find('circle').attr({
				'transform':'rotate(-90, 100, 100)',
				'cx':167,
				'cy':33,
				'r':31,
			});
		} else {
			$(this).find('circle').attr({
				'transform':'rotate(-90, 100, 100)',
				'cx':115,
				'cy':83,
				'r':80,
			});
		}
		const $count = $(this).find('.progressCount');
		const $line = $(this).find('.progressLine');
		const percentProgress = $(this).attr('data-progress');
		const percentRemaining = (100 - percentProgress);
		const percentTxt = $(this).attr('data-progress');

		const radius = $line.attr('r');
		const diameter = radius * 2;
		const circumference = Math.round(Math.PI * diameter);

		const percentage =  circumference * percentRemaining / 100;
		$line.css({
			'stroke-dasharray' : circumference,
			'stroke-dashoffset' : percentage
		});

		if(options.animate === true){
			$line.css({
				'stroke-dashoffset' : circumference
			}).animate({
				'stroke-dashoffset' : percentage
			}, time)
		}
		if(options.animateTxt == true){
			$({Counter:0}).animate(
				{Counter:percentTxt},
				{duration:time,
				step: function () {
					$count.text(Math.ceil(this.Counter) + '%');
				}
			});
		}else{
			$count.text(percentTxt + '%');
		}
	});
}
// FO-MY-MS0050 인풋 텍스트
function CPOInputText(){
	$('.ipt_text').on('propertychange change keyup input paste', function(){
		if($(this).find('input[type="text"]').val().length != 0){
			$(this).addClass('on');
		} else {
			$(this).removeClass('on');
		}
	});
	$('.ico_clear').click(function(){
		$(this).parents('.ipt_text').removeClass('on').find('input[type="text"]').val('');
	});
}
function CPOTextarea(){
	$('.review_textarea textarea').focusin(function(){
		$(this).parent().addClass('focus');
	});
	$('.review_textarea textarea').focusout(function(){
		$(this).parent().removeClass('focus');
	});
	$('.review_textarea textarea').on('propertychange change keyup input paste', function(){
		let txtVal = $(this).val().length;
		if(txtVal == 0){
			$(this).parent().removeClass('on');
		} else {
			$(this).parent().addClass('on');
		}
		$('.txt_check .first').text(txtVal);
	});
}
// FO-MY-MS0015 이미지 업로드
function CPOImgUpload(){
	if (window.File && window.FileList && window.FileReader) {
		$("#upload_file").on("change", function(e) {
		var files = e.target.files,
			filesLength = files.length;
			for (var i = 0; i < filesLength; i++) {
				var f = files[i]
				var fileReader = new FileReader();
				fileReader.onload = (function(e) {
					if(filesLength < 8){
						$('.upload_img').prepend(
							'<li class="item"><img src="'+ e.target.result +'"><button class="btn_file_del">삭제버튼</button></li>'
							);
						$(".btn_file_del").click(function(){
							$(this).parent(".item").remove();
						});
					}
				});
				fileReader.readAsDataURL(f);
			}
		});
	}
	$(".btn_file_del").click(function(){
		$(this).parent(".item").remove();
	});
}
// 리뷰 별점 선택(버튼)
function CPOStarRating(){
	$('.rating .star button').click(function(){
		$(this).addClass('on').prevAll().addClass('on');
		if($(this).hasClass('on')){
			$(this).nextAll().removeClass('on');
		}
	});
}
// 별점
function CPOStarRating02(){
	$('.rating02 .star em').each(function(){
		const starTxt = $(this).text();
		$(this).css({"width":(starTxt * 20) + "%"});
	});
}
// CPO 이미지 lazyload
function CPOLazyload(target){
	document.addEventListener("DOMContentLoaded", function() {
		var lazyloadImg;    
		if ("IntersectionObserver" in window) {
			lazyloadImg = document.querySelectorAll(target);
			var imgObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						var img = entry.target;
						if(img.classList.contains('cpo_lazy_v')){ //세로
							if((window.pageYOffset + window.innerHeight) > img.offsetTop){ // image.offsetTop 뒤에 픽셀 값 마이너스
								img.src = img.dataset.src;
								img.classList.remove('cpo_lazy_v');
								imgObserver.unobserve(img);
							}
						} else if(img.classList.contains('cpo_lazy_h')){ //가로
							if((window.pageXOffset + window.innerWidth) > img.offsetLeft){ // image.offsetLeft 뒤에 픽셀 값 마이너스
								img.src = img.dataset.src;
								img.classList.remove('cpo_lazy_h');
								imgObserver.unobserve(img);
							}
						}
					}
				});
			});
			lazyloadImg.forEach(function(img) {
				imgObserver.observe(img);
			});
		}
	});
}