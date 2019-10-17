birka.compiler.Message = function(table){
    /**
     * ...
     *
     * @type {HTMLElement}
     */
    //this.tbody = Elem.appendNewElem(table, 'tbody');
    this.tbody = null;

    this.messages = [];

};

//------------------------------------------------------------------------------
// Public methods
//------------------------------------------------------------------------------
/**
 * Creates row in table.
 *
 * @param   {Object} data ...
 * @returns {undefined}
 */
birka.compiler.Message.prototype.create = function(table, pos) {
    this.tbody = Elem.createClassElem('tbody', 'message');

    table.insertBefore(this.tbody, table.children[pos+1]);
};

birka.compiler.Message.prototype.addMessage = function(status) {
    if(status.length > 0){
        for(var i = 0; i<status.length; i++) {
            var msg = new birka.compiler.MessageRow(this.tbody, status[i]);
            msg.setStatus = status[i];
            this.messages.push(msg);
        }
    } else {
        var msg = new birka.compiler.MessageRow(this.tbody, status);
        msg.setStatus = status;
        this.messages.push(msg);
    }
    this.tbody.style.display = "none";
};


birka.compiler.Message.prototype.addMessageAt = function(status, pos) {
        for(var i = 0; i<status.length; i++) {
            var msg = new birka.compiler.MessageRow(this.tbody, status[i]);
            msg.setStatus = status[i];
            this.messages.push(msg);
        }
    this.tbody.style.display = "none";
};

birka.compiler.Message.prototype.removeDup = function(status, pos) {
    for(var i = 0; i<this.messages.length; i++) {
        if(this.messages[i].status === 2) {
            this.tbody.removeChild(this.messages[i].element);
            this.messages.splice(i, 1);
        }
    }
};


birka.compiler.Message.prototype.containsDuplicateErr = function() {
    var flag = false;
    for(var i = 0; i<this.messages.length; i++) {
        if(this.messages[i].status === 2) {
           flag = true;
        } else {
            flag = false;
        }
    }
    return flag;
};


