define([], function () {
    var returnedModule = function () {

        var _name = 'module1 name';
        this.getName = function () {
            return _name;
        }

        this.updateParagraf = function(a, txt){

            console.log(txt);
            a.p.text(txt);

        }

    };

    return returnedModule;

});