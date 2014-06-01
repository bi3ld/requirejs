require.config({
    paths: {
        'jQuery': 'js/vendor/jquery-1.10.2.min'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }
    }
});

require(['js/module1', 'js/module2', 'jQuery'], function(module1ref, module2ref, $){
    // do something with the loaded modules
    var module1 = new module1ref(),
        module2 = new module2ref({'q': 'Q', 'w': 'W', 'e': 'E'});

    console.log('jQuery version:', $.fn.jquery); // 1.9.0


    var p = $('.txt1');

    var selectors = {
        p: p,
        test: 1
    };


    $('button.one').on('click', function(){

        $.ajax(
            {
                type: "POST",
                cache: false,
                url: 'ajax/ajax.php',
                dataType: 'json',
                success: function(response){

                    console.log('success');
                    console.log('Request');
                    console.log(selectors);
                    module1.updateParagraf(selectors, 'Mod 1');
                },
                error: function(){

                    console.log('error');
                }
            });
    });

    $('button.two').on('click', function(){

        $.ajax(
            {
                type: "POST",
                cache: false,
                url: 'ajax/ajax.php',
                dataType: 'json',
                success: function(response){

                    console.log('success');
                    module2.updateParagraf(selectors, 'Mod 2');
                },
                error: function(){

                    console.log('error');
                }
            });
    });

});