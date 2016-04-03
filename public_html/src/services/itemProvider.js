'use strict';

var items = [
    {'name':'batman' , 'category_id': 1},
    {'name':'testmusique' , 'category_id': 2}
];

app.service('itemProvider', function (){
    this.getItems = function (){
        return items;
    }
});


