    function checkData(){
        var fname = document.getElementById("fname");
        var lname = document.getElementById("subject");
        var email = document.getElementById("email");
        if(fname.value == ""){
            alert("Please enter a name");
            fname.focus();
            return false;
        }
        if(lname.value == ""){
            alert("Please enter a message");
            lname.focus();
            return false;
        }
        if(email.value == ""){
            alert("Please enter a email");
            email.focus();
            return false;
        }
        return true;
    }