function getValue(id) {
    return document.getElementById(id).value.trim();
}

// display error
function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}
function validate() {
    var flag = true;
    var password = getValue('password');
    if (password != '29092021') {
        flag = false;
        document.getElementById('carouselExampleIndicators').style.display = "none";
        showError('password', 'Hong đúng òiii :<');
    }
    if (password == '29092021') {
        flag = true;
        document.getElementById('carouselExampleIndicators').style.display = "block";
        showError('password', '');
    }
    return flag;
}