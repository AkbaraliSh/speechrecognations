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
	if (command === 'blue') {
		window.document.body.style.backgroundColor = 'blue';
	}
	else if (command === 'green') {
		window.document.body.style.backgroundColor = 'green';
	} else if (command === 'red') {
		window.document.body.style.backgroundColor = 'red';
	}
	console.log(command);
};

recBtn.addEventListener('click', function () {
	console.log('==== Aloqa boshlandi ====');
	rec.start();
});

