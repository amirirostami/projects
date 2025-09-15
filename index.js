function piplain(value) {
  input = document.getElementById("display").value += value;
}

function mosaviii() {
  input = document.getElementById("display").value;

  if (input == "") {
    alert("Eror");
  } else {
    try {
      document.getElementById("display").value = eval(input);
    } catch (error) {
      alert("Eror");
    }
  }
}

function pakki() {
  input = document.getElementById("display").value = "";
}

function ooops() {
  input = document.getElementById("display").value;
  document.getElementById("display").value = input.slice(0, -1);
}






















let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn-sub");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("فیلد نباید خالی باشد");
    return;
  }

  if (!validemail(email.value)) {
    alert("ایمیل اشتباه وارد شده");
    email.value = "";
    password.value = "";
    return;
  }

  alert("ورود با موفقیت انجام شد!");

  email.value = "";
  password.value = "";
});

function validemail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

















let inp = document.getElementById("inp");
let btnn = document.getElementById("btn-jub");
let ul = document.getElementById("taskList");

window.addEventListener("load", function () {
  let comp = JSON.parse(localStorage.getItem("jup")) || [];
  comp.forEach(function (item) {
    craetlistitem(item);
  });
});

function inpvalue() {
  return inp.value;
}
inp.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    gropjup();
  }
});

btnn.addEventListener("click", gropjup);

function gropjup() {
  let valueinp = inpvalue();

  if (valueinp == "") {
    alert("نباید خالی باشد");
    return;
  }

  if (!isNaN(valueinp)) {
    alert("نباید عدد باشد");
    inp.value = "";
    return;
  }
  craetlistitem(valueinp);
  settolocal(valueinp);
  inp.value = "";
}

function craetlistitem(item) {
  let li = document.createElement("li");
  li.className = "alert alert-success alert-dismissible fade show";
  li.innerHTML = `${item}<button class="btn-close"></button>`;
  li.style.display = "block";

  let close = li.querySelector(".btn-close");
  close.addEventListener("click", function () {
    li.remove();
    removetolocal(item);
  });

  ul.appendChild(li);
}

function settolocal(item) {
  let comp = JSON.parse(localStorage.getItem("jup")) || [];
  comp.push(item);
  localStorage.setItem("jup", JSON.stringify(comp));
}

function removetolocal(item) {
  let comp = JSON.parse(localStorage.getItem("jup")) || [];
  comp = comp.filter((i) => i !== item);
  localStorage.setItem("jup", JSON.stringify(comp));
}



















let weight = document.getElementById("weight");
let height = document.getElementById("height");
let btno = document.getElementById("btn00");
let divv = document.getElementById("divv");

btno.addEventListener("click", function (x) {
  x.preventDefault();

  if (weight.value.trim() === "" || height.value.trim() === "") {
    alert("نباید خالی باشد");
    return;
  }

  let bmi = weight.value / (height.value / 100) ** 2;

  if (bmi < 18.5) {
    divv.className = "alert alert-warning";
    divv.innerHTML = `کمبود وزن - BMI: ${bmi.toFixed(2)}`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    divv.className = "alert alert-success";
    divv.innerHTML = ` وزن طبیعی - BMI: ${bmi.toFixed(2)}`;
  } else {
    divv.className = "alert alert-danger";
    divv.innerHTML = `اضافه وزن - BMI: ${bmi.toFixed(2)}`;
  }

  weight.value = "";
  height.value = "";
});
















let masafat = document.getElementById("distance");
let masrafsokht = document.getElementById("consumption");
let benzin = document.getElementById("price");
let bb = document.getElementById("canvermohaseb");
let javab = document.getElementById("javab");

bb.addEventListener("click", function (x) {
  x.preventDefault();

 
  if (
    masafat.value.trim() === "" ||
    masrafsokht.value.trim() === "" ||
    benzin.value.trim() === ""
  ) {
    alert("نباید خالی باشد");
    return;
  }



  let distance = Number(masafat.value);
  let consumption = Number(masrafsokht.value);
  let price = Number(benzin.value);

  let formol = (distance/100) * consumption * price;


    javab.className = "alert alert-info mt-3";
    javab.innerHTML =` هزینه کل سفر ${formol.toLocaleString()}  تومان`;



    masafat.value = "";
    masrafsokht.value ="" ;
    benzin.value = "";


});













document.getElementById("convertBtn").addEventListener("click", function () {
 
  let rawAmount = document.getElementById("amount").value.replace(/[,٬]/g, '');
  let amount = parseFloat(rawAmount);

  if (isNaN(amount) || amount <= 0) {
    alert("لطفاً یک مبلغ معتبر وارد کنید");
    return;
  }

 
  const usdRate = 100000;
  const eurRate = 118000;
  const aedRate = 27000;

  let usd = (amount / usdRate).toFixed(2);
  let eur = (amount / eurRate).toFixed(2);
  let aed = (amount / aedRate).toFixed(2);

  document.getElementById("usd").textContent = Number(usd).toLocaleString("en-US") + " $";
  document.getElementById("eur").textContent = Number(eur).toLocaleString("en-US") + " €";
  document.getElementById("aed").textContent = Number(aed).toLocaleString("en-US") + " درهم";

  document.getElementById("results").style.display = "block";
  document.getElementById("amount").value = "";
});



document.getElementById("amount").addEventListener("input", function () {
  let input = this;

 
  let raw = input.value.replace(/[,٬]/g, '');


  raw = toEnglishDigits(raw);

  if (!raw || isNaN(raw)) {
    input.value = '';
    return;
  }

  let formatted = Number(raw).toLocaleString('en-US'); 
  input.value = formatted;
});


function toEnglishDigits(str) {
  return str.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
}



