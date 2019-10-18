const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {
    	let newNode = new Node(data);
      if(this._head == null){
        this._head = newNode;
        this._tail = newNode;
      }
      else{
        this._tail.next = newNode;
        newNode.prev = this._tail; 
        this._tail = newNode;       
			}
			
      this.length++;
      return this;
    }

    head() {
      if(this.length == 0){
        return null;
			}
			
      return this._head.data;
    }

    tail() {
    	if(this.length == 0){
        return null;
      }
			
			return this._tail.data;
    }

    at(index) {
      if(index == 0){
        return this._head.data;
			}
      let counter = 1;
      let current = this._head;
      while(current){
        current = current.next;
        if(counter == index){
          return current.data;
				}
        counter++;
      }
    }

    insertAt(index, data) {
    	if(this.length == 0){
        return this.append(data);
      }
      let newNode = new Node(data);
      if(index == 0){
      	this._head.prev = newNode;
        newNode.next = this._head;
        this._head = newNode;
        this.length++;
        return this;
      }
      else{
        let counter = 1;
        let current = this._head.next;
        while(current){
          if(counter == index){
            newNode.prev = current.prev;
            current.prev.next = newNode;
            newNode.next = current;
            current.prev = newNode;
            this.length++;
            return this;
          }
          current = current.next;
          counter++;
        }
      }
    }

    isEmpty() {
      if(this._head == null){
        return true;
			}
			
      return false;
    }

    clear() {
    	while(this.length){
				this.deleteAt(0);
		 	}
		 
     return this;
    }

    deleteAt(index) {
    	let current = this._head;
      for(let i = 0;i<index;i++){
        current = current.next;
      }
      if(this._head === this._tail) {
        this._head = null;
        this._tail = null;
      }
      else if(current = this._head){
        this._head = this._head.next;
        this._head.prev = null;
      }
      else if(current === this._tail) {
        this._tail = this._tail.prev;
        this._tail.next = null;
      }
      else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    	this.length--;
      return this;
   }

    reverse() {

      this._tail = this._head;
    	let current = this._head;
      let tmp = null;
      while(current){
        current.prev = current.next;;
        current.next = tmp;
        tmp = current;
        if(current.prev){
          current = current.prev;
        }
        else {
        	this._head = current;
          break;
        }
      }
      return this;
    }

    indexOf(data) {
      let current = this._head;
      let counter = 0;
      while(current){
        if (current.data == data){
          return counter;
        }
        current = current.next;
        counter++;
      }
    	return -1;   
    }
}

module.exports = LinkedList;
