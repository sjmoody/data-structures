var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var next = 0;
  var stack = {storage: storage, next: next};
  stack.pop = pop;
  stack.push = push;
  stack.size = size;

  return stack;
};

var size = function() {
  return this.next;
};

var push = function(value) {
  // add value to position next
  var next = this.next;
  this.storage[next] = value;
  this.next++;

  // increment next
};

var pop = function() {
  // make sure size is > 0
  var next = this.next;
  if (next > 0) {
    var last = next - 1;
    var result = this.storage[last];
    delete this.storage[last];
    this.next--;
    return result;
  }

};

//   var storage = {size: 0, pointer: -1};
//   var stack = {storage: storage};
//   stack.pop = pop;
//   stack.push = push;
//   stack.size = size;

//   return stack;

// };

// var size = function() {
//   return this.storage.size;
// };

// var push = function(value) {
//   this.storage.size++;
//   let pointer = this.storage.pointer++;
//   this.pointer = value;


//   // var size = this.storage.next;
//   // this.next = value;
//   // this.storage.next++;
// };

// var pop = function() {
//   var pointer = this.storage.pointer;
//   if (this.pointer === 'c') { debugger; }
//   // log every key value pair because I can't find it in this
//   console.log('pointer to value ' + this.pointer);
//   var less = this.pointer - 1;
//   console.log('before that: ' + this.less);

//   if (pointer > -1) {
//     // pointer is always on the last filled position
//     var result = this.pointer;
//     delete this.pointer;
//     this.storage.pointer--;
//     this.storage.size--;
//     return result;
//   }



//   //imagine you start with three at 0, 1, 2
//   // next == 3
//   // then you pop: next == 2, return this[3]
//   // pop again: next == 1, return this[2]

//   // var next = this.storage.next;
//   // if (next > 2) { debugger; }
//   // if (next > 0) {
//   //   // if next > 0, more than 0 items in stack
//   //   // store last item
//   //   this.storage.next--;
//   //   var result = this.next;
//   //   // delete in stack but result will remain
//   //   delete this[next];
//   //   return result;

//   // }

// };


