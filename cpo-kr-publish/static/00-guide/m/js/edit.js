var imgIdx = 1
var itarget, s = 0,
	y, x, d, editStr = "",
	hasTouch = "ontouchstart" in window && !isTouchPad,
	DOWN_EV = hasTouch ? "touchstart" : "mousedown",
	MOVE_EV = hasTouch ? "touchmove" : "mousemove",
	UP_EV = hasTouch ? "touchend" : "mouseup";

// 이미지 추가
function addImg(){
	var c = $(".upload").find(".imgUrl:last");
	if (c.val() == "") {
		alert("이미지 URL을 입력 해 주세요.");
		return;
	} else {
		var imgList = "<div class='imgList'><input class='imgUrl' type='text' name='imgUrl' placeholder='이미지 URL을 붙여넣기 하세요.' id='num" + imgIdx + "'><button class='btn minus-img'>제거</button></div>";
		var imgOut = "<img class='imgOut' id='" + imgIdx + "'>";
		$(".imgList:last").after(imgList),
		$(".output").append(imgOut),
		imgIdx += 1;
	}
}

// 이미지 불러오기
function loadImg(){
	leftTabOn();
	var o = $(".imgList");
	var i = o.find("input").val();
	var arr = "jpg"
	var le = i.length;
	var dot = i.lastIndexOf('.');
	var st = i.substring(dot, le).toLowerCase();
	
	if (editStr == ""){		
		if ( st == "") {
			alert("이미지 URL을 입력 해 주세요.");
		} else if ( st == ".jpg" || st == ".png" || st == ".jpeg" ) {
			o.each(function(i, e){
				var e = $(this).find(".imgUrl").val();
				var i = $(".imgOut").eq(i);
				i.attr("src", e);
			}); 
			itarget = document.getElementById("0"),
			itarget.addEventListener(DOWN_EV, mDown),
			$(".output p").css("display", "none");
		} else {
			alert("jpg, jpeg, png 형태의 url을 입력 해 주세요.")
		}
	} else {
		console.log("have")
		if($(".tarea").val() == ""){			
			return
		} else {			
			$(".tab1").html(editStr);
			for (var i = 0; $(".sbox").length - 1 >= i; i++) {
				$(".sbox").each(function(i){
					var b = "#b" + i
					var d = $(b).find("a").attr("href");
					var sss = "<a href='" + d + "' class='eglk'>.</a><div class='closebox'><a href='javascript:editbox(" + i + ");'><button type='button' class='btn'>링크</button></a><a href='javascript:deletebox(" + i + ");'><button type='button' class='btn'>삭제</button></a></div>"
					$(this).html(sss);
				});			
			}
		}				
	}
}

// 탭 on/off
function leftTabOn(){
	$(".tab2").hide(), $(".tab1").show();
}
function rightTabOn(){
	$(".tab1").hide(), $(".tab2").show();
}

// 소스보기
function viewCode(){
	rightTabOn();
	$(".tab1 p").remove();	
	console.log($(".sbox .closebox"));
	editStr = $(".imgBox").html(), $(".sbox .closebox").remove();
	var h = $(".tab1").html();
	var code = "<div class='imgBox'>" + h.trim() + "</div>"
	console.log("h==== "+h);
	$(".tarea").val(code);
}

// mouse down
function mDown(t){	
	if(2 != t.button){
		var e = hasTouch ? t.touches[0] : t;
			 y = e.clientY - $(".tab1").offset().top + $(document).scrollTop(),
		   x = e.clientX,          
		   s = 0 == $(".sbox").length ? 0 : parseInt($(".sbox").eq($(".sbox").length - 1).attr("id").replace("b", "")) + 1,
		   d = "#b" + s;
		var a = "<div class='sbox' id='b" + s + "'><a href='#' class='eglk'>.</a><div class='closebox'><a href='javascript:editbox(" + s + ");'><button type='button' class='btn'>링크</button></a><a href='javascript:deletebox(" + s + ");'><button type='button' class='btn'>삭제</button></a></div></div>";
		var w = $(".output").width();
		var oX = e.offsetX;
		var h = $(".output").height();
		var oY = e.offsetY;
		$(".output .tab1 .boxGroup").append(a);
		$(d).css("top", ((oY / h)*100) + "%");
		$(d).css("left", ((oX / w)*100) + "%");
		document.body.addEventListener(MOVE_EV, mMove), 
		document.body.addEventListener(UP_EV, mUp), t.preventDefault()
	}
};

// mouse up
var mUp = function() {
	document.body.removeEventListener(MOVE_EV, mMove),
	document.body.removeEventListener(UP_EV, mUp);
	var t = window.prompt("링크를 입력해주세요.");
	$("#b" + s + " > a").attr("href", t, editStr = $(".sbox").html())	
};

// mouse move
function mMove(t){  
	var e = hasTouch ? t.touches[0] : t,
	a = e.clientY - $(".output").offset().top + $(document).scrollTop() - y,
	o = e.clientX - x;
	// $(d).css("height", (a) + "%"),
	// $(d).css("width", (o) + "%");
	ww = $(".imgOut").width();
	hh = $(".imgOut").height();	
	$(d).css("height", (a / ( $(".copy").offset().top - $(".output").offset().top )) * 100 + "%"),
	$(d).css("width", (o / ww) * 100 + "%");
}

// 이미지맵 삭제
function deletebox(s){
	$("#b" + s).remove();
}

// 이미지맵 url 수정
function editbox(s){
	var h = $("#b" + s).find("a").attr("href")
	var t = prompt("링크를 수정 해 주세요.", h);
	$("#b" + s + " > a").attr("href", t, editStr = $(".sbox").html())
}

// 코드 복사
function clipboard() {
	var IE = (document.all)?true:false;
	var trb = $(".tarea").val();	
	if (IE) {
		if(confirm("소스코드를 복사 하시겠습니까?")){window.clipboardData.setData("Text", trb);}
	} else {		
		//temp = prompt("Ctrl+C를 눌러 클립보드로 복사하세요", trb);
		$("textarea").select();
		document.execCommand('copy');
		alert("복사가 완료되었습니다.")
	}
}

$(document).on("click", ".minus-img", function(){
	var imgIdx = $(this).index();
	$(this).closest(".imgList").remove();
	$(".imgOut").eq(imgIdx).remove();
});