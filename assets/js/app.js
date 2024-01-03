// search_input JS
let search_input = document.getElementById('search_input');
let icon_items = document.getElementsByClassName('icon_item');
search_input.onfocus = function(){
	// console.log(icon_items);
	for(let item of icon_items){
		item.style.display = 'none';
	}
	this.style.width = '100%';
}
search_input.onblur = function(){
	// console.log(icon_items);
	for(let item of icon_items){
		item.style.display = 'block';
	}
	this.style.width = '65px';
}

// NAV bg js
let nav = document.getElementById('nav');
window.onscroll = function(){
	// 
	if(window.pageYOffset > 100){
		// console.log('hey');
		nav.classList.add('bg');
	}else{
		nav.classList.remove('bg');
	}
}

// show hide js
let menu = document.getElementById('menu');
let navbar_menu =document.getElementById('navbar-menu');

menu.onclick = function(){
	
	navbar_menu.classList.toggle('active');

	if (menu.innerHTML == `<i class="fa-solid fa-xmark"></i>`) {
		menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;	
	}else{
		menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
	}
}

// slider js
let next_btn = document.getElementById('next_btn');
let prev_btn = document.getElementById('prev_btn');
let sliders = document.getElementsByClassName('slider');
let slider_no = 1;

function next() {
	// console.log('aa');
	
	document.getElementById('slider' + slider_no).classList.remove('active');
	slider_no ++;
	if (slider_no > sliders.length) {
		slider_no = 1;
	}
	document.getElementById('slider' + slider_no).classList.add('active');
	// console.log(slider_no);

}


function prev() {
	// console.log('aa');
	
	document.getElementById('slider' + slider_no).classList.remove('active');
	slider_no --;
	if (slider_no < 1) {
		slider_no = sliders.length;
	}
	document.getElementById('slider' + slider_no).classList.add('active');
	// console.log(slider_no);

}

next_btn.onclick = next;
prev_btn.onclick = prev;

setInterval(next,3000);

// Product Filter Js
let all_btn = document.getElementById('all_btn');
let cloth_btn = document.getElementById('cloth_btn');
let watch_btn = document.getElementById('watch_btn');
let shoe_btn =document.getElementById('shoe_btn');

let cloth_cards = document.getElementsByClassName('cloth');
let watch_cards = document.getElementsByClassName('watch');
let shoe_cards = document.getElementsByClassName('shoe');

all_btn.onclick = function(){
	// alert('all btn');
	for(let cloth_card of cloth_cards){
		cloth_card.style.display = 'block';
	}
	for(let watch_card of watch_cards){
		watch_card.style.display = 'block';
	}
	for(let shoe_card of shoe_cards){
		shoe_card.style.display = 'block';
	}
	this.classList.add('active');
	cloth_btn.classList.remove('active');
	watch_btn.classList.remove('active');
	shoe_btn.classList.remove('active');

}
cloth_btn.onclick = function(){
	// alert('clot_btn');
	// console.log(cloth_cards);
	for(let cloth_card of cloth_cards){
		cloth_card.style.display = 'block';
	}
	for(let shoe_card of shoe_cards){
		shoe_card.style.display = 'none';
	}
	for(let watch_card of watch_cards){
		watch_card.style.display = 'none';
	}
	this.classList.add('active');
	all_btn.classList.remove('active');
	watch_btn.classList.remove('active');
	shoe_btn.classList.remove('active');
}
watch_btn.onclick = function(){
	// alert('watch_btn');
	// console.log(watch_cards);
	for(let watch_card of watch_cards){
		watch_card.style.display = 'block';
	}
	for(let shoe_card of shoe_cards){
		shoe_card.style.display = 'none';
	}
	for(let cloth_card of cloth_cards){
		cloth_card.style.display = 'none';
	}
	this.classList.add('active');
	cloth_btn.classList.remove('active');
	all_btn.classList.remove('active');
	shoe_btn.classList.remove('active');
}
shoe_btn.onclick = function(){
	// alert('shoe_btn');
	// console.log(shoe_cards);
	for(let shoe_card of shoe_cards){
		shoe_card.style.display = 'block';
	}
	for(let cloth_card of cloth_cards){
		cloth_card.style.display = 'none';
	}
	for(let watch_card of watch_cards){
		watch_card.style.display = 'none';
	}
	this.classList.add('active');
	cloth_btn.classList.remove('active');
	watch_btn.classList.remove('active');
	all_btn .classList.remove('active');
}