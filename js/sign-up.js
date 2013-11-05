//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$( document ).ready(function() {
    var select = $('select[name="state"]');
    var option;
    var idx;
    var state;

    for(idx = 0; idx < usStates.length; ++idx) {
            state = usStates[idx];
            option = $(document.createElement('option'));
            option.attr('value', state.abbreviation);
            option.html(state.name);
            select.append(option);
    } 
    
    var firstname = $('#first-name');
    var lastname = $('#last-name');
    var email = $('#email');

    // firstname.attr('required', "");
    // lastname.attr('required', "");
    // email.attr('required', "");

    $('.signup-form').submit(function(){
        //code to execute when the sign-up form is submitted
        //this is the raw DOM form element
        //wrap it in a jQuery object so we can use jQuery methods on it

        var form = $(this);
        var addr1Input = form.find('input[name="addr-1"]');
        var addr1Value = addr1Input.val();

        var zip1Input = form.find('input[name="zip"]');
        var zip1Value = zip1Input.val();

        if (addr1Value && addr1Value.trim().length > 0){
            if(zip1Value && zip1Value.trim().length > 0){
                return true;
            }
            else{
                alert("Please enter zip code");
                return false; 
            }
        }
        else{
            alert("Please enter address");
            return false; 
        }
    });

    $('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
        $('.cancel-signup-modal').modal();
    }); //cancel-signup click

    $('.btn-abandon').click(function(){
        window.location = 'http://www.google.com';
    });

    //disable the element
    var referother = $('input[name="refer-other"]');
    referother.attr('disable', true);

    $('select[name="refer"]').change(function(){
        //get a ref to the refer select
        //add the refer-other input
        var referSelect = $(this);
        var otherInput = $('[name="refer-other"]');

        //if the refer select's value in lower case is equal to "other"...
        if ('other' === referSelect.val().toLowerCase()) {
            //remove the disabled attribute from the
            //refer-other input, show it, and set focus to it
            otherInput.removeAttr('disabled');
            otherInput.show();
            otherInput.focus()
        }
        else {
            //otherwise, make the refer-other input disabled
            //and hide it
            otherInput.attr('disabled', true);
            otherInput.hide();
        }
    }); //refer change function
});
