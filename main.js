let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.getElementById("totalSlides").textContent = totalSlides;

function showSlide(index) {
	slides.forEach((slide) => {
		slide.classList.remove("active");
		slide.classList.add("hidden");
	});

	slides[index].classList.remove("hidden");
	slides[index].classList.add("active", "slide-enter");

	// Update counter
	document.getElementById("currentSlide").textContent = index + 1;

	// Update progress bar
	const progress = ((index + 1) / totalSlides) * 100;
	document.getElementById("progressBar").style.width = `${progress}%`;

	// Update navigation buttons
	document.getElementById("prevBtn").disabled = index === 0;
	document.getElementById("nextBtn").disabled = index === totalSlides - 1;

	// Update next button text for last slide
	if (index === totalSlides - 1) {
		document.getElementById("nextBtn").innerHTML = "🎉 Finalizar";
	} else {
		document.getElementById("nextBtn").innerHTML = "Próximo →";
	}
}

function changeSlide(direction) {
	const newIndex = currentSlideIndex + direction;

	if (newIndex >= 0 && newIndex < totalSlides) {
		currentSlideIndex = newIndex;
		showSlide(currentSlideIndex);
	}
}

// Keyboard navigation
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
		changeSlide(-1);
	} else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
		changeSlide(1);
	}
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (event) => {
	touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", (event) => {
	touchEndX = event.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			changeSlide(1); // Swipe left - next slide
		} else {
			changeSlide(-1); // Swipe right - previous slide
		}
	}
}

// Initialize
showSlide(0);

// Auto-hide cursor after inactivity
let cursorTimeout;
document.addEventListener("mousemove", () => {
	document.body.style.cursor = "default";
	clearTimeout(cursorTimeout);
	cursorTimeout = setTimeout(() => {
		document.body.style.cursor = "none";
	}, 3000);
});
