function validateForm() {
    var result = true
    //name
    var NAME = document.getElementById("Name");
    var name_error = document.getElementById("name_error")
    if (NAME.value == "") {
        name_error.innerText = "Enter your name";
        result = false;
    }
    else {
        name_error.innerText = "";
    }


    //email
    var EMAIL = document.getElementById("Email");
    var email_error = document.getElementById("email_error");
    if (EMAIL.value == "") {
        email_error.innerHTML = "Enter your email_id";
        result = false;
    }
    else {
        email_error.innerHTML = "";
    }

    //password
    var PASS = document.getElementById("Pass");
    var error = document.getElementById("pass_error");
    if (PASS.value == "") {
        error.innerHTML = "Enter the password";
        result = false;
    }
    else {
        error.innerHTML = "";
    }

    //date
    var DATE = document.getElementById("Date");
    var date_error = document.getElementById("date_error");
    if (DATE.value == "") {
        date_error.innerHTML = "Enter the date";
        result = false;
    } else {
        date_error.innerHTML = ""
    }
    //radio
    var RADIO = document.getElementsByName("gender");
    var gender_error = document.getElementById("radio_error");
    var selected = false;
    for (var i = 0; i < RADIO.length; i++) {
        if (RADIO[i].checked) {
            selected = true;
        }
    }
    if (!selected) {
        gender_error.innerHTML = "choose the gender";
        result = false;
    }
    else {
        gender_error.innerHTML = "";
    }
    //img
    var IMG = document.getElementById("img_input");
    var img_error = document.getElementById("img_error");
    if (IMG.value == "") {
        img_error.innerHTML = "upload the image";
        result = false;
    } else {
        img_error.innerHTML = ""
    }

    return result;
}

function fill_name() {
    var NAME = document.getElementById("Name");
    var name_error = document.getElementById("name_error")
    if (NAME.value == "") {
        name_error.innerText = "Enter your name";
    }
    else {
        name_error.innerText = "";
    }

    NAME.value = NAME.value.replace(/[^a-zA-Z ]/g, "");
    if (NAME.value == "") {
        name_error.innerHTML = "only char allow";
    }
    else {
        name_error.innerHTML = "";
    }
    checkAllFields()
}

function fill_email() {
    var EMAIL = document.getElementById("Email");
    var email_error = document.getElementById("email_error");
    if (EMAIL.value == "") {
        email_error.innerHTML = "Enter your email_id";
    }
    else {
        email_error.innerHTML = "";
    }

    var PATTERN = /[A-Za-z]{2,}[0-9]{1,}[@]{1}[A-Za-z]{3,}[.]{1}[A-Za-z]{2,}/;
    if (PATTERN.test(EMAIL.value)) {
        email_error.innerHTML = "valid email id";
        email_error.style.color = "green";
    }
    else {
        email_error.innerHTML = "invalid email id";
        email_error.style.color = "red";
    }
    checkAllFields()
}

function fill_pass() {
    var PASS = document.getElementById("Pass");
    var error = document.getElementById("pass_error");
    var condition = document.querySelectorAll("#condition_list li");
    var data = PASS.value;
    var count = 0;
    if (data == "") {
        error.innerHTML = "Enter the password";
    }
    else {
        error.innerHTML = "";
    }
    var UpperCase = new RegExp('(?=.*[A-Z])');
    var LowerCase = new RegExp('(?=.*[a-z])');
    var NumberCase = new RegExp('(?=.*[0-9])');
    var SpecialCase = new RegExp('(?=.*[!@#$%^&])');
    var SixChar = new RegExp('(?=.{6,})');
    if (UpperCase.test(data)) {
        condition[0].style.color = "green";
        count++;
    }
    else {
        condition[0].style.color = "grey";
    }
    if (LowerCase.test(data)) {
        condition[1].style.color = "green";
        count++;
    }
    else {
        condition[1].style.color = "grey";
    }
    if (NumberCase.test(data)) {
        condition[2].style.color = "green";
        count++;
    }
    else {
        condition[2].style.color = "grey";
    }
    if (SpecialCase.test(data)) {
        condition[3].style.color = "green";
        count++;
    }
    else {
        condition[3].style.color = "grey";
    }
    if (SixChar.test(data)) {
        condition[4].style.color = "green";
        count++;
    }
    else {
        condition[4].style.color = "grey";
    }
    if (count == 1 || count == 2) {
        error.innerHTML = "Weak password";
        error.style.color = "red";
    }
    else if (count == 3 || count == 4) {
        error.innerHTML = "Good password";
        error.style.color = "orange";
    }
    else if (count == 5) {
        error.innerHTML = "Strong password";
        error.style.color = "green";
    }
    checkAllFields()
}
function isPasswordStrong() {
    var PASS = document.getElementById("Pass").value;
    if (PASS == "") return false;

    var UpperCase = /(?=.*[A-Z])/;
    var LowerCase = /(?=.*[a-z])/;
    var NumberCase = /(?=.*[0-9])/;
    var SpecialCase = /(?=.*[!@#$%^&])/;
    var SixChar = /(?=.{6,})/;

    return UpperCase.test(PASS) &&
        LowerCase.test(PASS) &&
        NumberCase.test(PASS) &&
        SpecialCase.test(PASS) &&
        SixChar.test(PASS);
}

function show_pass() {
    document.getElementById("Pass").type = "text";
    document.getElementById("slash_eye").style.display = "none";
    document.getElementById("normal_eye").style.display = "block";
}

function hide_pass() {
    document.getElementById("Pass").type = "password";
    document.getElementById("slash_eye").style.display = "block";
    document.getElementById("normal_eye").style.display = "none";
}

function checkAllFields() {

    var NAME = document.getElementById("Name").value.trim();
    var EMAIL = document.getElementById("Email").value.trim();
    var DATE = document.getElementById("Date").value.trim();
    var IMG = document.getElementById("img_input").value.trim();
    var RADIO = document.getElementsByName("gender");
    var genderChecked = false;
    for (var i = 0; i < RADIO.length; i++) {
        if (RADIO[i].checked) {
            genderChecked = true;
            break;
        }
    }
    if (NAME == "" || EMAIL == "" || (!isPasswordStrong()) || DATE == "" || IMG == "" || !genderChecked) {
        document.getElementById("sub_btn").disabled = true;
    }
    else {
        document.getElementById("sub_btn").disabled = false;
    }
}

function fill_date() {
    var DATE = document.getElementById("Date");
    var date_error = document.getElementById("date_error");
    if (DATE.value == "") {
        date_error.innerHTML = "Enter the date";
    } else {
        date_error.innerHTML = ""
    }
    checkAllFields()
}

function choose_gender() {
    var RADIO = document.getElementsByName("gender");
    var gender_error = document.getElementById("radio_error");
    var selected = false;
    for (var i = 0; i < RADIO.length; i++) {
        if (RADIO[i].checked) {
            selected = true;
        }
    }
    if (!selected) {
        gender_error.innerHTML = "choose the gender";
    }
    else {
        gender_error.innerHTML = "";
    }
    checkAllFields()
}

function choose_img() {
    var IMG = document.getElementById("img_input");
    var error = document.getElementById("img_error");
    if (IMG.value == "") {
        error.innerHTML = "select the img";
    }
    else {
        error.innerHTML = "";
    }
    checkAllFields()
}

document.getElementById("img_input").addEventListener("change", function () {
    var file = this.files[0];
    var preview = document.getElementById("preview");
    var img_error = document.getElementById("img_error");
    if (!file) {
        img_error.innerHTML = "upload the image";
        preview.style.display = "none";
        return;
    }
    if (!file.type.startsWith("image/")) {
        img_error.innerHTML = "Only image allowed";
        preview.style.display = "none";
        return;
    }
    img_error.innerHTML = ""
    var imageURL = URL.createObjectURL(file);
    preview.src = imageURL;
    preview.style.display = "block";
    sessionStorage.setItem("tempImage", imageURL);
});


