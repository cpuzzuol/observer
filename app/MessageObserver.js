"use strict"

var util = require('util');
var EventEmitter = require('events').EventEmitter;

class MessageObserver extends EventEmitter{
    constructor(){
        super()
        this.count = 0
    }

    updateCount(){
        this.count += 1
        this.emit('update', this.count);
    }
}

module.exports = MessageObserver
