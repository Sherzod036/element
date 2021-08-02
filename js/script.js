$(function () {
	const popup = $(".popup");
	$(".hero__button").on("click", (e) => {
		e.preventDefault();

		popup.addClass("active");
	});

	$(".popup__icon").on("click", () => {
		popup.removeClass("active");
	});
});
