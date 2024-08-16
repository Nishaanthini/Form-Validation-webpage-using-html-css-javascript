function validationform(){
    var firstName=document.validateform.firstName.value;
    var lastName=document.validateform.lastName.value;
    var city=document.validateform.city.value;
    var phone=document.validateform.phone.value;
    var address=document.validateform.address.value;

    if(firstName==""){
        alert("First Name field should not be empty");
        return false;
    }
    else if(lastName==""){
        alert("Last Name field should not be empty");
        return false;
    }
    else if(city==""){
        alert("City field should not be empty");
        return false;
    }
    else if((phone.length!=10)||(phone>='a' && phone<='z')||(phone>='A' && phone<='Z') || (phone=="")){
        if(phone==""){
            alert("Phone Number field should not be empty");
            return false;
        }
        else if((phone>='a' && phone<='z')||(phone>='A' && phone<='Z')){
            alert("Please Enter number");
            return false;
        }
        else if(phone.length!=10){
            alert("Enter valid Phone Number");
            return false;
        }
    }
    else if(address==""){
        alert("Address field should not be empty");
        return false;
    }
    else{
        alert("Your Form submitted succesfully!..");
    }

}

