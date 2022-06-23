function ValidateName() {
    if((document.getElementById("name").value.length == 0))
    {
        alert("All fields are compulsory");
        document.getElementById("name").focus();
        return false;
    }
    else
    {
        ValidateComment();
    }
};

function ValidateComment() {
    if((document.getElementById("comments").value.length == 0))
    {
        alert("All fields are compulsory");
        document.getElementById("comments").focus();
        return false;
    }
    else
    {
        ValidateGender();
    }
};

function ValidateGender() {
    if((!(document.getElementById("Male").checked)) && (!(document.getElementById("Female").checked)))
    {
        alert("All fields are compulsory");
        return false;
    }
}