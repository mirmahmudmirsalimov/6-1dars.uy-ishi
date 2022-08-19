const timerForm = document.querySelector("#timer");
const elText = document.querySelector(".form__text");
const elClear = document.querySelector(".clear");

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60* MINUTE;

timerForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    const elInput = evt.target.elements.input;
    const elInputValue = elInput.value;
    if (elInputValue <= 0) {
        return alert("111");
    }
    const elHour = Math.floor(elInputValue / HOUR);
    const elMinute = Math.floor((elInputValue % HOUR) / MINUTE);
    const elSecond = Math.floor((elInputValue % MINUTE) / SECOND);
    const elMilliSecond = Math.floor((elInputValue / SECOND));

    elText.textContent = `${elHour}:hour,    ${elMinute}:minute,    ${elSecond}:second,     ${elMilliSecond}:ms`
    timerForm.reset();
});

elClear.addEventListener("click", function() {
      elText.textContent = ""
      timerForm.removeAttribute();
})
