"use strict";

// Class definition
var KTSweetAlert2Demo = function() {

    // Demos
    var initDemos = function() {
        // Sweetalert Demo 1
        $('#kt_sweetalert_demo_1').click(function(e) {
            swal.fire('Good job!');
        });

        // Sweetalert Demo 2
        $('#kt_sweetalert_demo_2').click(function(e) {
            swal.fire("Here's the title!", "...and here's the text!");
        });

        // Sweetalert Demo 3
        $('#kt_sweetalert_demo_3_1').click(function(e) {
            swal.fire("Good job!", "You clicked the button!", "warning");
        });

        $('#kt_sweetalert_demo_3_2').click(function(e) {
            swal.fire("Good job!", "You clicked the button!", "error");
        });

        $('#kt_sweetalert_demo_3_3').click(function(e) {
            swal.fire("Good job!", "You clicked the button!", "success");
        });

        $('#kt_sweetalert_demo_3_4').click(function(e) {
            swal.fire("Good job!", "You clicked the button!", "info");
        });

        $('#kt_sweetalert_demo_3_5').click(function(e) {
            swal.fire("Good job!", "You clicked the button!", "question");
        });

        // Sweetalert Demo 4
        $('#kt_sweetalert_4').click(function(e) {
            swal.fire({
                title: "Parabéns!",
                text: "Seu token foi enviado com sucesso!",
                type: "success",
                buttonsStyling: false,
                confirmButtonText: "Confirmar !",
                confirmButtonClass: "btn btn-brand"
            });
        });
		
		 // Sweetalert Demo 4-4
        $('#kt_sweetalert_4-4').click(function(e) {
            swal.fire({
                title: "Parabéns!",
                text: "Cadastro atualizado com sucesso!",
                type: "success",
                buttonsStyling: false,
                confirmButtonText: "Confirmar !",
                confirmButtonClass: "btn btn-brand"
            });
        });
			 // Sweetalert Demo 41
        $('#kt_sweetalert_41').click(function(e) {
            swal.fire({
                title: "Tudo certo!",
                text: "Comprovante confirmado com sucesso complete o seu ciclo temos um brinde surpresa para você ok!",
                type: "success",
                buttonsStyling: false,
                confirmButtonText: "Confirmar !",
                confirmButtonClass: "btn btn-brand"
            });
        });
		 // Sweetalert Demo 40
        $('#kt_sweetalert_40').click(function(e) {
            swal.fire({
                title: "Ciclo completo!",
                text: "Parabéns você passou para o segundo ciclo e já está próximo de ganhar um brinde surpresa!",
                type: "success",
                buttonsStyling: false,
                confirmButtonText: "Confirmar !",
                confirmButtonClass: "btn btn-brand"
            });
        });
		
        // Sweetalert Demo 5
        $('#kt_sweetalert_demo_5').click(function(e) {
            swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                type: "success",

                buttonsStyling: false,

                confirmButtonText: "<i class='la la-headphones'></i> I am game!",
                confirmButtonClass: "btn btn-danger",

                showCancelButton: true,
                cancelButtonText: "<i class='la la-thumbs-down'></i> No, thanks",
                cancelButtonClass: "btn btn-default"
            });
        });

        $('#kt_sweetalert_demo_6').click(function(e) {
            swal.fire({
                position: 'top-right',
                type: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        });

        $('#kt_sweetalert_demo_7').click(function(e) {
            swal.fire({
                title: 'jQuery HTML example',
                html: $('<div>')
                    .addClass('some-class')
                    .text('jQuery is everywhere.'),
                animation: false,
                customClass: 'animated tada'
            })
        });

        $('#kt_sweetalert_demo_8').click(function(e) {
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then(function(result) {
                if (result.value) {
                    swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            });
        });

        $('#kt_sweetalert_demo_9').click(function(e) {
            swal.fire({
                title: 'Você tem certeza?',
                text: "Você não poderá reverter isso!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim, cancelar!',
                cancelButtonText: 'Não, cancelar!',
                reverseButtons: true
            }).then(function(result){
                if (result.value) {
                    swal.fire(
                        'Cancelado!',
                        'Seu bilhete foi cancelado com sucesso.',
                        'success'
                    )
                    // result.dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                } else if (result.dismiss === 'cancel') {
                    swal.fire(
                        'Cancelado',
                        'Seu bilhete esta seguro  :)',
                        'error'
                    )
                }
            });
        });

        $('#kt_sweetalert_demo_10').click(function(e) {
            swal.fire({
                title: 'Enviar comprovante de doação!',
                text: '',
                imageUrl: 'https://unsplash.it/200/150',
                imageWidth: 500,
                imageHeight: 150,
                imageAlt: 'Custom image',
                animation: false
            });
        });

        $('#kt_sweetalert_demo_11').click(function(e) {
            swal.fire({
                title: 'Ciclo não esta liberado complete o 3 ciclo!',
                text: 'Fecharei em 5 segundos..',
                timer: 5000,
                onOpen: function() {
                    swal.showLoading()
                }
            }).then(function(result) {
                if (result.dismiss === 'timer') {
                    console.log('I was closed by the timer')
                }
            })
        });
    };

    return {
        // Init
        init: function() {
            initDemos();
        },
    };
}();

// Class Initialization
jQuery(document).ready(function() {
    KTSweetAlert2Demo.init();
});
