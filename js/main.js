const footerYear = document.querySelector('.footer__year');
const nav = document.querySelector('.nav__mobile');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__mobile-item');
const navBtnBars = document.querySelector('.burger-btn__bars');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const handleNav = () => {
	nav.classList.toggle('nav__mobile--active');

	allNavItems.forEach(element => {
		element.addEventListener('click', () => {
			nav.classList.remove('nav__mobile--active');
		});
	});
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};


handleCurrentYear();
navBtn.addEventListener('click', handleNav);

// /**
//  * @license
//  * Copyright 2019 Google LLC. All Rights Reserved.
//  * SPDX-License-Identifier: Apache-2.0
//  */
// // Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.querySelector(".contact__map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();