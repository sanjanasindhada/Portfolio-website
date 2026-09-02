
function run_timer() {
    setInterval(function () {
        var d = new Date();
        document.getElementById("timer").innerHTML = d.toLocaleTimeString();
        var HOURS = d.getHours();
        if (HOURS >= 4 && HOURS < 12) {
            document.getElementById("clock").innerHTML = "good morning";
            document.getElementById("clock").style.color = "red";
            document.getElementById("greeting_img").src = "gm.jpg";
        }
        else if (HOURS >= 12 && HOURS < 16) {
            document.getElementById("clock").innerHTML = "good afternoon";
            document.getElementById("clock").style.color = "pink";
            document.getElementById("greeting_img").src = "ga.jpg";
        }
        else if (HOURS >= 16 && HOURS < 19) {
            document.getElementById("clock").innerHTML = "good evening";
            document.getElementById("clock").style.color = "purple";
            document.getElementById("greeting_img").src = "ge.gif";
        }
        else {
            document.getElementById("clock").innerHTML = "good night";
            document.getElementById("clock").style.color = "black";
            document.getElementById("greeting_img").src = "gn.jpg";
        }
    }, 1000);
}
var formtimer;
var issubmit = false;
function validation() {
    var result = true;
    var UNAME = document.getElementById("uname").value;
    if (UNAME == "") {
        document.getElementById("uname_error").innerHTML = "plz fill the name";
        result = false;
    }

    var UEMAIL = document.getElementById("uemail").value;
    if (UEMAIL == "") {
        document.getElementById("uemail_error").innerHTML = "plz fill the email";
        result = false;
    }

    var UPASS = document.getElementById("upass").value;
    if (UPASS == "") {
        document.getElementById("upass_error").innerHTML = "plz fill the password";
        result = false;
    }

    var TEMP = document.getElementById("tadd").value;
    if (TEMP == "") {
        document.getElementById("tadd_error").innerHTML = "plz fill the address";
        result = false;
    }

    var PERMANENT = document.getElementById("padd").value;
    if (PERMANENT == "") {
        document.getElementById("padd_error").innerHTML = "plz fill the address";
        result = false;
    }

    var DATE = document.getElementById("fill_date").value;
    if (DATE == "") {
        document.getElementById("date_error").innerHTML = "plz fill the date";
        result = false;
    }
    var TIME = document.getElementById("fill_time").value;
    if (TIME == "") {
        document.getElementById("time_error").innerHTML = "plz fill the time";
        result = false;
    }

    var NUM = document.getElementById("unum").value;
    if (NUM == "") {
        document.getElementById("unum_error").innerHTML = "plz fill the time";
        result = false;
    }
    var CITY = document.getElementById("city").value;
    if (CITY == "") {
        document.getElementById("city_error").innerHTML = "plz fill the time";
        result = false;
    }
    var FILE = document.getElementById("file").value;
    if (FILE == "") {
        document.getElementById("file_error").innerHTML = "plz fill the time";
        result = false;
    }

    var countcheckbox = 0;
    var len = document.getElementsByName("hobby").length;
    var hobby = document.getElementsByName("hobby");
    for (var i = 0; i < len; i++) {
        if (hobby[i].checked) {
            countcheckbox++;
        }
    }
    if (countcheckbox == 0) {
        document.getElementById("checkBox_error").innerHTML = "plz check the hobbies";
        result = false;
    }
    if (countcheckbox == 1) {
        document.getElementById("checkBox_error").innerHTML = "plz check the atleast 2 hobbies";
        result = false;
    }

    var countradio = document.getElementsByName("gender").length;
    var gender = document.getElementsByName("gender");
    var radio = false;
    for (var i = 0; i < countradio; i++) {
        if (gender[i].checked == true) {
            radio = true;
        }
    }

    if (radio == false) {
        document.getElementById("radio_error").innerHTML = "plz select any one";
        result = false;
    }

    var CAPTCHA = document.getElementById("captcha_input").value;
    error = document.getElementById("captcha_error");
    if (CAPTCHA == "") {
        error.innerHTML = "plz enter the captcha";
        result = false;
    }
    else if (CAPTCHA != captchacode) {
        error.innerHTML = "captcha not matched";
        error.style.color = "red";
        result = false;
    }
    else {
        error.innerHTML = "captcha matched";
        error.style.color = "green";
    }

    return result;
}

function u_name(e) {
    var UNAME = document.getElementById("uname").value;
    var error = document.getElementById("uname_error");
    if (UNAME == "") {
        error.innerHTML = "plz fill the name";
    }
    else {
        error.innerHTML = "";
    }
}
function u_email() {
    var UEMAIL = document.getElementById("uemail").value
    var error = document.getElementById("uemail_error");
    if (UEMAIL == "") {
        error.innerHTML = "plz fill the email-id";
    }
    else {
        error.innerHTML = "";
    }
}
function u_pass() {
    var UPASS = document.getElementById("upass").value
    var error = document.getElementById("upass_error");
    if (UPASS == "") {
        error.innerHTML = "plz fill the strong password";
    }
    else {
        error.innerHTML = "";
    }
}

function t_add() {
    var TADD = document.getElementById("tadd").value;
    var error = document.getElementById("tadd_error");
    if (TADD == "") {
        error.innerHTML = "plz fill the temp address";
    }
    else {
        error.innerHTML = "";
    }
}

function p_add() {
    var PADD = document.getElementById("padd").value;
    var error = document.getElementById("padd_error");
    if (PADD == "") {
        error.innerHTML = "plz fill the address";
    }
    else {
        error.innerHTML = "";
    }
}

function u_num() {
    var UNUM = document.getElementById("unum").value;
    var error = document.getElementById("unum_error");
    if (UNUM == "") {
        error.innerHTML = "plz fill the number";
    }
    else {
        error.innerHTML = "";
    }
}
document.getElementById("unum").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
        document.getElementById("unum_error").innerHTML = "valid";
        document.getElementById("unum_error").style.color = "green";
    }

});

function fillDate() {
    var DATE = document.getElementById("fill_date").value;
    var error = document.getElementById("date_error");
    if (DATE == "") {
        error.innerHTML = "plz fill the date";
    }
    else {
        error.innerHTML = "";
    }
}

function fillTime() {
    var TIME = document.getElementById("fill_time").value;
    var error = document.getElementById("time_error");
    if (TIME == "") {
        error.innerHTML = "plz fill the time";
    }
    else {
        error.innerHTML = "";
    }
}

function select_city() {
    var UCITY = document.getElementById("city").value;
    var error = document.getElementById("city_error");
    if (UCITY == "") {
        error.innerHTML = "plz select the city";
    }
    else {
        error.innerHTML = "";
    }

}

function select_file() {
    var FILE = document.getElementById("file").value;
    var error = document.getElementById("file_error");
    if (FILE == "") {
        error.innerHTML = "plz choose the file";
    }
    else {
        error.innerHTML = "";
    }
}

function choose_gender() {
    var GENDER = document.getElementsByName("gender").value;
    var error = document.getElementById("radio_error");
    if (GENDER == "") {
        error.innerHTML = "plz select the gender";
    }
    else {
        error.innerHTML = "";
    }
}

function choose_hobby() {
    var count = 0;
    var hobby = document.getElementsByName("hobby");
    var len = document.getElementsByName("hobby").length;
    var result = false;
    for (var i = 0; i < len; i++) {
        if (hobby[i].checked)
            count++;
    }
    if (count == 1) {
        document.getElementById("checkBox_error").innerHTML = "plz select atleast 2 hobbies";
    }
    else {
        document.getElementById("checkBox_error").innerHTML = "";
    }
}


function add() {
    var PADD = document.getElementById("padd");
    var TADD = document.getElementById("tadd").value;
    var YES = document.getElementById("yes");
    if (YES.checked) {
        PADD.value = TADD;
        PADD.readOnly = true;
    }
    else {
        PADD.readOnly = false;
        PADD.value = "";
    }

}

function only_letters(e) {
    var pattern = /^[A-Za-z ]+$/;
    if (pattern.test(e.key)) {
        document.getElementById("uname_error").innerHTML = "valid"
        document.getElementById("uname_error").style.color = "green";
        return true;
    }
    else {
        document.getElementById("uname_error").innerHTML = "only char allow";
        document.getElementById("uname_error").style.color = "red";
        return false;
    }
}

function email_condition(data) {
    var PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (PATTERN.test(data)) {
        document.getElementById("uemail_error").innerHTML = "valid";
        document.getElementById("uemail_error").style.color = "green";
    }
    else {
        document.getElementById("uemail_error").innerHTML = "plzz fill the valid email-id";
        document.getElementById("uemail_error").style.color = "red";
    }
}

function show_pass() {
    document.getElementById("upass").type = "text";
    document.getElementById("slash_eye").style.display = "none";
    document.getElementById("normal_eye").style.display = "block";
}

function hide_pass() {
    document.getElementById("upass").type = "password";
    document.getElementById("slash_eye").style.display = "block";
    document.getElementById("normal_eye").style.display = "none";
}

function check(data) {
    var EightChar = new RegExp('(?=.{8,})');
    var UpperCase = new RegExp('(?=.*[A-Z])');
    var LowerCase = new RegExp('(?=.*[a-z])');
    var NumberCase = new RegExp('(?=.*[0-9])');
    var SpecialCase = new RegExp('(?=.*[!@#$%^&])');
    let count = 0;

    if (EightChar.test(data)) {
        document.getElementsByTagName("p")[0].style.color = "green";
        count++;
    }
    else {
        document.getElementsByTagName("p")[0].style.color = "grey";
    }

    if (UpperCase.test(data)) {
        document.getElementsByTagName("p")[1].style.color = "green";
        count++;
    }
    else {
        document.getElementsByTagName("p")[1].style.color = "grey";
    }

    if (LowerCase.test(data)) {
        document.getElementsByTagName("p")[2].style.color = "green";
        count++;
    }
    else {
        document.getElementsByTagName("p")[2].style.color = "grey";
    }

    if (NumberCase.test(data)) {
        document.getElementsByTagName("p")[3].style.color = "green";
        count++;
    }
    else {
        document.getElementsByTagName("p")[3].style.color = "grey";
    }

    if (SpecialCase.test(data)) {
        document.getElementsByTagName("p")[4].style.color = "green";
    }
    else {
        document.getElementsByTagName("p")[4].style.color = "grey";
    }

    var str = document.getElementById("strength");
    if (count == 0 || count == 1) {
        str.innerHTML = "weak";
        str.style.color = "red";
    }
    else if (count == 2 || count == 3) {
        str.innerHTML = "good";
        str.style.color = "orange";
    }
    else if (count == 4) {
        str.innerHTML = "strong";
        str.style.color = "green";
    }
}

function captcha_click() {
    var CAPTCHA = document.getElementById("captcha_input").value;
    if (CAPTCHA == "") {
        document.getElementById("captcha_error").innerHTML = "plz enter the captcha";
    }
}
var captchacode = "";
function generate() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    captchacode = "";
    for (var i = 0; i < 4; i++) {
        captchacode += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("captcha_text").innerHTML = captchacode;
    document.getElementById("captcha_text").value = "";
    document.getElementById("captcha_error").innerHTML = "";
    document.getElementById("captcha_text").innerHTML = captchacode;
}

function captcha_typing() {
    var error = document.getElementById("captcha_error");
    var CAPTCHA = document.getElementById("captcha_input").value;
    if (CAPTCHA == "") {
        error.innerHTML = "plz enter the captcha";
    }
    else if (CAPTCHA == captchacode) {
        error.innerHTML = "captcha matched";
        error.style.color = "green";
    }
    else {
        error.innerHTML = "captcha not matched";
        error.style.color = "red";
    }
}
var formtimer;
function startFormTime() {
    formtimer = setTimeout(function () {
        if (!issubmit) {
            document.getElementById("sad_img").style.display = "block";
        }
    }, 240000);
}


function submitform() {
    issubmit = true;
    clearTimeout(formtimer);
    document.getElementById("sad_img").style.display = "none";
}

function checkform() {
    var name = document.getElementById("uname").value;
    var email = document.getElementById("uemail").value;
    var pass = document.getElementById("upass").value;
    var date = document.getElementById("fill_date").value
    var time = document.getElementById("fill_time").value;
    var tadd = document.getElementById("tadd").value;
    var padd = document.getElementById("padd").value;
    var num = document.getElementById("unum").value;
    var city = document.getElementById("city").value;
    var file = document.getElementById("file").files.length;
    var gender = document.getElementsByName("gender");
    var captcha = document.getElementById("captcha_input").value;
    var hobby = document.getElementsByName("hobby");
    var count = 0;

    for (var i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            count++;
        }
    }
    var genderChecked = false;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderChecked = true;
            break;
        }
    }

    if (name == "" || email == "" || pass == "" || date == "" || time == "" || tadd == "" || padd == ""
        || num.length != 10 || city == "" || file == 0 || !genderChecked || captcha != captchacode || count < 2) {
        document.getElementById("sub_btn").disabled = true;
    }
    else {
        document.getElementById("sub_btn").disabled = false;
    }
}
window.onload = function () {
    run_timer();
    generate();
    startFormTime();
    var time = 240;

    var timerInterval = setInterval(function () {
        var min = Math.floor(time / 60);
        var sec = time % 60;
        if (sec < 10) sec = "0" + sec;
        document.getElementById("time").innerHTML = min + ":" + sec;
        if (time == 0) {
            clearInterval(timerInterval);
            document.getElementById("sad_img").style.display = "block";
            document.getElementById("time").style.display = "none";
            return;
        }
        time--;
    }, 1000);
};




