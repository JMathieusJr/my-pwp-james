$(document).ready(function () {

	$('#contact').validate({
		debug: true,
		errorClass: 'alert alert-danger',
		errorLabelContainer: '#output-area',
		errorElement: 'div',

		// rules here define what is good or bad input
		//each rule starts with the form input element's NAME attribute
		rules: {
			name: {
				required: true,
			},
			email: {
				email: true,
				required: true,
			},
			message: {
				required: true,
				maxlength: 2000,
			},
		},
		//error message to display to the end user when rules above dont pass
		messages: {
			name: {
				required: 'Name is a required field',
			},
			email: {
				required: 'Email is a required field',
				email: 'Please provide a valid email address',

			},
			message: {
				required: 'Message is a required field',
				maxlength: 'Message is to long',
			},

		},
		submitHandler: function (form) {
			$("#contact").ajaxSubmit({
				type: "POST",
				url: $('#contact').attr('action'),
				success: function (ajaxOutput) {
					$("#output-area").css("display", "")
					$("#output-area").html(ajaxOutput)

					if($(".alert-success").length >= 1) {
						$("#contact")[0].reset()

					}

				}

			})

		}

	})

})

//get modal element
let modal = document.getElementById("simple-modal");
//get open modal button
let modalBtn = document.getElementById("modal-btn");
//git close button
let closeBtn = document.getElementsByClassName("close")[0];

//listen for open click
modalBtn.addEventListener("click", openModal);
//listen for close click
closeBtn.addEventListener("click", closeModal);
//listen for outside click
window.addEventListener("click", clickOutside);

//prevent refresh on button click
document.querySelector('#modal-btn').addEventListener('click', function(event) {
	event.preventDefault();
});

//function to open modal
function openModal() {
	modal.style.display = "block";
}

//function to close modal
function closeModal () {
	modal.style.display = "none";
}

//function outside click
function clickOutside(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
}


