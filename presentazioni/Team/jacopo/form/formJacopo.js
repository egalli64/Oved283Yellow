$().ready(function () {
    $("#form").validate({
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
                maxlength: 8
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
});