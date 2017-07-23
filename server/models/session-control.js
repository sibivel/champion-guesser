'use strict';
class SessionObject{
        
        constructor(key){
            this.key = key;
            this.date = new Date().getTime(); 
            this.correctAnswerCount = 0;
        }
}

module.exports = {
    sessionMap : {},

    SessionObject : SessionObject
}