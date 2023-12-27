//<![CDATA[
SyntaxHighlighter.all();
//]]>

jQuery(document).ready(function(){   

	
	var navTarger = $('#sideMenu').find('.navigation');
	
	navTarger.find('li button').click(function() {
		navClickEvent($(this), "click");
	});
	
	//click selected
	function navClickEvent(target, str){
		delselected();
		
		var nameClassBol = target.parent().find('ul').hasClass('sub');
		var sublen = true;
		if(nameClassBol){			
			target.parent().find('.sub li:first-child').addClass("selected").parents('li').siblings().removeClass('selected');
		}else{
			target.parent().addClass("selected").siblings().removeClass('selected').parents('li').siblings().removeClass('selected');				
			sublen = false;			
		}
		
		if(str == "click"){
			contentMove(target, sublen);
		}	
	}
	
	function delselected(){
		navTarger.find('li button').each(function(i){
			//$( this ).parent().find('.sub li').siblings().removeClass('selected');
			$(this).parent().removeClass('selected');
			console.log();
		});
	}
	
	var headHeight = $('#header').height()+38;	
	
	//scroll event
	function contentMove(target, sublen){
		var contentId = "",
			idName = "";
		
		if(!sublen){
			contentId = target.attr("id");
			idName = "#uio_"+contentId;  
		}else{
			contentId = target.attr("id");
			idName = "#uio_"+contentId+"_1";
		}
		
		if($(idName).length >= 1){
			var topNum = $(idName).offset().top-headHeight;
			
			var indexStr = idName.indexOf('_1');
			if(indexStr >= 0){
				topNum -= 50; 
			}
			
			$('html, body').animate({
				scrollTop: topNum
			}, 400);
		}
	}
	
	var indexNum = 0;
	
	var nowGnb;
	var gnbBol = true;
	
	$(window).bind('scroll', function(e) {
		componentEvent($(this));
		if(gnbBol){
			menuScrollCheck($(this));
		}
	});
	
	function componentEvent(window){
		if ($('#contents').length > 0) { 
			var winTopNum = window.scrollTop();
			//var winBotton = $window.scrollTop() + $window.height() > $document.height() - 100
			//var comHeight = $('#contents .component').eq(indexNum).height();
			//console.log(indexNum);
			$('#contents').find('.component').each(function(i){
				var topNum = ($(this).offset().top - 230);
				if(topNum <= winTopNum){
					indexNum = i;
				} 
			});
			if($(window).scrollTop() == $(document).height() - $(window).height()){
				var contentId = $('#contents .component').eq(indexNum).attr('id'),
				cutId = contentId.split("uio_"),
				targetName = "#"+cutId[1];
				console.log(targetName);
				
			} else {
				var contentId = $('#contents .component').eq(indexNum).attr('id'),
				cutId = contentId.split("uio_"),
				targetName = "#"+cutId[1];
				
			}
			
			nowGnb = $(targetName);
			//console.log(indexNum, targetName);
			navClickEvent(nowGnb, "scroll");
		}
	}
	componentEvent($(window));
	
	function menuScrollCheck(window){
		var gnbHeight = $('#sideMenu .navigation').height()+38;
		var winHeight = $(window).height();		
		if(gnbHeight > winHeight){
		   /*var winTopNum = window.scrollTop();
				conHnum = $('#contents').height()-winHeight,
				gnbHnum = (gnbHeight+headHeight+30)-winHeight,
				gnbscrollNum = Math.ceil((gnbHnum/conHnum)*winTopNum);			
			$('#sideMenu').scrollTop(gnbscrollNum);*/			
			var winTopNum = window.scrollTop();
			var conHnum = ($('#contents').height()-winHeight)/2;
			var gnbHnum = 0;
			if(winTopNum > conHnum){
				gnbHnum = (gnbHeight+headHeight+30)-winHeight;
			}
			$('#sideMenu').scrollTop(gnbHnum);
			console.log(gnbHnum);
		}
	}
		
	$('#sideMenu').mouseover(function () {
		gnbBol = false;
	});
	
	$('#sideMenu').mouseleave(function () {
		gnbBol = true;
	});
	
	var allPanels = $('.accordion > dd').hide();
	//$('.accordion > dd:first-of-type').show();
	//$('.accordion > dt:first-of-type').addClass('accordion-active');
	$('.accordion > dt').click(function() {
		var theOffset = $(this).parents().parents().offset();
		 var indexNo = ($(this).index()/2) * 37;
		$(window).scrollTop(theOffset.top + indexNo -90 );
		
		console.log(indexNo, theOffset);
		
		$this = $(this);
		$target = $this.next(); 
		if(!$this.hasClass('accordion-active')){
			$this.parent().children('dd').slideUp();
			jQuery('.accordion > dt').removeClass('accordion-active');
			$this.addClass('accordion-active');
			$target.addClass('active').slideDown();
		}	
	});

});


// view Ifrmae HEIGHT
function MakeIframeFullHeight(obj) {
	var iframeH = $(obj).contents().find('html').height() + 50;
	$(obj).height(iframeH + 'px');
}



$(document).ready(function() {//Start
	//Tab Style
	$(document).on( "click", '.jQTab > .navi > li > button', function() {
		var onTag = $(this).parent().parent().find('li');
		var tabCont = $(this).attr('data-rel');//id
		var activeTab = $(this).attr("title");//class

		$(onTag).removeClass("on");
		$(this).parent().addClass("on");

		$(this).parent().parent().siblings("." + activeTab).removeClass('active');
		$(this).parent().parent().siblings("#" + tabCont).addClass('active');
		MakeIframeFullHeight();
	});
	//Tab Style

});//End

$(document).ready(function(){
	//
		$(".imgC").click(function(){
			$(".modal").show();
			//
			var imgSrc = $(this).children("img").attr("src");
			var imgAlt = $(this).children("img").attr("alt");

			$(".modalBox img").attr("src", imgSrc);
			$(".modalBox img").attr("alt", imgAlt);
			//
			var imgTit =  $(this).children("p").text();
			$(".modalBox p").text(imgTit);
			
			var imgW = $(".modalBox img").width();//width 구하기 
			var imgH = $(".modalBox img").height();//height 구하기 
			$(".modalBox").css({
				width: imgW,
				height:imgH,
				'margin-top':-imgH/2,
				'margin-left':-imgW/2
			});
			//$(".modalBox p").text(imgAlt);
		});
		

		$(".modal button").click(function(){
			$(".modal").hide();
		});
		

		$(".modal").click(function (e) {
		if (e.target.className != "modal") {
		  return false;
		} else {
		  $(".modal").hide();
		}
	  });
});

