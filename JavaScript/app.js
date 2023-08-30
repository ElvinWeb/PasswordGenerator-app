const sliderValue = document.getElementById("sliderValue");
const slider = document.getElementById("slider");
const rangeInputs = document.querySelectorAll("input[type='range']");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");

sliderValue.textContent = slider.value;
bar1.classList.add("weak");
bar2.classList.add("weak");

slider.oninput = function () {
  sliderValue.textContent = this.value;

  const LevelTxt = document.getElementById("levelTxt");
  if (slider.value < 7) {
    LevelTxt.textContent = "too Weak!";
    bar1.classList.remove("tooWeak", "weak", "medium", "strong");
    bar2.classList.remove("tooWeak", "weak", "medium", "strong");
    bar3.classList.remove("tooWeak", "weak", "medium", "strong");
    bar4.classList.remove("tooWeak", "weak", "medium", "strong");
    bar1.classList.remove("tooweak");
    bar1.classList.add("weak");
  }
  if (slider.value < 9 && slider.value >= 7) {
    LevelTxt.textContent = "Weak";
    bar1.classList.remove("tooWeak", "weak", "medium", "strong");
    bar2.classList.remove("tooWeak", "weak", "medium", "strong");
    bar3.classList.remove("tooWeak", "weak", "medium", "strong");
    bar4.classList.remove("tooWeak", "weak", "medium", "strong");
    bar1.classList.add("weak");
    bar2.classList.add("weak");
  }
  if (slider.value < 12 && slider.value >= 9) {
    LevelTxt.textContent = "Medium";
    bar1.classList.remove("tooWeak", "weak", "medium", "strong");
    bar2.classList.remove("tooWeak", "weak", "medium", "strong");
    bar3.classList.remove("tooWeak", "weak", "medium", "strong");
    bar4.classList.remove("tooWeak", "weak", "medium", "strong");
    bar1.classList.add("medium");
    bar2.classList.add("medium");
    bar3.classList.add("medium");
  }
  if (slider.value >= 12) {
    LevelTxt.textContent = "strong";
    bar1.classList.remove("tooWeak", "weak", "medium", "strong");
    bar2.classList.remove("tooWeak", "weak", "medium", "strong");
    bar3.classList.remove("tooWeak", "weak", "medium", "strong");
    bar4.classList.remove("tooWeak", "weak", "medium", "strong");
    bar1.classList.add("strong");
    bar2.classList.add("strong");
    bar3.classList.add("strong");
    bar4.classList.add("strong");
  }
};

function handleInputChange(e) {
  let target = e.target;
  console.log(target);

  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

const copyIcon = document.getElementById("copyIcon");
const copyMsg = document.getElementById("copyMsg");
const fieldText = document.getElementById("fieldText");
copyIcon.addEventListener("click", copyField);

function copyField() {
  let copyText = fieldText.textContent;

  navigator.clipboard.writeText(copyText);
  copyMsg.style.display = "block";
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generate);

function generate(length) {
  const upperCase = document.getElementById("inclUppercase");
  const lowerCase = document.getElementById("inclLowercase");
  const numbers = document.getElementById("inclNumber");
  const symbols = document.getElementById("inclSymbol");
  const alert = document.getElementById("alert");

  if (
    upperCase.checked === false &&
    lowerCase.checked === false &&
    numbers.checked === false &&
    symbols.checked === false
  ) {
    alert.style.display = "block";
  } else {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbersChars = "0123456789";
    const symbolsChars = "@#&(§!-)^$*%+=/?";

    let chars = "";
    var length = slider.value;

    if (upperCase.checked === true) {
      chars += uppercaseChars;
    }
    if (lowerCase.checked === true) {
      chars += lowercaseChars;
    }
    if (numbers.checked === true) {
      chars += numbersChars;
    }
    if (symbols.checked === true) {
      chars += symbolsChars;
    }

    let password = "";
    let passwordLenght = length;
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < passwordLenght; i++) {
      password += chars[array[i] % chars.length];
    }
    fieldText.textContent = password;
    fieldText.style.color = "hsl( var(--clr-almostWhite) )";
    copyMsg.style.display = "none";
    alert.style.display = "none";

    return password;
  }
}
