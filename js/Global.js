$(function () {
    $.backstretch('images/naturetrail.jpg');
});
 /* Email Vaidation */
 function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
    document.subscribeF.subscribe.focus();
    return true;
    }
    else
    {
    alert("Uh oh! It seems you missed something. Try typing youre email again.");
    document.subscribeF.subscribe.focus();
    return false;
    }
}
