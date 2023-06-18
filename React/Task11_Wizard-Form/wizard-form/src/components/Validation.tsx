import {FormData} from './Const'


var regName = /^[a-zA-Z]+$/;
var regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
var regContact = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
var regDob = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;




export const validateStep1 = (formData :FormData ) =>{
    if(!regName.test(formData.firstName)){
        alert('Invalid First Name given.');
        return false;
    }
    if(!regName.test(formData.lastName)){
        alert('Invalid Last name given.');
        return false;
    }
    if(formData.gender === ""){
        alert("Select Gender");
        return false;
    }
    return true;
}
export const validateStep2 = (formData :FormData ) =>{
    console.log(formData.dob);
    if(!regEmail.test(formData.email)){
        alert("Invalid Email Id");
        return false;
    }
    if(!regContact.test(formData.contactNo)){
        alert("Invalid Contact Number");
        return false;
    }
    if(!regDob.test(formData.dob)){
        alert("Invalid Date of Birth");
        return false;
    }

    return true;
}
export const validateStep3 =  (formData :FormData) =>{
    if(!regName.test(formData.firstName)){
        alert('Invalid First Name given.');
        return false;
    }
    if(!regName.test(formData.lastName)){
        alert('Invalid Last name given.');
        return false;
    }
    if(formData.gender === ""){
        alert("Select Gender");
        return false;
    }
    if(!regEmail.test(formData.email)){
        alert("Invalid Email Id");
        return false;
    }
    if(!regContact.test(formData.contactNo)){
        alert("Invalid Contact Number");
        return false;
    }
    if(!regDob.test(formData.dob)){
        alert("Invalid Date of Birth");
        return false;
    }
    if(formData.sports === ""){
        alert("Select Favourite Sports");
        return false;
    }
    if(formData.aboutYou === ""){
        alert("Write something in About You");
        return false;
    }
    if(formData.tnc === false){
        alert("Please Accept Terms & Conditions");
        return false;

    }
    return true;

}
