/*
######## built queue datastructure for js ############
first I need to creat node to use it in queue:
  - node -> each node = {value, pointer}
second:  
  - create: 
    1. push func
    2. pop func
    3. isEmpty func
    4. top func
    5. print func
start time: 03:30
end time: 04:00
*/

class queue {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (!this.isEmpty()) {
      this.items.shift();
    }
  }

  top() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}
