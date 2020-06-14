window.onload = () => {
	const _navListener = () => {
		const burger = document.getElementById('burger')
		const navigation = document.querySelector('.navigation')
		const navClose = document.getElementById('nav-close');
		burger.addEventListener('click', (e) => {
			e.preventDefault()
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
			dots: true,
			fade: true,
			mobileFirst: true
		});
	}
	const _reviewsSlider = () => {
		$('.reviewsSlick').slick({
			nextArrow: "<div class='slick-next'><img src='./templates/default/images/slider_arrow.png' alt='next'></div>",
			prevArrow: "<div class='slick-prev'><img src='./templates/default/images/slider_arrow.png' alt='prev'></div>",
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000
		});
		const dots = document.querySelector('.reviewsSlick .slick-dots')
		const dotItems = dots.querySelectorAll('li')
		dotItems.forEach((dot, index) => {
			dot.style.backgroundImage = `url(./upload/images/reviews-slider/review-${index+1}.jpg)`
			dot.style.backgroundSize = `cover`
		});
	}
	const _newsSlider = () => {
		if (window.innerWidth < 768) {
			$('.news__items').slick({
				dots: true
			})
		}
	}
	const _activatePreviewMore = () => {
		const previewMore = document.querySelector('.previewFree__more')
		previewMore.addEventListener('click', (e) => {
			e.preventDefault()
			previewMore.classList.toggle('active')
		})
	}

	const _init = () => {
		_navListener()
		_previewSlider()
		_reviewsSlider()
		_newsSlider()
		_activatePreviewMore()
	}
	_init()
}