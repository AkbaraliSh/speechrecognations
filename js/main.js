var rec = new webkitSpeechRecognition();

rec.lang = 'uz-UZ';

rec.onend = function () {
	console.log('==== Aloqa tugadi ====');
};

rec.onerror = function () {
	console.log('Xatolik');
};

rec.onresult = function (evt) {
	var command = evt.results[0][0].transcript;

	if (command === '1') {
		window.document.body.style.backgroundColor = 'green';
	} else if (command === '2') {
		window.document.body.style.backgroundColor = 'red';
	}
};

recBtn.addEventListener('click', function () {
	console.log('==== Aloqa boshlandi ====');
	rec.start();
});
