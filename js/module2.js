define(['js/module1'], function (module1ref) {

    Module1ref = new module1ref();

    var returnedModule = function (arg) {

        var _name = 'module2 name';
        this.getName = function () {
            return _name;
        }

        this.updateParagraf = function(selectors, text){

            text = _name;

            Module1ref.updateParagraf(selectors, text);
            test(arg);

        }

        var test = function(arg){
            console.log(arg);
            console.log(arg);
        }

    };

    return returnedModule;

});