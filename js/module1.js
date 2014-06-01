define([], function () {
    var returnedModule = function () {

        var _name = 'module1 name';
        this.getName = function () {
            return _name;
        }

        this.updateParagraf = function(a, txt){

            a.p.text(txt);

            console.log('Module 1');
            console.log(a);

            update(a);

        }

        var update = function(a){

            a.test = 666;
            console.log('Update');
            console.log(a);
        }


    };

    return returnedModule;

});