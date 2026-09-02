function input_amount() {
    var AMOUNT = document.getElementById("amount").value;
    var error = document.getElementById("amount_error");
    if (AMOUNT == "") {
        error.innerHTML = "plz enter the amount";
        document.getElementsByClassName("box")[0].style.display = "none";
        document.getElementById("rate").value = "";
        document.getElementById("year").value = "";
        document.getElementById("o_p").innerHTML = "";
        document.getElementById("A_interest").innerHTML = "";
        document.getElementById("total_month").innerHTML = "";
        document.getElementById("monthly_emi").innerHTML = "";
        document.getElementById("total_interest").innerHTML = "";
        document.getElementById("total_amount").innerHTML = "";
    }
    else {
        error.innerHTML = "";
    }
}

function input_rate() {
    var RATE = document.getElementById("rate").value;
    var error = document.getElementById("rate_error");
    if (RATE == "") {
        error.innerHTML = "plz enter the rate";
        document.getElementById("year").value = "";
        document.getElementsByClassName("box")[0].style.display = "none";
        document.getElementById("year").value = "";
        document.getElementById("o_p").innerHTML = "";
        document.getElementById("A_interest").innerHTML = "";
        document.getElementById("total_month").innerHTML = "";
        document.getElementById("monthly_emi").innerHTML = "";
        document.getElementById("total_interest").innerHTML = "";
        document.getElementById("total_amount").innerHTML = "";
    }
    else {
        error.innerHTML = "";
    }
}
function input_year() {
    var YEAR = document.getElementById("year").value;
    var error = document.getElementById("year_error");
    if (YEAR == "") {
        error.innerHTML = "plz enter the year";
        document.getElementsByClassName("box")[0].style.display = "none";
        document.getElementById("o_p").innerHTML = "";
        document.getElementById("A_interest").innerHTML = "";
        document.getElementById("total_month").innerHTML = "";
        document.getElementById("monthly_emi").innerHTML = "";
        document.getElementById("total_interest").innerHTML = "";
        document.getElementById("total_amount").innerHTML = "";
    }
    else {
        error.innerHTML = "";
    }
}
function input_num(input) {

    var error = document.getElementById("amount_error");

    input.value = input.value.replace(/\D/g, "");  // remove characters
    input.value = input.value.replace(/^0+/, "");  // remove starting zeros

    error.innerHTML = input.value ? "" : "Enter valid number";
}
function number_allow(input) {
    var error = document.getElementById("rate_error");

    input.value = input.value.replace(/\D/g, "");  // remove characters
    input.value = input.value.replace(/^0+/, "");  // remove starting zeros

    error.innerHTML = input.value ? "" : "Enter valid number";
}

function num_only(input) {
    var error = document.getElementById("year_error");

    input.value = input.value.replace(/\D/g, "");  // remove characters
    input.value = input.value.replace(/^0+/, "");  // remove starting zeros
    error.innerHTML = input.value ? "" : "Enter valid number";
}

function click_btn() {
    var BUTTON = document.getElementById("btn");
    var AMOUNT = document.getElementById("amount").value;
    var RATE = document.getElementById("rate").value;
    var YEAR = document.getElementById("year").value;
    if (AMOUNT == "" || RATE == "" || YEAR == "" || parseInt(AMOUNT) === 0 || parseInt(RATE) === 0 || parseInt(YEAR) === 0) {
        BUTTON.disabled = true;
        return false;
    }
    BUTTON.disabled = false;

}

function format() {
    var input = document.getElementById("amount");
    var value = input.value;
    value = value.replace(/,/g, '');
    if (value == "") return;

    var lastThree = value.substring(value.length - 3);
    var otherNumbers = value.substring(0, value.length - 3);
    if (otherNumbers != '') {
        lastThree = ',' + lastThree;
    }
    var formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    input.value = formatted;
}

function calculate_emi() {
    var p = parseFloat(document.getElementById("amount").value.replace(/,/g, ""));
    var YEAR = parseFloat(document.getElementById("year").value);
    var Annual_rate = parseFloat(document.getElementById("rate").value);

    // Validation
    if (!p || !YEAR || YEAR <= 0 || p <= 0) {
        alert("Please enter valid values");
        return;
    }


    var n = YEAR * 12;
    var r = Annual_rate / (12 * 100);
    var EMI;
    if (Annual_rate === 0) {
        EMI = p / n;
    } else {
        EMI = (p * r * Math.pow(1 + r, n)) /
            (Math.pow(1 + r, n) - 1);
    }

    var total_payment = EMI * n;
    var total_interest = total_payment - p;

    document.getElementById("o_p").innerHTML = p;
    document.getElementById("A_interest").innerHTML = Annual_rate + "%";
    document.getElementById("total_month").innerHTML = n;
    document.getElementById("monthly_emi").innerHTML = Math.round(EMI);
    document.getElementById("total_interest").innerHTML = Math.round(total_interest);
    document.getElementById("total_amount").innerHTML = Math.round(total_payment);
    var words = convertToWords(Math.round(p));
    document.getElementById("amount_word").innerHTML = words + "rupees only";
    document.getElementById("rate_word").innerHTML = convertToWords(Math.round(Annual_rate)) + "%";
    document.getElementById("month_word").innerHTML = convertToWords(Math.round(n));
    document.getElementById("emi_word").innerHTML = convertToWords(Math.round(EMI));
    document.getElementById("total_interest_word").innerHTML = convertToWords(Math.round(total_interest));
    document.getElementById("amount_payble_word").innerHTML = convertToWords(Math.round(total_payment));

    var tbody = document.getElementById("table_body");
    var balance = p;
    tbody.innerHTML = "";

    for (var i = 1; i <= n; i++) {
        var interest = balance * r;
        var principal = EMI - interest;
        balance = balance - principal;

        var row = "<tr>" +
            "<td>" + i + "</td>" +
            "<td>" + EMI.toFixed(2) + "</td>" +
            "<td>" + principal.toFixed(2) + "</td>" +
            "<td>" + interest.toFixed(2) + "</td>" +
            "<td>" + (balance > 0 ? balance.toFixed(2) : "0.00") + "</td>" +
            "</tr>";

        tbody.innerHTML += row;

        document.getElementById("btn_btn").style.display = "block";
        document.querySelector(".box").style.display = "block";
        document.getElementsByClassName("section")[0].style.height = "auto";
        document.getElementById("btn").disabled = true;
        // document.getElementById("amount").readOnly = true;
        // document.getElementById("rate").readOnly = true;
        // document.getElementById("year").readOnly = true;
    }
}

function convertToWords(num) {
    const ones = [" ", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];
    const tens = [" ", " ", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];

    if (num === 0) {
        return "zero";
    }
    if (num < 20) {
        return ones[num];
    }
    if (num < 100) {
        return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
    if (num < 1000) {
        return ones[Math.floor(num / 100)] + "hundred " + convertToWords(num % 100);
    }
    if (num < 100000) {
        return convertToWords(Math.floor(num / 1000)) + "thousand " + convertToWords(num % 1000);
    }
    if (num < 10000000)
        return convertToWords(Math.floor(num / 100000)) + "lakh " + convertToWords(num % 100000);
    return convertToWords(Math.floor(num / 10000000)) + "crore " + convertToWords(num % 10000000);

}

function print_btn() {
    window.print();
}