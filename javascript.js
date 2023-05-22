var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passswordInput = document.getElementById("passswordInput");
var confirmInput = document.getElementById("confirmInput");
var btnLogin = document.querySelector(".login");


function showError(input, message) {
    let value = input.parentElement;
    let errorSmall = value.querySelector('small');
    value.classList.add("error");
    errorSmall.innerText = message;
}

function showSuccess(input) {
    let value = input.parentElement;
    let errorSmall = value.querySelector('small');
    value.classList.remove("error");
    errorSmall.innerText = "";
}

function valueEmptyCheck(params) {
    let isEmptyCheck = true;
    params.forEach(param => {
        let value = param.value.trim();
        if (value == 0) {
            isEmptyCheck = false
            showError(param, "Không được để trống");
        }
        else{
            showSuccess(param);
        }
    });
    return isEmptyCheck
}

function valueEmailCheck(params) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailValue = params.value.trim();
    let isEmailCheck = true;
    if (emailValue.match(regexEmail)) {
        showSuccess(params);
    }
    else{
        isEmailCheck = false;
        showError(params, "Email Không Hợp Lệ");
    }
    return isEmailCheck
}

function valueCheckLength(params, min, max) {
    let isCheckLength = true;
    if (params.value.trim().length < min || params.value.trim().length > max ) {
        isCheckLength = false;
        showError(params, `Giới hạn trong khoảng ${min} - ${max} ký tự`);
    }
    else{
        showSuccess(params);
    }
    return isCheckLength
}


function passswordCheck(param1, param2) {
    let isPasswordCheck = true;
    let password = param1.value;
    let passwordConfirm = param2.value;

    if (password !== passwordConfirm) {
        isPasswordCheck = false;
        showError(param1, "Password không giống nhau");
        showError(param2, "Password không giống nhau");
    }
    else if (password == 0 && passwordConfirm == 0){
        isPasswordCheck = false;
        showError(param1, "Không được để trống");
        showError(param2, "Không được để trống");
    }
    else{
        showSuccess(param1);
        showSuccess(param2);
    }
    return isPasswordCheck;
}



var loginForm =  document.getElementById("login_form");

btnLogin.addEventListener("click",function (e) {
    let isvalueEmptyCheck = valueEmptyCheck([nameInput,emailInput,passswordInput,confirmInput]);
    let isvalueEmailCheck = valueEmailCheck(emailInput);
    let isvalueCheckLength = valueCheckLength(nameInput, 6, 12);
    let ispassswordCheck = passswordCheck(passswordInput, confirmInput);
    if (isvalueEmptyCheck && isvalueEmailCheck && isvalueCheckLength && ispassswordCheck) {
        e.submit();
    }
    else{
        e.preventDefault()
    }
})




