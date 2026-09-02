function year_input(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var YEAR = document.getElementById("year_inpt").value;
    var MONTH = document.getElementById("mnth");
    if (YEAR == "") {
        document.getElementById("year_error").innerHTML = "plz enter the year";
        CLEAR();
        return;
    }
    else {
        document.getElementById("year_error").innerHTML = "";
    }
    MONTH.disabled = false;
    if (YEAR == 0) {
        document.getElementById("year_error").innerHTML = "plz enter valid year";
        return;
    }
    if (YEAR.length != 4) {
        document.getElementById("year_error").innerHTML = "plz enter 4 digit year";
        MONTH.disabled = true;
        return;
    }
    if ((YEAR % 4 == 0 && YEAR % 100 !== 0) || (YEAR % 400 == 0)) {
        document.getElementById("year_error").innerHTML = "leap year!";
    }
    else {
        document.getElementById("year_error").innerHTML = "not a leap year!";
    }
}
function CLEAR() {
    var MONTH = document.getElementById("mnth");
    var Total_day = document.getElementById("total_day");
    var PRESENT = document.getElementById("present");
    var ABSENT = document.getElementById("absent");
    var PER_DAY = document.getElementById("per_day");
    var CL = document.getElementById("cl_day");
    var emp_salary = document.getElementById("emp_salary");
    var yes = document.getElementById("Yes");
    var no = document.getElementById("No");
    var present = document.getElementById("emp_present");
    var absent = document.getElementById("emp_absent");

    PRESENT.disabled = true;
    ABSENT.disabled = true;
    PER_DAY.disabled = true;
    CL.disabled = true;
    emp_salary.disabled = true;
    present.disabled = true;
    absent.disabled = true;
    yes.disabled = true;
    no.disabled = true;
    yes.checked = false;
    no.checked = false;
    document.getElementById("hr_per").disabled = true;
    document.getElementById("travel_per").disabled = true;
    document.getElementById("sd_per").disabled = true;
    document.getElementById("mb_per").disabled = true;
    document.getElementById("food_per").disabled = true;
    document.getElementById("final").disabled = true;
    document.getElementById("emp_amount").disabled = true;
    document.getElementById("hr_per").value = "";
    document.getElementById("travel_per").value = "";
    document.getElementById("sd_per").value = "";
    document.getElementById("mb_per").value = "";
    document.getElementById("food_per").value = "";

    document.getElementById("HR_percent").innerHTML = "";
    document.getElementById("TRAVEL_percent").innerHTML = "";
    document.getElementById("SD_percent").innerHTML = "";
    document.getElementById("MB_percent").innerHTML = "";
    document.getElementById("FOOD_percent").innerHTML = "";

    document.getElementById("final").value = "";
    document.getElementById("emp_amount").value = "";
    MONTH.value = "";
    Total_day.value = "";
    present.value = "";
    absent.value = "";
    PER_DAY.value = "";
    CL.value = "";
    emp_salary.value = "";
    PRESENT.value = "";
    ABSENT.value = "";
}

function choose_month() {
    var MONTH = document.getElementById("mnth").value;
    var error = document.getElementById("month_error");
    if (MONTH == "") {
        error.innerHTML = "plz select the month";
    }
    else {
        error.innerHTML = "";
    }
}

function set_month() {
    var YEAR = document.getElementById("year_inpt").value;
    var MONTH = document.getElementById("mnth").value;
    var Total_day = document.getElementById("total_day");
    if (MONTH == "") {
        Total_day.value = "";
        CLEAR();
        return;
    }

    if (MONTH === "January" || MONTH == "March" || MONTH == "May" || MONTH == "July" || MONTH == "August" || MONTH == "October" || MONTH == "December") {
        Total_day.value = 31;
    }
    else if (MONTH == "April" || MONTH == "June" || MONTH == "September" || MONTH == "November") {
        Total_day.value = 30;
    }
    else if (MONTH == "February") {
        if (YEAR.length !== 4) {
            Total_day.value = "";
            return;
        }
        if ((YEAR % 4 == 0 && YEAR % 100 !== 0) || (YEAR % 400 == 0)) {
            Total_day.value = 29;
        }
        else {
            Total_day.value = 28;
        }
    }

    day_value();
}

function day_value() {
    var DAY = document.getElementById("total_day").value;
    var PER_DAY = document.getElementById("per_day");

    if (DAY == "") {
        PER_DAY.disabled = true;
    }
    else {
        PER_DAY.disabled = false;
    }
}

function per_DAY(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var PER_DAY = document.getElementById("per_day").value;
    var error = document.getElementById("per_day_error");
    if (PER_DAY == "") {
        error.innerHTML = "plz enter the per day salary";
        document.getElementById("present").disabled = true;
        document.getElementById("absent").disabled = true;
        var ids = ["cl_day", "emp_salary", "emp_present", "emp_absent",
            "Yes", "No", "emp_present", "emp_absent", "emp_salary", "hr_per",
            "travel_per", "sd_per", "mb_per", "food_per", "final", "emp_amount",
            "absent", "present"];
        var idss = [
            "HR_percent", "TRAVEL_percent", "SD_percent", "MB_percent", "FOOD_percent"
        ];

        ids.forEach(function (id) {
            var el = document.getElementById(id);
            el.disabled = true;
            el.checked = false;
            el.value = "";
        });
        idss.forEach(function (id) {
            var ele = document.getElementById(id);
            ele.innerHTML = "";
        })
    }
    else {
        error.innerHTML = "";
        document.getElementById("present").disabled = false;
        document.getElementById("absent").disabled = false;
    }
    if (PER_DAY.length < 3) {
        error.innerHTML = "plz enter 3 digit salary";
        document.getElementById("present").disabled = true;
        document.getElementById("absent").disabled = true;
    }
}

function present_DAY(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var Total_day = document.getElementById("total_day");
    var present_day = document.getElementById("present");
    var absent_day = document.getElementById("absent");
    var error = document.getElementById("present_error");
    var ABSENT = document.getElementById("absent");
    var CL = document.getElementById("cl_day");
    var yes = document.getElementById("Yes");
    var no = document.getElementById("No");
    if (present_day.value == "") {
        error.innerHTML = "plz enter the present day";
        yes.checked = false;
        no.checked = false;
        var ids = ["cl_day", "emp_salary", "emp_present", "emp_absent",
            "Yes", "No", "hr_per",
            "travel_per", "sd_per", "mb_per", "food_per", "final", "emp_amount",
            "absent"];
        var idss = [
            "HR_percent", "TRAVEL_percent", "SD_percent", "MB_percent", "FOOD_percent"
        ];

        ids.forEach(function (id) {
            var el = document.getElementById(id);
            el.disabled = true;
            el.checked = false;
            el.value = "";
        });
        idss.forEach(function (id) {
            var ele = document.getElementById(id);
            ele.innerHTML = "";
        })
        return;
    }
    else {
        error.innerHTML = "";
    }

    Total_day = parseInt(Total_day.value);
    present_day = parseInt(present_day.value);

    if (present_day > Total_day) {
        error.innerHTML = "present days can't be greater than total days";
        absent_day.value = "";
        document.getElementById("Yes").disabled = true;
        document.getElementById("No").disabled = true;
        return;
    }

    var ABSENT = Total_day - present_day;
    absent_day.value = ABSENT;
    absent_DAY();
}

function absent_DAY() {
    var absent_day = document.getElementById("absent").value;
    var CL = document.getElementsByName("cl");
    for (var i = 0; i < CL.length; i++) {
        if (absent_day == "") {
            CL[i].disabled = true;
        }
        else {
            CL[i].disabled = false;
        }
    }


}

function yes() {
    var YES = document.getElementById("Yes");
    if (YES.checked) {
        document.getElementById("CL_box").style.display = "block";
        document.getElementById("cl_day").disabled = false;
        var ids = ["emp_salary", "emp_present", "emp_absent", "hr_per",
            "travel_per", "sd_per", "mb_per", "food_per", "final", "emp_amount"];
        var idss = [
            "HR_percent", "TRAVEL_percent", "SD_percent", "MB_percent", "FOOD_percent"
        ];

        ids.forEach(function (id) {
            var el = document.getElementById(id);
            el.disabled = true;
            el.value = "";
        });
        idss.forEach(function (id) {
            var ele = document.getElementById(id);
            ele.innerHTML = "";
        })
        document.getElementById("cl_day").value = "";
    }
    else {
        document.getElementById("CL_box").style.display = "none";

    }
}

function no() {
    var NO = document.getElementById("No");
    var PER_DAY = document.getElementById("per_day");
    var PRESENT = document.getElementById("present");
    if (NO.checked) {
        document.getElementById("CL_box").style.display = "none";
        document.getElementById("emp_salary").style.display = "block";
        document.getElementById("emp_salary").value = PER_DAY.value * PRESENT.value;
        checkSalary();
    }
    else {
        document.getElementById("CL_box").style.display = "block";
        document.getElementById("emp_salary").style.display = "block";
    }
}

function Cl_Day(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var CL_DAY = document.getElementById("cl_day");
    var error = document.getElementById("cl_error");
    var PRESENT = document.getElementById("emp_present");
    var pres = document.getElementById("present");
    var ABSENT = document.getElementById("absent");
    var EMP_ABSENT = document.getElementById("emp_absent");
    var SALARY = document.getElementById("emp_salary");
    var PER_DAY = document.getElementById("per_day");
    var cl = parseInt(CL_DAY.value);
    var absent = parseInt(ABSENT.value.trim()) || 0;
    var present = parseInt(pres.value.trim()) || 0;
    if (CL_DAY.value.trim() == "") {
        PRESENT.disabled = true;
        ABSENT.disabled = true;
        SALARY.disabled = true;
        EMP_ABSENT.disabled = true;
        PRESENT.value = "";
        SALARY.value = "";
        EMP_ABSENT.value = "";
        error.innerHTML = "plz enter the cl days!!!";
        var ids = ["emp_absent", "emp_salary", "hr_per", "travel_per", "sd_per", "mb_per", "food_per",
            "HR_percent", "TRAVEL_percent", "SD_percent", "MB_percent", "FOOD_percent", "final", "emp_amount"];
        ids.forEach(function (id) {
            var el = document.getElementById(id);
            el.value = "";
            el.disabled = true;
            el.innerHTML = "";
        })
        return;
    }

    PRESENT.disabled = false;
    SALARY.disabled = false;
    EMP_ABSENT.disabled = false;

    if (isNaN(cl) || cl < 0) {
        error.innerHTML = "enter the valid cl days!!";
        return;
    }
    if (isNaN(absent)) {
        error.innerHTML = "please enter absent days first!";
        return; 
    }
    if (cl > absent) {
        error.innerHTML = "cl can't greater than absent days";
        PRESENT.value = "";
        SALARY.value = "";
        EMP_ABSENT.value = "";
        PRESENT.disabled = true;
        SALARY.disabled = true;
        EMP_ABSENT.disabled = true;
        return;
    }
    error.innerHTML = "";
    PRESENT.value = present + cl;
    EMP_ABSENT.value = absent - cl;
    SALARY.value = PER_DAY.value * PRESENT.value;
    checkSalary();
}

function hr_percent(input) {

    input.value = input.value.replace(/[^0-9]/g, '');

    var EMP_salary = parseFloat(document.getElementById("emp_salary").value);
    var HR = parseFloat(document.getElementById("hr_per").value);

    if (isNaN(EMP_salary) || isNaN(HR)) {
        document.getElementById("HR_percent").innerHTML = "";
        return;
    }
    var result = (EMP_salary * HR) / 100;

    document.getElementById("HR_percent").innerHTML = result.toFixed(2);
}

function travel_percent(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var EMP_salary = parseFloat(document.getElementById("emp_salary").value);
    var TRAVEL = parseFloat(document.getElementById("travel_per").value);
    if (isNaN(EMP_salary) || isNaN(TRAVEL)) {
        document.getElementById("TRAVEL_percent").innerHTML = "";
        return;
    }
    var result = (EMP_salary * TRAVEL) / 100;
    document.getElementById("TRAVEL_percent").innerHTML = result.toFixed(2)
}
function sd_percent(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var EMP_salary = parseFloat(document.getElementById("emp_salary").value);
    var SD = parseFloat(document.getElementById("sd_per").value);
    if (isNaN(EMP_salary) || isNaN(SD)) {
        document.getElementById("SD_percent").innerHTML = "";
        return;
    }
    var result = (EMP_salary * SD) / 100;
    document.getElementById("SD_percent").innerHTML = result.toFixed(2);
}
function mb_percent(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var EMP_salary = parseFloat(document.getElementById("emp_salary").value);
    var MB = parseFloat(document.getElementById("mb_per").value);
    if (isNaN(EMP_salary) || isNaN(MB)) {
        document.getElementById("MB_percent").innerHTML = "";
        return;
    }
    var result = (EMP_salary * MB) / 100;
    document.getElementById("MB_percent").innerHTML = result.toFixed(2);
}
function food_percent(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var EMP_salary = parseFloat(document.getElementById("emp_salary").value);
    var FOOD = parseFloat(document.getElementById("food_per").value);
    if (isNaN(EMP_salary) || isNaN(FOOD)) {
        document.getElementById("FOOD_percent").innerHTML = "";
        return;
    }
    var result = (EMP_salary * FOOD) / 100;
    document.getElementById("FOOD_percent").innerHTML = result.toFixed(2);
}
function checkSalary() {
    var salary = parseFloat(document.getElementById("emp_salary").value);
    var percent = ["hr_per", "travel_per", "sd_per", "mb_per", "food_per", "final", "emp_amount"];
    if (isNaN(salary) || salary <= 0) {
        percent.forEach(function (id) {
            document.getElementById(id).disabled = true;
            document.getElementById(id).value = "";
        });
        document.getElementById("HR_percent").innerHTML = "";
        document.getElementById("TRAVEL_percent").innerHTML = "";
        document.getElementById("SD_percent").innerHTML = "";
        document.getElementById("MB_percent").innerHTML = "";
        document.getElementById("FOOD_percent").innerHTML = "";
        document.getElementById("final").value = "";
        document.getElementById("emp_amount").value = "";
        return;
    }
    percent.forEach(function (id) {
        document.getElementById(id).disabled = false;
    });
}
function final_amount() {

    var salary = document.getElementById("emp_salary").value;
    var hr = document.getElementById("hr_per").value;
    var travel = document.getElementById("travel_per").value;
    var sd = document.getElementById("sd_per").value;
    var mb = document.getElementById("mb_per").value;
    var food = document.getElementById("food_per").value;

    if (salary == "" || hr == "" || travel == "" || sd == "" || mb == "" || food == "") {
        document.getElementById("final").value = "";
        document.getElementById("emp_amount").value = "";
        return;
    }
    salary = parseFloat(salary);
    hr = parseFloat(hr);
    travel = parseFloat(travel);
    sd = parseFloat(sd);
    mb = parseFloat(mb);
    food = parseFloat(food);

    var total =
        (salary * hr) / 100 +
        (salary * travel) / 100 +
        (salary * sd) / 100 +
        (salary * mb) / 100 +
        (salary * food) / 100;

    document.getElementById("final").value = total.toFixed(2);
    var grand_total = salary + total;
    document.getElementById("emp_amount").value = grand_total.toFixed(2);
}
