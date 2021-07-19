
let navigation = document.querySelectorAll('a');
for(let i = 0; i < navigation.length; i++){
	navigation[i].addEventListener('click', function(e) {
        e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
		});
	})
}



// let navigation = document.querySelectorAll('a');
// for(let i = 0; i < navigation.length; i++){
// 	navigation[i].addEventListener('click', function(e) {
// 		console.log(this.href);
// 		let href = this.getAttribute('href').slice(1);
// 		let scrollPoint = document.getElementById(href).offsetTop;
// 		e.preventDefault();
// 		scrollDown(scrollPoint);
// 	})
// }


// function scrollDown(max){
// 	let scrollTop = document.querySelector('html').scrollTop;

// 	if(scrollTop < max){
// 		setTimeout(() => {
// 			document.querySelector('html').scrollTop += 5;
// 			scrollDown(max);
// 		}, 2);
// 	}
// }

