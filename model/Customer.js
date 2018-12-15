(function(){
    'use strict';
    
class Customer {

    constructor(builder) {
        this.name = builder.name
        this.nin = builder.nin;  
        this.meid = builder.meid;
        this.industry = builder.industry;
        this.segment = builder.segment;     
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Customer;
}());