/* Прокручиваем слайдер кнопками вправо-влево */
var curSlide = 1;
var objSlideList = document.querySelector("#slider-news .wrapper ul");
var slideCount = objSlideList.children.length;
var slideWidth = objSlideList.children[1].offsetWidth;
objSlideList.style.width = (slideWidth*slideCount)+'px';
var translateWidth = 0;
var switchInterval = 0;

function gotoNextSlide () {
	clearInterval (switchInterval);
	if (curSlide>=slideCount || curSlide<=0) {
		objSlideList.style.transform = 'translate(0, 0)';
		objSlideList.style.transition = '1s';
		curSlide = 1;
	}
	else {
		translateWidth = slideWidth*curSlide;
		objSlideList.style.transform = 'translate(-'+translateWidth+'px, 0)';
		objSlideList.style.transition = '1s';
		curSlide++;
	}
}

function gotoPrevSlide () {
	clearInterval (switchInterval);
	if (curSlide>slideCount || curSlide<=1) {
		translateWidth = slideWidth*(slideCount-1);
		objSlideList.style.transform = 'translate(-'+translateWidth+'px, 0)';
		objSlideList.style.transition = '1s';
		curSlide = slideCount;
	}
	else {
		translateWidth = slideWidth*(curSlide-2);
		objSlideList.style.transform = 'translate(-'+translateWidth+'px, 0)';
		objSlideList.style.transition = '1s';
		curSlide--;
	}
}

/* Переходим на конкретный слайд */
var btnClicked = 0;
function gotoClickedSlide(elem) {
	clearInterval (switchInterval);
	btnClicked = this.dataset.index;
	translateWidth = slideWidth*(btnClicked-1);
	objSlideList.style.transform = 'translate(-'+translateWidth+'px, 0)';
	objSlideList.style.transition = '1s';
	curSlide = btnClicked;
}


/* Прокручиваем флажки */
function gotoFlags2Right (flags) {
	for (var i=0; i<3; i++) {
		if (flags[i].style.order=="3") {
			flags[i].style.order = "1";
		}
		else {
			flags[i].style.order = String(Number(flags[i].style.order)+1);
		}
	}
}
function gotoFlags2Left (flags) {
	for (var i=0; i<3; i++) {
		if (flags[i].style.order=="1") {
			flags[i].style.order = "3";
		}
		else {
			flags[i].style.order = String(Number(flags[i].style.order)-1);
		}
	}
}


/* Устанавливаем связи элементов управления с функциями */
var objSlideWrapper = document.querySelector("#slider-news .wrapper");
var slideInterval = 3000;

window.onload = function () {

	switchInterval = setInterval (gotoNextSlide, slideInterval);
	
	objSlideWrapper.onmouseover = function (elem) {
		clearInterval (switchInterval);
	}
	objSlideWrapper.onmouseout = function (elem) {
		switchInterval = setInterval (gotoNextSlide, slideInterval);
	}
	
	document.querySelector("#slider-news .btn-prev").onclick = function() {
		clearInterval (switchInterval);
		gotoPrevSlide();
	}
	document.querySelector("#slider-news .btn-next").onclick = function() {
		clearInterval (switchInterval);
		gotoNextSlide();
	}

	var clickers = document.querySelectorAll ('.clicker');
	var index, clicker;
	for (index=0; index<clickers.length; index++) {
		clicker = clickers[index];
		clicker.addEventListener ('click', gotoClickedSlide);
	}

	var objFlags1Li = document.querySelectorAll("#flag-box1 .wrapper ul li");
	var objFlags2Li = document.querySelectorAll("#flag-box2 .wrapper ul li");
	document.querySelector("#flag-box1 .flag-box-next").onclick = function() {
		gotoFlags2Right (objFlags1Li);
	}
	document.querySelector("#flag-box1 .flag-box-prev").onclick = function() {
		gotoFlags2Left (objFlags1Li);
	}
	document.querySelector("#flag-box2 .flag-box-next").onclick = function() {
		gotoFlags2Right (objFlags2Li);
	}
	document.querySelector("#flag-box2 .flag-box-prev").onclick = function() {
		gotoFlags2Left (objFlags2Li);
	}


}