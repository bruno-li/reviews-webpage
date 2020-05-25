const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// add event listner only if modal is render in the DOM
if (modalBtn) {
	modalBtn.addEventListener('click', () => {
		modalOverlay.classList.add('open-modal');
	});

	closeBtn.addEventListener('click', () => {
		modalOverlay.classList.remove('open-modal');
	});
}
