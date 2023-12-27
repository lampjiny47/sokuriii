$(function () {
	// 파일 업로드
	$(".fileClear").on("click", function () {
		var cHref = $(this).parent(".filebox").find('.upload-hidden').attr('data-href');
		var divID = $("." +cHref).find('.upload-display');
		console.log(cHref);
		$(this).parent(".filebox").find('input').val("");
		divID.remove();
	});
	
	$('.filebox .upload-hidden').on('change', function(){
		if(window.FileReader){
			// 파일명 추출
			var filename = $(this)[0].files[0].name;
		} else {
			// Old IE 파일명 추출
			var filename = $(this).val().split('/').pop().split('\\').pop();
		};
		$(this).parent(".filebox").find('.upload-name').val(filename);
	});
	//end fileTarget.on
	//preview image 
	$('.preview-image .upload-hidden').on('change', function(){
		var parent = $(this).parent();
		var cHref = $(this).attr('data-href');
		var divID = $("." +cHref);
		divID.children('.upload-display').remove();
		if(window.FileReader){
			//image 파일만
			if (!$(this)[0].files[0].type.match(/image\//)) return;
			
			var reader = new FileReader();
			reader.onload = function(e){
				var src = e.target.result;
				divID.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="'+src+'" class="upload-thumb"></div></div>');
			}
			reader.readAsDataURL($(this)[0].files[0]);
		} else {
			$(this)[0].select();
			$(this)[0].blur();
			var imgSrc = document.selection.createRange().text;
			divID.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');
			var img = $(this).siblings('.upload-display').find('img');
			img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";		
		}
	});
	//end imgTarget.on
	
	// 모달 창 띄우기 Start

	// 모달 창 띄우기 End
	
});


$(function(){
	/* 클릭 클릭시 클릭을 클릭한 위치 근처에 레이어가 나타난다. */
	$('.toolClose').click(function(e) {
		$(this).parent().hide();
	});
	/* 클릭 클릭시 클릭을 클릭한 위치 근처에 레이어가 나타난다. */
	$('.imgSelect').click(function(e) {
		var helperData = $(this).attr('data-href');
		var helperID = $("#" +helperData);

		var sWidth = window.innerWidth;
		var sHeight = window.innerHeight;

		var oWidth = helperID.width();
		var oHeight = helperID.height();

		// 레이어가 나타날 위치를 셋팅한다.
		var divLeft = e.clientX + 10;
		var divTop = e.clientY + 5;

		// 레이어가 화면 크기를 벗어나면 위치를 바꾸어 배치한다.
		if( divLeft + oWidth > sWidth ) divLeft -= oWidth;
		if( divTop + oHeight > sHeight ) divTop -= oHeight;

		// 레이어 위치를 바꾸었더니 상단기준점(0,0) 밖으로 벗어난다면 상단기준점(0,0)에 배치하자.
		if( divLeft < 0 ) divLeft = 0;
		if( divTop < 0 ) divTop = 0;

		helperID.css({
			"top": divTop,
			"left": divLeft,
			"position": "absolute"
		}).show();
	});

});




$(document).ready(function() {
	// Store variables
	var accordion_head = $('.h_menu > li > span'),
		accordion_body = $('.h_menu li > .sub-menu');
	accordion_head.first().addClass('active').next().slideDown('normal');
	accordion_head.first().parent().addClass('active');
	accordion_head.on('click', function(event) {
		event.preventDefault();
		if ($(this).parent().attr('class') != 'active'){
			accordion_body.slideUp('normal');
			$(this).next().stop(true,true).slideToggle('normal');
			accordion_head.parent().removeClass('active');
			$(this).parent().addClass('active');
		}
	});
	// 3Depth Menu
	$('.menu li > a').click(function( e ){
		e.preventDefault();
		$(this).parent('li').find('ul:first').slideToggle();
	});
	
	// Side Menu
	$('.sideBtn').click(function( e ){
		$('#wrap').toggleClass('close');
	});
	
});


/* lnb */
(function($){
	var lnbUI = {
		click : function (target, speed) {
			var _self = this,
					$target = $(target);
			_self.speed = speed || 300;
			
			$target.each(function(){
				if(findChildren($(this))) {
					return;
				}
				$(this).addClass('noDepth');
			});
			
			function findChildren(obj) {
				return obj.find('> ul').length > 0;
			}
			
			$target.on('click','.action', function(e){
					e.stopPropagation();
					var $this = $(this),
						$depthTarget = $this.next(),
						$siblings = $this.parent().siblings();
				$this.parent('li').find('ul li').removeClass('on');
				$siblings.removeClass('on');
				$siblings.find('ul').slideUp(250);
				
				if($depthTarget.css('display') == 'none') {
					_self.activeOn($this);
					$depthTarget.slideDown(_self.speed);
				} else {
					$depthTarget.slideUp(_self.speed);
					_self.activeOff($this);
				}
			})
		},
		activeOff : function($target) {
			$target.parent().removeClass('on');
		},
		activeOn : function($target) {
			$target.parent().addClass('on');
		}
	};
	// Call lnbUI
	$(function(){
		lnbUI.click('#lnb li', 300)
	});
}(jQuery));