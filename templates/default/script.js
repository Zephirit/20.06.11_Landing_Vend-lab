window.onload = () => {
	console.log("Страница загружена")
	const _navListener = () => {
		const burger = document.getElementById('burger')
		const navigation = document.querySelector('.navigation')
		const navClose = document.getElementById('nav-close');
		burger.addEventListener('click', (e) => {
			e.preventDefault()
			console.log(1)
			navigation.classList.toggle('active')
		})
		navClose.addEventListener('click', (e) => {
			e.preventDefault()
			navigation.classList.remove('active')
		})
	}
	const _previewSlider = () => {
		$('.previewSlick').slick({
			nextArrow: "<div class='slick-next'><img src='./templates/default/images/slider_arrow.png' alt='next'></div>",
			prevArrow: "<div class='slick-prev'><img src='./templates/default/images/slider_arrow.png' alt='prev'></div>",
			dots: true
		});
	}
	const _activatePreviewMore = ()=>{
		const previewMore = document.querySelector('.previewFree__more')
		previewMore.addEventListener('click',(e)=>{
			e.preventDefault()
			console.log(1)
			previewMore.classList.toggle('active')
		})
	}
	
	const _init = () => {
		_navListener()
		_previewSlider()
		_activatePreviewMore()
	}
	_init()
}