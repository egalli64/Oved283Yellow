$().ready(function () {
    $("#form_login").validate({
        rules: {
            login: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 10
            }
        },
        messages: {
            login: "Inserisci un nome di login",
            password: {
                required: "Inserisci una password valida",
                minlength: "La password deve essere lunga minimo 5 caratteri",
                maxlength: "La password deve essere lunga al massimo 8 caratteri"
            },
            email: "Inserisci la tua email"
        },

    });

    $("#form_registrazione").validate({
        rules: {
            mail: {
                required: true,
                email: true
            },
            pass: {
                required: true,
                minlength: 5,
                maxlength: 10
            },
            pass_confirm: {
                required: true,
                equalTo: "#pass"
            }
        },
        messages: {
            pass: {
                required: "Inserisci una password valida",
                minlength: "La password deve essere lunga minimo 5 caratteri",
                maxlength: "La password deve essere lunga al massimo 8 caratteri"
            },
            pass_confirm: {
                required: "Le password devono coincidere",
            },
            mail: "Inserisci la tua email"
        },

    });


    /*  $('#domRes').click(function () {
     if (!document.getElementById("domRes").checked) {
         $("#location2").removeAttr('hidden');
     }
 }); */

});


function attribute() {
    if (document.getElementById("domRes").checked) {
        $("#location2").attr('hidden');
    } else {
        $("#location2").removeAttr('hidden');
    }
    if (document.getElementById("azienda").selected) {
        $("#nomeazienda").attr('hidden');
    } else {
        $("#nomeazienda").removeAttr('hidden');
    }
}



