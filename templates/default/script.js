window.onload = () => {
	const _navListener = () => {
		const burger = document.getElementById('burger')
		const navigation = document.querySelector('.navigation')
		const navClose = document.getElementById('nav-close');
		const body = document.querySelector('.wrapper')
		burger.addEventListener('click', (e) => {
			e.preventDefault()
			navigation.classList.toggle('active')
			burger.classList.toggle('active')
			document.body.classList.toggle('notScroll')
		})
		navClose.addEventListener('click', (e) => {
			e.preventDefault()
			navigation.classList.remove('active')
			burger.classList.remove('active')
			document.body.classList.remove('notScroll')
		})
	}
	const _previewSlider = () => {
		const slick = $('.previewSlick').slick({
			nextArrow: "<div class='slick-next'><img src='./templates/default/images/slider_arrow.png' alt='next'></div>",
			prevArrow: "<div class='slick-prev'><img src='./templates/default/images/slider_arrow.png' alt='prev'></div>",
			dots: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000,
		})
		// slick.on('beforeChange', (slick) => {
		// 	console.log(slick)
		// })
	}
	const _reviewsSlider = () => {
		$('.reviewsSlick').slick({
			nextArrow: "<div class='slick-next'><img src='./templates/default/images/slider_arrow.png' alt='next'></div>",
			prevArrow: "<div class='slick-prev'><img src='./templates/default/images/slider_arrow.png' alt='prev'></div>",
			dots: true,
			autoplay: true,
			autoplaySpeed: 5000
		});
		const dots = document.querySelector('.reviewsSlick .slick-dots')
		const dotItems = dots.querySelectorAll('li')
		dotItems.forEach((dot, index) => {
			dot.style.backgroundImage = `url(./upload/images/reviews-slider/review-${index+1}.jpg)`
			dot.style.backgroundSize = `cover`
		});
	}
	const _newsSlider = () => {
		$('.news__items').slick({
			dots: true,
			slidesToShow: 1,
			infinite: true,
			mobileFirst: true,
			responsive: [{
					breakpoint: 1199,
					settings: {
						slidesToShow: 4,
						dots: false,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
						dots: false,
					}
				}
			]

		})
	}
	const _partnersSlider = () => {
		$('.partners__items').slick({
			nextArrow: "<div class='slick-next'><img src='./templates/default/images/partners_arrow.png' alt='next'></div>",
			prevArrow: "<div class='slick-prev'><img src='./templates/default/images/partners_arrow.png' alt='prev'></div>",
			infinite: true,
			speed: 300,
			centerMode: true,
			centerPadding: '10px',
			slidesToShow: 1,
			mobileFirst: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 375,
					settings: {
						slidesToShow: 2
					}
				}
			]
		})
	}
	const _activatePreviewMore = () => {
		const previewMore = document.querySelector('.previewFree__more')
		previewMore.addEventListener('click', (e) => {
			e.preventDefault()
			previewMore.classList.toggle('active')
		})
	}

	function _popup() {
		const popup = document.querySelector('#popup');
		const _popupListeners = () => {
			const triggers = document.querySelectorAll('.popupTrg');
			triggers.forEach(trg => {
				trg.addEventListener('click', e => {
					e.preventDefault();
					popup.classList.add('popup--active');
					popup.classList.remove('popup--closed');
					document.body.classList.toggle('notScroll')
				});
			});
		};

		const _destroyListener = () => {
			const closeBtn = popup.querySelector('.popup__close');
			const blurred = document.querySelector('.popup__bg');
			console.log(blurred)
			closeBtn.addEventListener('click', e => {
				e.preventDefault();
				popup.classList.remove('popup--active');
				popup.classList.add('popup--closed');
				document.body.classList.remove('notScroll')
			});
			blurred.addEventListener('click', e => {
				e.preventDefault();
				console.log(1)
				popup.classList.remove('popup--active');
				popup.classList.add('popup--closed');
				document.body.classList.remove('notScroll')
			})

		};

		const _init = () => {
			_popupListeners();
			_destroyListener();
		};
		_init();
	}
	const _init = () => {
		_navListener()
		_previewSlider()
		_reviewsSlider()
		_newsSlider()
		_partnersSlider()
		_activatePreviewMore()
		_popup()
	}
	_init()
}