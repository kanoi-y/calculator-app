{
  // 定数
  const result = document.getElementById("js_calculator__result");
  const bracketsLeft = document.getElementById("js_brackets_left");
  const bracketsRight = document.getElementById("js_brackets_right");
  const percent = document.getElementById("js_percent");
  const allClear = document.getElementById("js_all-clear");
  const divide = document.getElementById("js_divide");
  const times = document.getElementById("js_times");
  const minus = document.getElementById("js_minus");
  const plus = document.getElementById("js_plus");
  const decimalPoint = document.getElementById("js_decimal-point");
  const equal = document.getElementById("js_equal");

  //   nodeList
  const numbers = document.querySelectorAll(".js_number");

  //   変数

  let displayedNumbersArray = [];

  //   関数定義

//   構文的に正しいかチェックして配列を作り直す
  const checkForCorrect = letter => {

  }

  //    打った文字をスクリーンに表示する
  const displayOnScreen = (e) => {
    const typedLetter = e.target.textContent;

    // 構文的に正しいかチェックして配列を作り直す
    checkForCorrect(typedLetter);

    if (["÷", "×", "-", "+", "%", "(", ")"].includes(typedLetter)) {
      displayedNumbersArray.push(" ", typedLetter, " ");
    } else {
      displayedNumbersArray.push(typedLetter);
    }
    const displayedNumbers = displayedNumbersArray.join("");
    result.textContent = displayedNumbers;
  };

  //   0に戻す
  const allClearFunc = () => {
    result.textContent = 0;
    displayedNumbersArray = [];
  };

  // イベント定義
  numbers.forEach((number) =>
    number.addEventListener("click", displayOnScreen)
  );

  divide.addEventListener("click", displayOnScreen);
  times.addEventListener("click", displayOnScreen);
  minus.addEventListener("click", displayOnScreen);
  plus.addEventListener("click", displayOnScreen);
  percent.addEventListener("click", displayOnScreen);
  bracketsLeft.addEventListener("click", displayOnScreen);
  bracketsRight.addEventListener("click", displayOnScreen);

  allClear.addEventListener("click", allClearFunc);
}
