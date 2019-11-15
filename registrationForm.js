$(document).ready(function () {
    $flag = 1;
    $("#myName").focusout(function () {
        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled', true);
            $("#error_name").text("* Inserisci il tuo nome!");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled', false);
            $("#error_name").text("");

        }
    });
    $("#lastname").focusout(function () {
        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled', true);
            $("#error_lastname").text("* Inserisci il tuo cognome!");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled', false);
            $("#error_lastname").text("");
        }
    });
    $("#dob").focusout(function () {
        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled', true);
            $("#error_dob").text("");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled', false);
            $("#error_dob").text("");
        }
    });
    $("#gender").focusout(function () {
        $(this).css("border-color", "#2eb82e");

    });
    $("#email").focusout(function () {
        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled', true);
            $("#error_email").text("* Inserisci la tua mail!");
        }
        else {
            $(this).css({ "border-color": "#2eb82e" });
            $('#submit').attr('disabled', false);
            $("#error_email").text("");

        }



        $("#pass").focusout(function () {
            if ($(this).val() === '') {
                $(this).css("border-color", "#FF0000");
                $('#submit').attr('disabled', true);
                $("#error_pass").text("* Inserisci una password valida!");
            }
            else {
                $(this).css({ "border-color": "#2eb82e" });
                $('#submit').attr('disabled', false);
                $("#error_pass").text("");

            }

            $("#confpass").focusout(function () {
                if ($(this).val() === $('#pass').val()) {
                    $(this).css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_confpass").text("* Le password non coincidono!");
                }
                else {
                    $(this).css({ "border-color": "#2eb82e" });
                    $('#submit').attr('disabled', false);
                    $("#error_confpass").text("");

                }
            });

            $("#pass").focusout(function () {
                if ($(this).val() === '') {
                    $(this).css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_pass").text("* Inserisci una password di almeno 8 caratteri tra cui: -1 lettera maiuscola; -1 carattere speciale ('!' '#' ',' ....); -1 numero!");
                }
                else {
                    $(this).css({ "border-color": "#2eb82e" });
                    $('#submit').attr('disabled', false);
                    $("#error_email").text("");

                }
            });


            $("#phone").focusout(function () {
                $pho = $("#phone").val();
                if ($(this).val() === '') {
                    $(this).css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_phone").text("* Inserisci il numero di telefono!");
                }
                else if ($pho.length != 10) {
                    $(this).css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_phone").text("* La lunghezza del numero di telefono dovrebbe essere 10!");
                }
                else if (!$.isNumeric($pho)) {
                    $(this).css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_phone").text("* Inserisci il tuo numero di telefono");
                }
                else {
                    $(this).css({ "border-color": "#2eb82e" });
                    $('#submit').attr('disabled', false);
                    $("#error_phone").text("");
                }

            });

            $("#submit").click(function () {
                if ($("#myName").val() === '') {
                    $("#myName").css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_name").text("* Inserisci il tuo nome!");
                }
                if ($("#lastname").val() === '') {
                    $("#lastname").css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_lastname").text("* Inserisci il tuo cognome!");
                }
                if ($("#dob").val() === '') {
                    $("#dob").css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_dob").text("* Inserisci la tua data di nascita!");
                }
                if ($("#email").val() === '') {
                    $("#email").css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_email").text("* Inserisci la tua mail!");
                }
                if ($("#pass").val() === '') {
                    $("#pass").css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_pass").text("* Inserisci la tua password!");
                }
                if ($("#confpass").val() !== $("#pass").val()) {
                    $("#confpass").css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_confpass").text("*Le password non coincidono!");
                }
                if ($("#phone").val() === '') {
                    $("#phone").css("border-color", "#FF0000");
                    $('#submit').attr('disabled', true);
                    $("#error_phone").text("* You have to enter your Phone Number!");



                }
            })
        })
    })
});

