var button = document.querySelector(".btn-hotels");
var searchForm =  document.querySelector(".booking-form");

var adults = document.querySelector("#adults");
var adultsPlus = document.querySelector(".adults-plus");
var adultsMinus = document.querySelector(".adults-minus");

var children = document.querySelector("#children");
var childrenPlus = document.querySelector(".children-plus");
var childrenMinus = document.querySelector(".children-minus");

var	arrival = document.querySelector("#arrival");
var departure = document.querySelector("#departure");


// появление и скрытие формы по клику на кнопку "поиск"
button.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchForm.classList.toggle("booking-form-hidden");
});


// плюс и минус для количества детей и взрослых
adultsPlus.addEventListener("click", function(evt) {
	adults.value++;
}
)

adultsMinus.addEventListener("click", function(evt) {
	if (adults.value>1) {
		adults.value--;
	}
}
)

childrenPlus.addEventListener("click", function(evt) {
	children.value++;
}
)

childrenMinus.addEventListener("click", function(evt) {
	if (children.value>0) {
		children.value--;
	}
}
)


// автофокус в поле и ошибка
searchForm.addEventListener("submit", function(evt) {
	if (!arrival.value || !departure.value || !adults.value) {
		evt.preventDefault();
		if (!arrival.value) {
			checkout.focus();
	}
	if (!departure.value) {
		checkin.focus();
	} else { if (!adults.value) {
		adults.focus();
	} else children.focus();
	}
}
});