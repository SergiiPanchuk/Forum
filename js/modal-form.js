(function (){
	const modal = document.querySelector(".modal");
	const trigger = document.querySelector(".trigger");
	const closeButton = document.querySelector(".close-button");


	function toggleModal() {
		modal.classList.toggle("show-modal");
		event.stopPropagation();
	}

	function showModal() {
		event.preventDefault();
		let error = 0;
		let formReq = document.querySelectorAll('._req')
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			if(input.value === ''){
				error++;
			}
		}
		if(error === 0){
			toggleModal();
		}
		
	}

	trigger.addEventListener("click", showModal);
	closeButton.addEventListener("click", toggleModal);
	modal.addEventListener("click", toggleModal);
	
})();
