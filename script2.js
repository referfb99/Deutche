const cardNumber = document.getElementById("card-number");
const cardHolderName = document.getElementById("card-holder-name");
const cardNameInput = document.getElementById("card-name-input");
const displayValidity = document.getElementById("validity");
const validityInput = document.getElementById("validity-input");
const cardNumberDisplay = document.querySelectorAll(".card-number-display");
const cvvInput = document.getElementById("cvv");
const cvvDisplay = document.getElementById("cvv-display");
const expiryMonthSelect = document.getElementById("expiry-month");
    const expiryYearSelect = document.getElementById("expiry-year");

let currentSpanIndex = 0;
cardNumber.addEventListener("input", () => {
  const inputNumber = cardNumber.value.replace(/\D/g, "");
  cardNumber.value = cardNumber.value.slice(0, 16).replace(/\D/g, "");
  for (let i = 0; i < cardNumberDisplay.length; i++) {
    if (i < inputNumber.length) {
      cardNumberDisplay[i].textContent = inputNumber[i];
    } else {
      cardNumberDisplay[i].textContent = "_";
    }
  }

  if (inputNumber.length <= cardNumberDisplay.length) {
    currentSpanIndex = inputNumber.length;
  } else {
    currentSpanIndex = cardNumberDisplay.length;
  }
});

cardNameInput.addEventListener("input", () => {
  if (cardNameInput.value.length < 1) {
    cardHolderName.innerText = "Your Name Here";
  } else if (cardNameInput.value.length > 30) {
    cardNameInput.value = cardNameInput.value.slice(0, 30);
  } else {
    cardHolderName.innerText = cardNameInput.value;
  }
});
// Populate the expiry year dropdown dynamically
    window.onload = () => {
      cvvInput.value = "";
      expiryMonthSelect.value = "";
      expiryYearSelect.value = "";
      cardNameInput.value = "";
      cardNumber.value = "";
      displayValidity.innerText = "MM/YY";

      const currentYear = new Date().getFullYear();
      for (let i = 0; i < 10; i++) {
        const option = document.createElement("option");
        option.value = currentYear + i;
        option.textContent = currentYear + i;
        expiryYearSelect.appendChild(option);
      }
    };

    // Update the validity display when the month or year changes
    function updateExpiryDisplay() {
      const selectedMonth = expiryMonthSelect.value;
      const selectedYear = expiryYearSelect.value.slice(2); // Get last 2 digits of the year
      if (selectedMonth && selectedYear) {
        displayValidity.innerText = `${selectedMonth}/${selectedYear}`;
      } else {
        displayValidity.innerText = "MM/YY";
      }
    }

    expiryMonthSelect.addEventListener("change", updateExpiryDisplay);
    expiryYearSelect.addEventListener("change", updateExpiryDisplay);



//cvv
cvvInput.addEventListener("input", () => {
  const userInput = cvvInput.value;
  const sanitizedInput = userInput.slice(0, 3);
  const numericInput = sanitizedInput.replace(/\D/g, "");
  cvvInput.value = numericInput;
  cvvDisplay.innerText = numericInput;
});

//Flip
cvvInput.addEventListener("click", () => {
  document.getElementById("card").style.transform = "rotateY(180deg)";
});
//Reflip card
document.addEventListener("click", () => {
  if (document.activeElement.id != "cvv") {
    document.getElementById("card").style.transform = "rotateY(0deg)";
  }
});



