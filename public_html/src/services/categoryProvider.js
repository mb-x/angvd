'use strict';

var categories = [
    {'id':1 , 'name': 'films'},
    {'id':2 , 'name': 'music'}
];

app.service('categoryProvider', function (){
    this.getCategories = function (){
        return categories;
    }
});


