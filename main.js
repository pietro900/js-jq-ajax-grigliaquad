//Create in HTML una griglia di 36 quadratini (6x6).
//Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
//Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
//In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.

//creo griglia di 6x6 quadrati vuoti con Handlebars
var template_html = $('#entry-template').html();
var template_function = Handlebars.compile(template_html);
var quadrato = {
    'classe': 'quadrato'
};

var html = template_function(quadrato);

for (var i = 0; i < 36; i++) {
    $('#griglia').append(html);
}

// //creo griglia di 6x6 quadrati vuoti
// var numeri_random ;
// for (var i = 0; i < 36; i++) {
//     $('#griglia').append('<div class="quadrato"><p></p></div>');
// };

//Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9
$('.quadrato').click(function(){
    //recupero il p del quadrato dove ho cliccato;
    var selettore = $(this).find('p');
    var selettore1 = $(this)

    //genero un numero random tramite api;
    $.ajax({
        'url' : 'https://ﬂynn.boolean.careers/exercises/api/random/int',
        'method' : 'GET',
        'success' : function(data){
            var numero_pc = data.response;
            selettore.text(numero_pc);
            controllo(numero_pc);
        },
        'error' : function () {
            allert('si è verificato un errore');
        }
    });

    //creo una funzione che controlla se il numero è maggiore di 5 ed aggiunge la classe esatta;
    function controllo(numero) {
        if (numero <= 5) {
            selettore1.removeClass('verde');
            selettore1.addClass('giallo');
        }
        else {
            selettore1.removeClass('giallo');
            selettore1.addClass('verde');
        };
    };
});
