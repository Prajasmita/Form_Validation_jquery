$(document).ready(function(){


    $("#fName").blur(function () {
        firstNameValidate();
    });

    function firstNameValidate()
    {
        var firstName = $("#fName").val();
        var name = /^[A-Za-z]+$/;

        if (firstName == "" ){
            $("#fName_error").html("Please Enter First Name.");
            return false;
        }
        else if ( !firstName.match(name) ){
            $("#fName_error").html("Name should have characters.");
            return false;
        }
        else{
            $("#fName_error").html("");
            return true;
        }
    }

    $("#lName").blur(function () {
        lastNameValidate();
    });

    function lastNameValidate()
    {
        var lastName = $("#lName").val();
        var name = /^[A-Za-z]+$/;

        if (lastName == "" ){
            $("#lName_error").html("Please Enter last Name.");
            return false;
        }
        else if ( !lastName.match(name) ){
            $("#lName_error").html("Name should have characters.");
            return false;
        }
        else{
            $("#lName_error").html("");
            return true;
        }
    }

    $("#phnNo").blur(function () {
        phoneNoValidate();
    });

    function  phoneNoValidate() {
        var phnNo = $("#phnNo").val();
        var number = /^[7-9]{1}[0-9]{9}$/;

        if (phnNo == "" ){
            $("#phnNo_error").html("Please Enter Phone number.");
            return false;
        }
        else if (!phnNo.match(number)){
            $("#phnNo_error").html("Please Enter 10 digits number.");
            return false;
        }
        else{
            $("#phnNo_error").html("");
            return true;
        }
    }

    $("#offNo").blur(function () {
        officeNoValidate();
    });

    function  officeNoValidate(){
        var offNo = $("#offNo").val();
        var number = /^[7-9]{1}[0-9]{9}$/;

        if (offNo == "" ){
            $("#offNo_error").html("Please Enter Phone number.");
            return false;
        }
        else if (!offNo.match(number)){
            $("#offNo_error").html("Please Enter 10 digits number.");
            return false;
        }
        else{
            $("#offNo_error").html("");
            return true;
        }
    }

    $("#mail").blur(function () {
        emailValidate();
    });

    function emailValidate() {

        var mail = $("#mail").val();
        var email = /^([a-zA-Z\d\-\.]+)@([a-zA-Z]{2,5})\.([a-zA-Z]{2,4})$/;

        if (mail == "" ){
            $("#mail_error").html("Please Enter Email id.");
            return false;
        }
        else if (!mail.match(email)){
            $("#mail_error").html("Please Enter valid email id.");
            return false;
        }
        else{
            $("#mail_error").html("");
            return true;
        }
    }

    $("#pass").blur(function () {
        passwordValidate();
    });

    function passwordValidate() {

        var pass= $("#pass").val();
        var password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;

        if (pass == "" ){
            $("#pass_error").html("Please Enter password");
            return false;
        }
        else if(!pass.match(password)){
            $("#pass_error").html("Please Enter valid password.");
            return false;
        }
        else{
            $("#pass_error").html("");
            return true;
        }
    }

    $("#conpass").change(function() {
        conpasswordValidate();
    });

    function conpasswordValidate() {

        var pass = $("#pass").val();
        var conpass = $("#conpass").val();

        if (conpass == "" ){
            $("#conpass_error").html("Please confirm your password");
            return false;
        }
        else if (conpass != pass){
            $("#conpass_error").html("Password do not matched");
            return false;
        }
        else{
            $("#conpass_error").html("");
            return true;
        }
    }

    $("#year").hover(function() {
        yearDropdownList();
    });

    function yearDropdownList(){
        var start = 1900;
        var end = new Date().getFullYear();
        var options = "";
        for(var year = start ; year <=end; year++){
            options += "<option>"+ year +"</option>";
        }
        $("#year").html(options);


    }

    $("#year").click(function() {
        calculate_age();
    });

    function calculate_age() {
        var birth_year = $("#year").val();
        var birth_month = $("#month").val();
        var birth_day = $("#date").val();

        var today = new Date();
        var birthday = new Date(birth_year, birth_month-1, birth_day);
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();

        var year_age = Math.floor(differenceInMilisecond / 31536000000); //365*24*60*60*1000
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);//365*24*60*60*1000 / 60*60*24*1000

        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy B'day!!!");
        }

        var month_age = Math.floor(day_age/30);

        day_age = day_age % 30;

        var tMnt= (month_age + (year_age*12));
        var tDays =(tMnt*30) + day_age;

        $("#age").val(year_age + "." + month_age);

    }

    $("#residence1").blur(function() {
        genderValidation();
    });
    $("#residence2").blur(function() {
        genderValidation();
    });

    function genderValidation(){
        var male = $('[id="residence1"]:checked').length;
        var female = $('[id="residence2"]:checked').length;
        if (male == "" && female == ""){
            $("#gender_error").html("Please select gender.");
            return false;
        }
        else{
            $("#gender_error").html("");
            return true;
        }
    }

    $("#details").blur(function() {
        aboutyouValidate();
    });

    function aboutyouValidate(){
        var aboutyou = $("#details").val();
        if (aboutyou.length < 1){
            $("#aboutyou_error").html("Please enter something about you");
            return false;
        }
        else{
            $("#aboutyou_error").html("");
            return true;
        }
    }

    $("#checkbox_sample18").blur(function() {
        interestValidate();
    });

    function interestValidate()
    {
        var fields = $("input[name='list']").serializeArray();
        if (fields.length === 0)
        {
            $("#checkbox_sample_error").html("Please select atleast one interest");
            return false;
        }
        else
        {
            $("#checkbox_sample_error").html("");
            return true;

        }
    }

    $("#form").submit(function(){

        var fname_validate = firstNameValidate();
        var lname_validate = lastNameValidate();
        var phn_vaidate = phoneNoValidate();
        var off_validate = officeNoValidate();
        var mail_validate = emailValidate();
        var password_validate = passwordValidate();
        var conpass_validate = conpasswordValidate();
        var gender_validate = genderValidation();
        var about_validate = aboutyouValidate();
        var interest_validate = interestValidate();

        if(fname_validate && lname_validate && phn_vaidate && off_validate && mail_validate && password_validate && conpass_validate && gender_validate && about_validate && interest_validate){
            return true;
        }
        else{
            return false;
        }

    });
});

