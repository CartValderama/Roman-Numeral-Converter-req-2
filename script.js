const inputNumber = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")

const reference = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
]

const convertToRoman = (number) => {
    const result = []

    reference.forEach((ref) => {
        while (number >= ref[1]) {
          result.push(ref[0]);
          number -= ref[1];
        }
      });

    output.innerText = result.join("")
    return result.join("")
}

const inputValidator = (number) => {
    let errMsg = ""

    if (number == "") {
        errMsg = "Please enter a valid number";
    } else if (number < 0) {
        errMsg = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        errMsg = "Please enter a number less than or equal to 3999";
    } else {
        return true;
    }


    output.innerText = errMsg
    return false;
}

const convert = () => {
    const inputVal = inputNumber.value
    if(inputValidator(inputVal)) convertToRoman(inputVal)
}

convertBtn.addEventListener("click", convert)
inputNumber.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        convert()
    }
})
