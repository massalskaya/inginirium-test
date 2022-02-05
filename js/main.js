function toggleMobileMenu () {
	var mobileMenuBtn = document.getElementById("mobile-menu");
	var mainMenu = document.getElementById("main-menu");
	if (mobileMenuBtn.classList.contains('close')) {
		// открываем
		mobileMenuBtn.classList.remove('close');
		mobileMenuBtn.classList.add('open');
		mainMenu.style.display = 'block';
	}
	else {
		// закрываем
		mobileMenuBtn.classList.remove('open');
		mobileMenuBtn.classList.add('close');
		mainMenu.style.display = 'none';
	}
}

function toggleAboutSubmenu() {
	var submenu = document.getElementById("about-submenu");
	if (submenu.style.display=="none") {
		// открываем
		submenu.style.display = 'block';
	}
	else {
		// закрываем
		submenu.style.display = 'none';
	}
}

function showMenu() {
	if (document.documentElement.clientWidth>=751) {
		document.getElementById("main-menu").style.display = 'block';
	}
}


window.onload = function () {

	document.getElementById("mobile-menu").addEventListener('click', toggleMobileMenu);
	document.getElementById("about-item").addEventListener('click', toggleAboutSubmenu);
	window.addEventListener("resize", showMenu);

}

