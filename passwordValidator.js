//min 8 length
// can't contain username
// can't contain spaces


function passwordValidator(username,passsword){
    if (passsword.includes(username) !== -1 || passsword.length < 8 || passsword.includes(' ') !== -1){
        return false;
    }
    else {
        return true;
    }
}


console.log(passwordValidator("ali","ahmedijaz"))