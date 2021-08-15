$(function () {
	// Fullpage
	if ($(window).width() >= 1200) {
		fullpageInit()
	}

	function fullpageInit() {
		$('#fullpage').fullpage({
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			menu: '#tastes',
			anchors: [
				'watermelon',
				'tropical',
				'strawberry',
				'cherry',
				'spearmint',
				'papermint',
				'ice',
				'eucalyptus'
			],
			scrollingSpeed: 1000,
			onLeave: (_, destination) => {
				const section = destination.item
				const title = section.querySelector('.taste-block__title')
				title.innerHTML = title.textContent.replace(
					/\S/g,
					"<span class='letter'>$&</span>"
				)
				const letters = section.querySelectorAll('.letter')
				const tl = new TimelineMax()
				tl.staggerFrom(
					letters,
					0.5,
					{ opacity: 0, ease: Power4.easeInOut },
					0.05,
					0.5
				)

				tl.fromTo(
					'.taste-block__image-main',
					0.5,
					{ x: -200, opacity: 0 },
					{ x: 0, opacity: 1 },
					0.5
				)
				tl.fromTo(
					'.taste-block__image-sub',
					0.5,
					{ x: 200, opacity: 0 },
					{ x: 0, opacity: 1 },
					0.5
				)
			}
		})
	}

	// Other packages block
	const otherPackagesTM = new TimelineMax()

	otherPackagesTM.fromTo(
		'.other-packages',
		{ opacity: 0, visibility: 'hidden' },
		{ opacity: 1, visibility: 'visible', duration: 0.1 }
	)

	otherPackagesTM.fromTo(
		'.other-packages__wrap',
		{ y: 200, opacity: 0 },
		{ y: 0, opacity: 1, duration: 0.3 }
	)

	otherPackagesTM.reverse()

	$('.page-packages__other-packages').on('click', (e) => {
		e.preventDefault()
		otherPackagesTM.reversed(!otherPackagesTM.reversed())
	})

	$('.other-packages__close').on('click', () => {
		otherPackagesTM.reversed(!otherPackagesTM.reversed())
	})

	// Hamb
	const menuTl = new TimelineMax()

	menuTl.fromTo(
		'.menu',
		{
			opacity: 0,
			x: 400,
			visibility: 'hidden'
		},
		{
			opacity: 1,
			x: 0,
			visibility: 'visible',
			duration: 0.3
		}
	)

	menuTl.reverse()

	$('.hamb').on('click', (e) => {
		e.preventDefault()
		menuTl.reversed(!menuTl.reversed())
	})

	$('.menu__close').on('click', (e) => {
		e.preventDefault()
		menuTl.reversed(!menuTl.reversed())
	})

	const popup = $('.popup')
	$('.hero__button').on('click', (e) => {
		e.preventDefault()

		popup.addClass('active')
	})

	$('.popup__icon').on('click', () => {
		popup.removeClass('active')
	})

	// Owl carousel
	// const sliderBtn = [
	// 	`
	// 	<svg width="128" height="101" viewBox="0 0 128 101" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 	<g filter="url(#filter0_d)">
	// 	<path fill-rule="evenodd" clip-rule="evenodd" d="M52.9308 59.9256C53.244 59.6144 53.4925 59.2448 53.6621 58.8378C53.8316 58.4308 53.9189 57.9945 53.9189 57.5538C53.9189 57.1132 53.8316 56.6769 53.6621 56.2699C53.4925 55.8629 53.244 55.4932 52.9308 55.1821L35.1252 37.454L52.9308 19.726C53.5624 19.0969 53.9172 18.2438 53.9172 17.3542C53.9172 16.4646 53.5624 15.6115 52.9308 14.9824C52.2993 14.3534 51.4427 14 50.5495 14C49.6564 14 48.7998 14.3534 48.1683 14.9824L27.9881 35.0822C27.6749 35.3934 27.4264 35.7631 27.2568 36.1701C27.0873 36.5771 27 37.0134 27 37.454C27 37.8947 27.0873 38.331 27.2568 38.7379C27.4264 39.1449 27.6749 39.5146 27.9881 39.8258L48.1683 59.9256C48.4807 60.2376 48.8519 60.4851 49.2605 60.654C49.6691 60.8229 50.1071 60.9098 50.5495 60.9098C50.9919 60.9098 51.43 60.8229 51.8386 60.654C52.2472 60.4851 52.6184 60.2376 52.9308 59.9256Z" fill="white"/>
	// 	<path fill-rule="evenodd" clip-rule="evenodd" d="M101 37.4533C101 36.5649 100.646 35.7128 100.015 35.0846C99.3841 34.4563 98.5287 34.1034 97.6366 34.1034L37.0961 34.1034C36.2041 34.1034 35.3486 34.4563 34.7179 35.0846C34.0871 35.7128 33.7328 36.5649 33.7328 37.4533C33.7328 38.3418 34.0871 39.1938 34.7179 39.8221C35.3486 40.4503 36.2041 40.8032 37.0961 40.8032L97.6366 40.8032C98.5287 40.8032 99.3841 40.4503 100.015 39.8221C100.646 39.1938 101 38.3418 101 37.4533Z" fill="white"/>
	// 	</g>
	// 	<defs>
	// 	<filter id="filter0_d" x="0" y="0" width="128" height="100.91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	// 	<feFlood flood-opacity="0" result="BackgroundImageFix"/>
	// 	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
	// 	<feOffset dy="13"/>
	// 	<feGaussianBlur stdDeviation="13.5"/>
	// 	<feColorMatrix type="matrix" values="0 0 0 0 0.823529 0 0 0 0 0.486275 0 0 0 0 0.682353 0 0 0 1 0"/>
	// 	<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
	// 	<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
	// 	</filter>
	// 	</defs>
	// 	</svg>
	// 	`,
	// 	`
	// 	<svg width="128" height="101" viewBox="0 0 128 101" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 	<g filter="url(#filter0_d)">
	// 	<path fill-rule="evenodd" clip-rule="evenodd" d="M75.0692 59.9256C74.7559 59.6144 74.5074 59.2448 74.3379 58.8378C74.1683 58.4308 74.0811 57.9945 74.0811 57.5538C74.0811 57.1132 74.1683 56.6769 74.3379 56.2699C74.5074 55.8629 74.7559 55.4932 75.0692 55.1821L92.8748 37.454L75.0692 19.726C74.4376 19.0969 74.0828 18.2438 74.0828 17.3542C74.0828 16.4646 74.4376 15.6115 75.0692 14.9824C75.7007 14.3534 76.5573 14 77.4504 14C78.3436 14 79.2001 14.3534 79.8317 14.9824L100.012 35.0822C100.325 35.3934 100.574 35.7631 100.743 36.1701C100.913 36.5771 101 37.0134 101 37.454C101 37.8947 100.913 38.331 100.743 38.7379C100.574 39.1449 100.325 39.5146 100.012 39.8258L79.8317 59.9256C79.5193 60.2376 79.1481 60.4851 78.7395 60.654C78.3309 60.8229 77.8928 60.9098 77.4504 60.9098C77.008 60.9098 76.57 60.8229 76.1614 60.654C75.7527 60.4851 75.3816 60.2376 75.0692 59.9256Z" fill="white"/>
	// 	<path fill-rule="evenodd" clip-rule="evenodd" d="M27 37.4533C27 36.5649 27.3544 35.7128 27.9851 35.0846C28.6159 34.4563 29.4713 34.1034 30.3634 34.1034L90.9039 34.1034C91.7959 34.1034 92.6514 34.4563 93.2821 35.0846C93.9129 35.7128 94.2672 36.5649 94.2672 37.4533C94.2672 38.3418 93.9129 39.1938 93.2821 39.8221C92.6514 40.4503 91.7959 40.8032 90.9039 40.8032L30.3634 40.8032C29.4713 40.8032 28.6159 40.4503 27.9851 39.8221C27.3544 39.1938 27 38.3418 27 37.4533Z" fill="white"/>
	// 	</g>
	// 	<defs>
	// 	<filter id="filter0_d" x="0" y="0" width="128" height="100.91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	// 	<feFlood flood-opacity="0" result="BackgroundImageFix"/>
	// 	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
	// 	<feOffset dy="13"/>
	// 	<feGaussianBlur stdDeviation="13.5"/>
	// 	<feColorMatrix type="matrix" values="0 0 0 0 0.823529 0 0 0 0 0.486275 0 0 0 0 0.682353 0 0 0 1 0"/>
	// 	<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
	// 	<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
	// 	</filter>
	// 	</defs>
	// 	</svg>
	// 	`
	// ]

	// $('.main-slider').owlCarousel({
	// 	items: 1,
	// 	nav: true,
	// 	navText: sliderBtn
	// })
})
