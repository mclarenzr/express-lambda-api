(function(){
    'use strict';

var Customer = require('../model/Customer');

class CustomerBuilder {

    constructor(name) {
        this.name = name;
    }

    setNIN(nin) {
        this.nin = nin;
    }

    setMEID(meid) {
        this.meid = meid;
    }


    build() {
        return new Customer(this);
    }


}

module.exports = CustomerBuilder;

}());