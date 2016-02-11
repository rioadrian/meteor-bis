Template.changePhoto.onRendered( () => {
	cropInit();
});

function cropInit() {
	var console = window.console || { log: function () {} };
	var $image = $('#image');
	var $dataX = $('#dataX');
	var $dataY = $('#dataY');
	var $dataHeight = $('#dataHeight');
	var $dataWidth = $('#dataWidth');
	var $dataRotate = $('#dataRotate');
	var $dataScaleX = $('#dataScaleX');
	var $dataScaleY = $('#dataScaleY');
	var options = {
	    viewMode: 1,
	    dragMode: 'move',
	    aspectRatio: parseInt($image.data('aspect-ratio')),
	    guides: false,
	    highlight: false,
	    // autoCropArea: 1,
	    cropBoxMovable: false,
	    cropBoxResizable: false,
	    toggleDragModeOnDblclick: false,
	    crop: function (e) {
				$dataX.val(Math.round(e.x));
				$dataY.val(Math.round(e.y));
				$dataHeight.val(Math.round(e.height));
				$dataWidth.val(Math.round(e.width));
				$dataRotate.val(e.rotate);
				$dataScaleX.val(e.scaleX);
				$dataScaleY.val(e.scaleY);
			}
	};

	// Cropper
	$image.on({
		'build.cropper': function (e) {
			// console.log(e.type);
		},
		'built.cropper': function (e) {
			// console.log(e.type);
		},
		'cropstart.cropper': function (e) {
			// console.log(e.type, e.action);
		},
		'cropmove.cropper': function (e) {
			// console.log(e.type, e.action);
		},
		'cropend.cropper': function (e) {
			// console.log(e.type, e.action);
		},
		'crop.cropper': function (e) {
			// console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
		},
		'zoom.cropper': function (e) {
			// console.log(e.type, e.ratio);
		}
	}).cropper(options);

	$('.btn-rotate, .btn-crop').addClass('btn-none');

	// Buttons
	if (!$.isFunction(document.createElement('canvas').getContext)) {
		$('button[data-method="getCroppedCanvas"]').prop('disabled', true);
	}

	if (typeof document.createElement('cropper').style.transition === 'undefined') {
		$('button[data-method="rotate"]').prop('disabled', true);
		$('button[data-method="scale"]').prop('disabled', true);
	}

	// Methods
	$('.crop-acts').on('click', '[data-method]', function () {
		var $this = $(this);
		var data = $this.data();
		var $target;
		var result;

		if ($this.prop('disabled') || $this.hasClass('disabled')) {
			return;
		}

		if ($image.data('cropper') && data.method) {
			data = $.extend({}, data); // Clone a new one

			if (typeof data.target !== 'undefined') {
				$target = $(data.target);

				if (typeof data.option === 'undefined') {
					try {
						data.option = JSON.parse($target.val());
					} catch (e) {
						// console.log(e.message);
					}
				}
			}

			result = $image.cropper(data.method, data.option, data.secondOption);

			switch (data.method) {
				case 'scaleX':
				case 'scaleY':
					$(this).data('option', -data.option);
					break;

				case 'getCroppedCanvas':
					if (result) {
						cropIt(data, result);
					}
					break;
			}

			if ($.isPlainObject(result) && $target) {
				try {
					$target.val(JSON.stringify(result));
				} catch (e) {
					// console.log(e.message);
				}
			}

		}
	});

	// Import image
	var $inputImage = $('#inputImage');
	var URL = window.URL || window.webkitURL;
	var blobURL, dataURL;

	if (URL) {
		$inputImage.change(function() {
			var files = this.files;
			var file;
			var opts = {};

			if (!$image.data('cropper')) {
				return;
			}

			if (files && files.length) {
				file = files[0];

				if (/^image\/\w+$/.test(file.type)) {
					loadImage.parseMetaData(file, function(data) {
						if (data.exif && data.exif.get('Orientation') > 1) {
							opts.orientation = data.exif.get('Orientation');
							loadImage(file, function(canvas) {
								dataURL = canvas.toDataURL();
								$image.one('built.cropper', function () {
									URL.revokeObjectURL(dataURL);
								}).cropper('reset').cropper('replace', dataURL);
								$inputImage.val('');
							}, opts);
						} else {
							blobURL = URL.createObjectURL(file);
							$image.one('built.cropper', function () {
								URL.revokeObjectURL(blobURL);
							}).cropper('reset').cropper('replace', blobURL);
							$inputImage.val('');
						}
					});
					cropSet(file);
				} else {
					window.alert('Please choose an image file.');
				}
			}
		});
	} else {
		$inputImage.prop('disabled', true).parent().addClass('disabled');
	}
}

function cropSet(file) {
	$('.btn-rotate, .btn-crop').removeClass('btn-none');

	var opts = $('.btn-crop').data('option');
	    opts.type = file.type; // 'png'; // file.split('.').pop();

	var name;
	var media = opts.mediaType;

	if (media > 0 && media < 4) {
		name = Meteor.userId();
		opts.name = name;

		if (media == 2) {
			opts.name = name + '_cover ';
		}

		if (media == 3) {
			opts.name = name + '_photos';
		}
	}

	$('.btn-crop').data('option', opts);
}

function cropIt(data, canvas) {
	$('.btn-crop').addClass('disabled');
	$('.btn-disable').click();
	$('.btn-upload, .btn-rotate').addClass('btn-none');

	var paramMap = {};
	    paramMap = data.option;
	    paramMap.name = paramMap.name;
	    paramMap.base64 = canvas.toDataURL();
	    paramMap.timestamp = new Date().getTime();

	console.log(paramMap);
	// window.open(paramMap.base64, '_blank');

	var datas = new FormData();

	datas.append('public_id', paramMap.name + '_' + paramMap.timestamp);
	datas.append('file', paramMap.base64);
	datas.append('timestamp', paramMap.timestamp);
	datas.append('api_key', '599544481427616');
	datas.append('upload_preset', 'gacloud');

	$.ajax({
		method: 'POST',
		url: 'https://api.cloudinary.com/v1_1/gacloud/image/upload',
		data: datas,
		processData: false,
		contentType: false
	})
	.done(function(response) {
		console.log(response);
		window.open(response.url, '_blank');
	})
	.fail(function(response, status) {
		console.log(response, status);
	});
}
