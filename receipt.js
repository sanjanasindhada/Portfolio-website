function fill_date() {
    var DATE = document.getElementById("form_date");
    var NAME = document.getElementById("input_name");
    var SELECT = document.getElementById("selection");
    var AMOUNT = document.getElementById("amount");
    var GST = document.getElementById("gst");
    var GST_input = document.getElementById("gst_input");
    var CGST = document.getElementById("cgst_input");
    var SGST = document.getElementById("sgst_input");
    var total = document.getElementById("fees");
    var PRINT = document.getElementById("print");
    var BOX = document.getElementsByClassName("side_box")[0];
    if (DATE.value == "") {
        NAME.disabled = true;
        NAME.value = " ";
        SELECT.value = "";
        SELECT.disabled = true;
        GST_input.disabled = true;
        AMOUNT.value = "";
        AMOUNT.disabled = true;
        GST.value = "";
        CGST.disabled = true;
        GST.disabled = true;
        GST_input.value = "";
        CGST.value = "";
        SGST.value = "";
        SGST.disabled = true;
        total.value = "";
        total.disabled = true;
        PRINT.disabled = true;
        BOX.style.display = "none";
    }
    else {
        NAME.disabled = false;
    }
}
function name_validation(e) {
    var char = e.keyCode;
    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char == 32)) {
        document.getElementById("name_error").innerHTML = "";
        return true;

    }
    else {
        document.getElementById("name_error").innerHTML = "only characters allow";
        document.getElementById("name_error").style.color = "red";
        return false;
    }
}

function resetFields() {

    var AMOUNT = document.getElementById("amount");
    var GST = document.getElementById("gst");
    var GST_input = document.getElementById("gst_input");
    var CGST = document.getElementById("cgst_input");
    var SGST = document.getElementById("sgst_input");
    var total = document.getElementById("fees");
    var PRINT = document.getElementById("print");
    var BOX = document.getElementsByClassName("side_box")[0];

    AMOUNT.value = "";
    AMOUNT.disabled = true;

    GST.value = "";
    GST.disabled = true;

    GST_input.value = "";
    GST_input.disabled = true;

    CGST.value = "";
    CGST.disabled = true;

    SGST.value = "";
    SGST.disabled = true;

    total.value = "";
    total.disabled = true;

    PRINT.disabled = true;

    BOX.style.display = "none";
}


function fill_name() {
    var NAME = document.getElementById("input_name");
    var SELECT = document.getElementById("selection");
    if (NAME.value == "") {
        SELECT.disabled = true;
        SELECT.value="";
        resetFields();
    }
    else {
        SELECT.disabled = false;
    }
}
function choose_option() {
    var OPTION = document.getElementById("selection");
    var AMOUNT = document.getElementById("amount");
    if (OPTION.value == "") {
        resetFields();
    }
    else if (OPTION.value == "python") {
        resetFields();
        AMOUNT.value = "";
        AMOUNT.disabled = false;
    }
    else if (OPTION.value == "java") {
        resetFields();
        AMOUNT.value = "";
        AMOUNT.disabled = false;
    } else if (OPTION.value == "mern") {
        resetFields();
        AMOUNT.value = "";
        AMOUNT.disabled = false;
    }
    else {
        AMOUNT.disabled = false
    }
}



function fill_amount() {
    var AMOUNT = document.getElementById("amount");
    var dis = document.getElementById("discount");
    var GST = document.getElementById("gst");
    var GST_input = document.getElementById("gst_input");
    var CGST = document.getElementById("cgst_input");
    var SGST = document.getElementById("sgst_input");
    var total = document.getElementById("fees");
    var PRINT = document.getElementById("print");
    var BOX = document.getElementsByClassName("side_box")[0];
    if (AMOUNT.value == "" || AMOUNT.value<=0) {
        dis.disabled=true;
        AMOUNT.disabled = false;
        GST.value = "";
        GST.disabled = true;
        GST_input.disabled = true;
        GST_input.value = "";
        CGST.value = "";
        SGST.value = "";
        total.value = "";
        PRINT.disabled = true;
        CGST.disabled = true;
        SGST.disabled = true;
        total.disabled = true;
        BOX.style.display = "none";
    }
    else {
        dis.disabled = false;
    }

}

function num_validation(e) {
    var num = e.keyCode;
    if (num >= 48 && num <= 57) {
        document.getElementById("num_error").innerHTML = "";
        return true;
    } else {
        document.getElementById("num_error").innerHTML = "only numbers allow";
        document.getElementById("num_error").style.color = "red";
        return false;
    }
}

function dis() {
    var AMOUNT = document.getElementById("amount").value;
    var GST = document.getElementById("gst");
    var GST_INCLUDE = document.getElementById("gst_input");
    var CGST = document.getElementById("cgst_input");
    var SGST = document.getElementById("sgst_input");
    var FEES = document.getElementById("fees");
    var DIS = document.getElementById("discount");
    var BOX = document.getElementsByClassName("side_box")[0];
    if (AMOUNT == "") {
        GST.disabled = true;
        GST_INCLUDE.disabled = true;
        CGST.disabled = true;
        SGST.disabled = true;
        FEES.disabled = true;
        BOX.style.display = "none";
    }
    else {
        GST.disabled = false;
        GST_INCLUDE.disabled = false;
        CGST.disabled = false;
        SGST.disabled = false;
        FEES.disabled = false;
        BOX.style.display = "block"
    }
    document.getElementsByClassName("side_box")[0].style.display = "block";
    var original = document.getElementById("amount").value;
    var percent = Math.floor(Math.random() * 9) + 1;
    var discount_price = (original * percent) / 100;
    var final_pay = original - discount_price;
    document.getElementById("per_text").innerHTML = percent + "%";
    document.getElementById("p_text").innerHTML = discount_price;
    document.getElementById("0_price_text").innerHTML = original;
    document.getElementById("p_fees_text").innerHTML = final_pay;
    document.getElementById("discount").disabled = true;
    document.getElementById("amount").value = final_pay;
}

function printBill() {
    window.print();
}


function choose_GST() {
    var GST = parseFloat(document.getElementById("gst").value);
    var AMOUNT = parseFloat(document.getElementById("amount").value);
    var GST_amount = (AMOUNT * GST) / 100;
    var CGST = GST_amount / 2;
    var SGST = GST_amount / 2;
    var Total = AMOUNT + GST_amount;
    document.getElementById("gst_input").value = GST_amount;
    document.getElementById("cgst_input").value = CGST;
    document.getElementById("sgst_input").value = SGST;
    document.getElementById("fees").value = Total;
    document.getElementById("discount").disabled = true;

    if (GST == "" || AMOUNT == "" || CGST == "" || SGST == "" || Total == "") {
        document.getElementById("print").disabled = true;
    }
    else {
        document.getElementById("print").disabled = false;
    }

    var GST = document.getElementById("gst");
    var gstInput = document.getElementById("gst_input");
    var cgstInput = document.getElementById("cgst_input");
    var sgstInput = document.getElementById("sgst_input");
    var totalInput = document.getElementById("fees");

    if (GST.value == "") {
        GST.disabled = true
        gstInput.value = "";
        cgstInput.value = "";
        sgstInput.value = "";
        totalInput.value = "";
        document.getElementById("print").disabled = true;
        gstInput.disabled = true;
        cgstInput.disabled = true;
        sgstInput.disabled = true;
        totalInput.disabled = true;

        return; // yahi stop ho jaaye
    }
}