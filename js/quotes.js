function generator() {
	let gen = {
		"В. Гюго": "Величайшее в жизни счастье — это уверенность в том, что нас любят, любят за то, что мы такие, какие мы есть, или несмотря на то, что мы такие, какие мы есть",
		"Thomas A. Edison": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
		"Sigmund Freud": "When inspiration does not come to me, I go halfway to meet it.Sigmund Freud",
		"П. Коэльо": "Если ты чего-то очень хочешь, вся Вселенная будет способствовать тому, чтобы твоё желание сбылось",
		"И.-В. Гёте": "Если все сложилось не так, как вы ожидали, не расстраивайтесь. Божьи планы всегда лучше наших",
		"Лао-Цзы": "Никогда не осуждайте человека, пока не пройдете долгий путь в его ботинках",
		"А. Шопенгауэр": "Картина которую ты видишь в своем разуме, со временем станет твоей жизнью",
	}
	let authors = Object.keys(gen)//Саздаем  масив из свойств объекта 
	let author = authors[Math.floor(Math.random() * authors.length)];//Выбираем слуйчаным оброзом из масива элименты (СВОЙСТВА ОБЪЕКТА)
	let qute = gen[author];//Оброшаемся к  объекту подставля его ключи (свойства) и присваеваем в переменную

	document.getElementById("quotes_id").innerHTML = qute; //отправлем на страницу 
	document.getElementById("autor_id").innerHTML = author;//отправлем на страницу 
}
