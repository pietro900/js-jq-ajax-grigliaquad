//Create in HTML una griglia di 36 quadratini (6x6).
//Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
//Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
//In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.


//creo griglia di 6x6 quadrati vuoti
var numeri_random ;
for (var i = 0; i < 36; i++) {
    $('#griglia').append('<div class="quadrato"><p></p></div>');
};

//Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9
$('.quadrato').click(function(){
    $.ajax({
        'url' : 'https://ﬂynn.boolean.careers/exercises/api/random/int',
        'method' : 'GET',
        'success' : function(data){
            var numero_pc = data.response;
            $(this).text(numero_pc)

            if (numero_pc <= 5) {
                var testo = $(this).find('p').addClass('giallo')
                console.log(testo);
            }
            else {
                var testo1 = $(this).find('p').addClass('verde')
                console.log(testo1);
            }
        },
        'error' : function () {
            allert('si è verificato un errore')
        }

    });
});
