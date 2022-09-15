(function(){
	document.addEventListener('DOMContentLoaded', function () {

		const modal = document.querySelector(".modal");
		const trigger = document.querySelector(".trigger");
		const closeButton = document.querySelector(".close-button");

		function toggleModal(ev) {
			modal.classList.toggle("show-modal");
			ev.stopPropagation();
		}
		
		closeButton.addEventListener("click", toggleModal);
		modal.addEventListener("click", toggleModal);
		

		const form = document.querySelector('.contact_form-send');
		form.addEventListener('submit', formSend);

		async function formSend(e) {
			e.preventDefault();

			let error = formValidate(form);

			let formData = new FormData(form);

			if(error === 0){
				form.classList.add('_sending');
				
				let response = await fetch('sendmail.php', {
					method: 'POST',
					body: formData
				});
				if(response.ok){
					let result = await response.json();
					alert(result.message);
					form.reset();
					form.classList.remove('_sending');
					modal.classList.add('show-modal');
				}else{
					modal.classList.add('show-modal');
					alert('не пройшов респонс');
					form.classList.remove('_sending');
				}
			}else{
				alert('Please fill in the required fields');
			}
		}


		function formValidate(form) {
			let error = 0;
			let formReq = document.querySelectorAll('._req');

			for (let index = 0; index < formReq.length; index++){
				const input = formReq[index];
				formRemoveError(input);

				if(input.classList.contains('_email')){
					if(emailTest(input)){
						formAddError(input);
						error++;
					}
				} else {
					if(input.value === '') {
						formAddError(input);
						error++;
					}
				}


			}
			return error;
		}
		function formAddError(input) {
			input.parentElement.classList.add('_error');
			input.classList.add('_error');
		}
		function formRemoveError(input) {
			input.parentElement.classList.remove('_error');
			input.classList.remove('_error');
		}
		function emailTest(input) {
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}
	});
})();