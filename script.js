function ToggleChecked() {
  IsChecked();
  ChangeColor();
}

function IsChecked() {
  var element = document.querySelector(".fa-moon");
  var element2 = document.querySelector(".fa-language");
  var element3 = document.getElementById("title");
  var isChecked = document.getElementById("flexSwitchCheckChecked").checked;
  if (isChecked) {
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
    element.style.color = "white";
    element2.style.color = "white";
    element3.style.color = "white";
  } else {
    element.classList.remove("fa-solid");
    element.classList.add("fa-regular");
    element.style.color = "black";
    element2.style.color = "black";
    element3.style.color = "black";
  }
}

function ChangeColor() {
  var isChecked = document.getElementById("flexSwitchCheckChecked").checked;
  if (isChecked) {
    var element = document.getElementById("background");
    element.style.backgroundColor = "black";
  } else {
    var element = document.getElementById("background");
    element.style.backgroundColor = "white";
  }
}

function Translate() {
  var sourceText = document.getElementById("sourceText").value;
  var selectLanguage = document.getElementById("select-language");
  var language = selectLanguage.value;

  var sourceLang;
  var targetLang;

  if (language === "tr") {
    sourceLang = "tr";
    targetLang = "en";
  } else if (language === "en") {
    sourceLang = "en";
    targetLang = "tr";
  }

  var url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
    sourceLang +
    "&tl=" +
    targetLang +
    "&dt=t&q=" +
    encodeURI(sourceText);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("resultText").value = data[0][0][0];
    })
    .catch((error) => {
      console.log("Çeviri hatası:", error);
    });
}
