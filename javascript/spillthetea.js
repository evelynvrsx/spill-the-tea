/*Add form Javascript*/
function validateaddform(){
    /* Add Boba page */
    var BobaFlavour=document.addform.BobaFlavour.value;
    var price=document.addform.price.value;

    /* Add boba form validation */
    /* https://www.w3schools.com/howto/howto_js_validation_empty_input.asp */
    if (BobaFlavour==null || BobaFlavour==""){
        alert("Boba Flavour can't be blank");
        return false;
    }
    else if (price==null || price==""){
        alert("Price can't be blank");
        return false;
    }
    alert("A new bubble tea flavour has been submitted");
}