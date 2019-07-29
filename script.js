$(document).ready(function () {
    $('#forma').submit(function () {
        var form = $(this);
        var field = [];
        var el;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.forma-label');


            for(var i=0;i<field.length;i++) {

                if( !value ) {
                    line.addClass('required');
                    el = 0;
                    event.preventDefault();

                } else {
                    line.removeClass('required');
                    el = 1;
                }
            }
        });
    });
});

