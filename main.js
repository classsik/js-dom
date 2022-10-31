let ex_5 = () => {
  elem = document.getElementById("ex_5");
  alert(elem.value);
};

let ex_6 = () => {
  elem = document.getElementById("ex_6");
  elem.value = "Ой, я поменял свой текст!";
};

let ex_7 = () => {
  elem = document.getElementById("ex_7");
  elem.src = "./img/2.jpg";
};

let ex_8 = (elem) => {
  alert(elem.value);
};

let ex_9 = (elem) => {
  elem.value = "Ой, я поменял текст!";
};

let ex_10_1 = (elem) => {
  elem.value = "Ой, я поменял текст!";
};
let ex_10_2 = (elem) => {
  elem.value = "Ой, а теперь еще раз поменял!";
};

let ex_11 = (elem) => {
  elem.value = "Ку-ку";
};

let ex_12 = (elem) => {
  elem.value = "О, теперь на меня больше не нажать!";
  elem.disabled = true;
};

let ex_13_1 = (elem) => {
  elem.src = "./img/2.jpg";
};
let ex_13_2 = (elem) => {
  elem.src = "./img/1.jpg";
};

let ex_14 = () => {
  elem = document.getElementById("ex_14");
  elem.style.color = "red";
  elem.style.width = "300px";
};

let ex_15_1 = () => {
  elem = document.getElementById("ex_15");
  elem.style.display = "none";
};
let ex_15_2 = () => {
  elem = document.getElementById("ex_15");
  elem.style.display = "inline-block";
};

let ex_16 = () => {
  elem = document.getElementById("ex_16");
  elem.value = "Ой, я поменял свой текст и css!";
  elem.style.width = "300px";
  elem.style.height = "50px";
  elem.style.color = "red";
  elem.style.borderRadius = "10px";
};

let ex_17_1 = () => {
  var block = document.getElementById("ex_17_1");
  var unblock = document.getElementById("ex_17_2");
  block.value = "О, теперь на меня больше не нажать!";
  block.disabled = true;
  unblock.style.display = "block";
};
let ex_17_2 = () => {
  var block = document.getElementById("ex_17_1");
  var unblock = document.getElementById("ex_17_2");
  block.value = "О, на меня снова можно нажимать!";
  block.disabled = false;
  unblock.style.display = "none";
};

let ex_18 = (elem) => {
  elem.value = parseInt(elem.value) + 1;
};

let ex_19 = () => {
  elem = document.getElementById("ex_19");
  elem.value = "Теперь я плаваю справа!";
  elem.style.cssFloat = "right";
};

let ex_20 = () => {
  elem = document.getElementById("ex_20");
  elem.value = "Мои css классы: " + elem.className;
};

let ex_21 = () => {
  var test1 = document.getElementById("ex_21_1");
  var test2 = document.getElementById("ex_21_2");
  var tmp = test1.value;
  test1.value = test2.value;
  test2.value = tmp;
};

let ex_22 = () => {
  var test = document.getElementById("ex_22_1");
  var value = test.value;
  var result = document.getElementById("ex_22_2");
  result.value = value * value;
};

let ex_23 = () => {
  var test = document.getElementById("ex_23_1");
  var value = test.value;
  if (!isNaN(value)) {
    var result = document.getElementById("ex_23_2");
    result.value = value * value;
  } else {
    alert("Введено не число!");
  }
};

let ex_24 = (elem) => {
  elem.disabled = true;
  elem.style.cursor = "not-allowed";
};

let ex_25 = (text) => {
  var input = document.getElementById("ex_25");
  input.value = input.value + text;
};

let ex_26 = () => {
  var test = document.getElementById("ex_26");
  test.innerHTML = "Ку-ку! А я <b>жирный</b>!";
};

let ex_27 = () => {
  var test = document.getElementById("ex_27");
  test.outerHTML = "<h3>Абзац превратился в h3!</h3>";
};

let ex_28 = () => {
  var test = document.getElementById("ex_28");
  test.outerHTML = "<h3>" + test.innerHTML + "</h3>";
};

let ex_29 = () => {
  var input1 = +document.getElementById("ex_29_1").value;
  var input2 = +document.getElementById("ex_29_2").value;
  var result = document.getElementById("ex_29_3");
  result.innerHTML = input1 + input2;
};

let ex_30 = () => {
  var elements = document.getElementsByClassName("ex_30");
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "Ку-ку!";
  }
};

let ex_31 = () => {
  var elements = document.getElementsByClassName("ex_31");
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i + 1;
  }
};

let ex_32 = () => {
  var elements = document.querySelectorAll("p.ex_32");
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i + 1;
  }
};

let ex_33 = () => {
  var test = document.getElementById("ex_33");
  alert(test.getAttribute("class"));
};

let ex_34_1 = () => {
  var test = document.getElementById("ex_34");
  alert(test.getAttribute("class"));
};
let ex_34_2 = () => {
  var test = document.getElementById("ex_34");
  test.removeAttribute("class");
  alert("Класс удален! Нажмите на первую кнопку чтобы проверить это!");
};

let ex_35_1 = () => {
  var test = document.getElementById("ex_35");
  alert(test.getAttribute("class"));
};
let ex_35_2 = () => {
  var test = document.getElementById("ex_35");
  test.setAttribute("class", "new-class");
  alert("Класс изменен! Нажмите на первую кнопку чтобы проверить это!");
};

let ex_36 = (elem) => {
  var text = document.getElementById("ex_36_1");
  text.innerHTML = elem.value;
};

let ex_37 = () => {
  var elements = document.getElementsByTagName("a");
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML =
      elements[i].innerHTML + " (" + elements[i].getAttribute("href") + ")";
  }
};

let ex_38 = (elem) => {
  elem.disabled = true;
  elem.value = "О, на меня нельзя больше нажать!";
  var test = document.getElementById("ex_38");
  test.innerHTML = "Привет, мир!";
  test.style.color = "red";
};

let ex_39 = () => {
  var elements = document.getElementsByClassName("ex_39");
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i;
  }
};

let ex_40 = () => {
  var elements = document.getElementsByClassName("ex_40");
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i + ". " + elements[i].innerHTML;
  }
};
