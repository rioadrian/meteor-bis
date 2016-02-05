Template.editProduct.onRendered( () => {
	autosize(document.querySelectorAll('.auto-size'));
	changePhoto('.img-change-photo', '.btn-change-photo', '.input-change-photo');
});

function changePhoto(img, btn, input) {
	$(btn).on('click', function(e) {
		e.preventDefault();
		$(input).click();
	});

	$(input).on('change', function() {
		readURL(this, $(img)[0]);
	});
}

function readURL(input, img) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			img.src = e.target.result;
		};
		reader.readAsDataURL(input.files[0]);
	}
}
