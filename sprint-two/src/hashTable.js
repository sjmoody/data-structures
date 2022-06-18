

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // index is the value in the storage but not in the bucket
  // in this limited array we check for collision and then set when no collision
  var bucket = [];
  if(this._storage.get(index)) {
    // if there is already a value at index
    // get value, add new key value pair, and then set index on the storage as new bucket
    bucket = this._storage.get(index);
    // see if bucket already has a pair with k
    var overwriteFlag = false;
    for(var b of bucket) {
      if(b[0] === k) {
        b[1] = v;
        overwriteFlag = true;
      }
    }
    // if overwriteflag is false then add new tuple
    if(!overwriteFlag){
      var newArr = [k, v];
      bucket.push(newArr);
    }
  } else {
    bucket = [[k, v]];
  }
  this._storage.set(index, bucket);
};

// get index where bucket exists
// then iterate through bucket to find k
// then return value from array at k
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var b of bucket) {
    if(b[0] === k) {
      return b[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var b of bucket) {
    if(b[0] === k) {
      bucket.splice(b, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n), but most case should be O(1)
 * retrieve: O(1) if well maintained table
 * remove: O(1)
 */


