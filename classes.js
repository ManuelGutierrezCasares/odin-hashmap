import { LinkedList } from './helpers.js';

export class HashMap {
  constructor () {
    this.arr = [];
    this.arr.length = 16;
    this.arr.loadFactor = 0.75;
    this.arr.capacity = 0;
  }

  checkLength (index) {
    if (index < 0 || index >= this.arr.length) {
      throw new Error('Trying to access index out of bound');
    }
  }

  hash (key) {
    // Hash Function
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.arr.length;
    }

    return hashCode;
  }

  set (key, value) {
    const hashedKey = this.hash(key);

    // Throw an error if we try to access an out of bound index
    this.checkLength(hashedKey);

    // Enhance array length when capacity is above Load Factor
    if (this.arr.capacity >= (this.arr.length * this.arr.loadFactor)) {
      this.arr.length *= 2;
      console.log('CAPACITY ENHANCED');
    }

    if (!this.arr[hashedKey]) {
      // Create Key:Value Object
      this.arr.capacity++;
      this.arr[hashedKey] = {};
      this.arr[hashedKey][key] = value;
      return this;
    } else if (this.arr[hashedKey] && this.arr[hashedKey][key]) {
      // Update Object Value
      this.arr[hashedKey][key] = value;
      return this;
    }

    if (this.arr[hashedKey].head) {
      // Add to existing Linked List on colission
      const list = this.arr[hashedKey];
      list.add(key, value);
      return this;
    } else if (this.arr[hashedKey]) {
      // Create Linked List on first colission
      const list = new LinkedList();
      list.add(Object.keys(this.arr[hashedKey])[0], Object.values(this.arr[hashedKey])[0]);
      list.add(key, value);
      this.arr[hashedKey] = list;
      return this;
    }
  }

  get (key) {
    const hashedKey = this.hash(key);

    // Throw an error if we try to access an out of bound index
    this.checkLength(hashedKey);

    // Check if Key is in Object
    if (!this.arr[hashedKey]) {
      return null;
    } else if (this.arr[hashedKey] && this.arr[hashedKey][key]) {
      return this.arr[hashedKey][key];
    }

    // Check if Key is in Linked List
    if (this.arr[hashedKey].head) {
      const list = this.arr[hashedKey];
      return list.getKey(key);
    }
  }

  has (key) {
    const hashedKey = this.hash(key);

    // Throw an error if we try to access an out of bound index
    this.checkLength(hashedKey);

    // Check if Key is in Object
    if (!this.arr[hashedKey]) {
      return false;
    } else if (this.arr[hashedKey] && this.arr[hashedKey][key]) {
      return true;
    }

    // Check if Key is in Linked List
    if (this.arr[hashedKey].head) {
      const list = this.arr[hashedKey];
      return list.hasKey(key);
    }
  }

  remove (key) {
    const hashedKey = this.hash(key);

    // Throw an error if we try to access an out of bound index
    this.checkLength(hashedKey);

    // Remove if Key is in Object
    if (!this.arr[hashedKey]) {
      return false;
    } else if (this.arr[hashedKey] && this.arr[hashedKey][key]) {
      this.arr.capacity--;
      this.arr.splice(hashedKey, 1, {});
      return true;
    }
    // Remove if Key is in Linked List
    if (this.arr[hashedKey].head) {
      const list = this.arr[hashedKey];
      return list.removeNode(key);
    }
  }

  length () {
    // Count how many total Keys does the HashMap has
    let count = 0;

    this.arr.forEach(e => {
      if (!e.head) {
        // Get Keys from Objects
        count++;
      } else {
        // Get Keys from Linked Lists
        let tmp = e.head;
        while (tmp) {
          count++;
          tmp = tmp.nextNode;
        }
      }
    });
    return count;
  }

  clear () {
    // Reset the HashMap

    this.arr = [];
    this.arr.length = 16;
    this.arr.loadFactor = 0.75;
    this.arr.capacity = 0;
  }

  keys () {
    // Get HashMap Keys as an array
    const array = [];

    this.arr.forEach(e => {
      if (!e.head) {
        // Get Keys from Objects
        array.push(Object.keys(e)[0]);
      } else {
        // Get Keys from Linked Lists
        let tmp = e.head;
        while (tmp) {
          array.push(tmp.key);
          tmp = tmp.nextNode;
        }
      }
    });
    return array;
  }

  values () {
    // Get HashMap Values as an array
    const array = [];

    this.arr.forEach(e => {
      if (!e.head) {
        // Get Values from Objects
        array.push(Object.values(e)[0]);
      } else {
        // Get Values from Linked Lists
        let tmp = e.head;
        while (tmp) {
          array.push(tmp.value);
          tmp = tmp.nextNode;
        }
      }
    });
    return array;
  }

  entries () {
    // Get HashMap Keys and Values pairs as an array
    const array = [];

    this.arr.forEach(e => {
      let tmpArr = [];

      if (!e.head) {
        // Get Data from Objects
        tmpArr.push(Object.keys(e)[0]);
        tmpArr.push(Object.values(e)[0]);
        array.push(tmpArr);
      } else {
        // Get Data from Linked Lists
        let tmp = e.head;
        while (tmp) {
          tmpArr.push(tmp.key);
          tmpArr.push(tmp.value);
          array.push(tmpArr);
          tmpArr = [];
          tmp = tmp.nextNode;
        }
      }
    });
    return array;
  }
}

export class HashSet {
  constructor () {
    this.arr = [];
    this.arr.length = 16;
    this.arr.loadFactor = 0.75;
    this.arr.capacity = 0;
  }

  checkLength (index) {
    if (index < 0 || index >= this.arr.length) {
      throw new Error('Trying to access index out of bound');
    }
  }

  hash (key) {
    // Hash Function
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.arr.length;
    }

    return hashCode;
  }

  set (key) {
    const hashedKey = this.hash(key);

    // Throw an error if we try to access an out of bound index
    this.checkLength(hashedKey);

    // Enhance array length when capacity is above Load Factor
    if (this.arr.capacity >= (this.arr.length * this.arr.loadFactor)) {
      this.arr.length *= 2;
      console.log('CAPACITY ENHANCED');
    }

    if (!this.arr[hashedKey]) {
      // Create Key:Key Object
      this.arr.capacity++;
      this.arr[hashedKey] = {};
      this.arr[hashedKey] = key;
      return this;
    }

    if (this.arr[hashedKey].head) {
      // Add to existing Linked List on colission
      const list = this.arr[hashedKey];
      list.add(key);
      return this;
    } else if (this.arr[hashedKey]) {
      // Create Linked List on first colission
      const list = new LinkedList();
      list.add(this.arr[hashedKey]);
      list.add(key);
      this.arr[hashedKey] = list;
      return this;
    }
  }

  has (key) {
    const hashedKey = this.hash(key);

    // Throw an error if we try to access an out of bound index
    this.checkLength(hashedKey);

    // Check if Key is in Object
    if (!this.arr[hashedKey]) {
      return false;
    } else if (this.arr[hashedKey] && this.arr[hashedKey][key]) {
      return true;
    }

    // Check if Key is in Linked List
    if (this.arr[hashedKey].head) {
      const list = this.arr[hashedKey];
      return list.hasKey(key);
    }
  }

  remove (key) {
    const hashedKey = this.hash(key);

    // Throw an error if we try to access an out of bound index
    this.checkLength(hashedKey);

    // Remove if Key is in Object
    if (!this.arr[hashedKey]) {
      return false;
    } else if (this.arr[hashedKey] && this.arr[hashedKey][key]) {
      this.arr.capacity--;
      this.arr.splice(hashedKey, 1, {});
      return true;
    }
    // Remove if Key is in Linked List
    if (this.arr[hashedKey].head) {
      const list = this.arr[hashedKey];
      return list.removeNode(key);
    }
  }

  length () {
    // Count how many total Keys does the HashMap has
    let count = 0;

    this.arr.forEach(e => {
      if (!e.head) {
        // Get Keys from Objects
        count++;
      } else {
        // Get Keys from Linked Lists
        let tmp = e.head;
        while (tmp) {
          count++;
          tmp = tmp.nextNode;
        }
      }
    });
    return count;
  }

  clear () {
    // Reset the HashMap

    this.arr = [];
    this.arr.length = 16;
    this.arr.loadFactor = 0.75;
    this.arr.capacity = 0;
  }

  keys () {
    // Get HashMap Keys as an array
    const array = [];

    this.arr.forEach(e => {
      if (!e.head) {
        // Get Keys from Objects
        array.push(e);
      } else {
        // Get Keys from Linked Lists
        let tmp = e.head;
        while (tmp) {
          array.push(tmp.key);
          tmp = tmp.nextNode;
        }
      }
    });
    return array;
  }

  values () {
    // Get HashMap Values as an array
    const array = [];

    this.arr.forEach(e => {
      if (!e.head) {
        // Get Key from Objects
        array.push(e);
      } else {
        // Get Key from Linked Lists
        let tmp = e.head;
        while (tmp) {
          array.push(tmp.value);
          tmp = tmp.nextNode;
        }
      }
    });
    return array;
  }

  entries () {
    // Get HashMap Keys and Values pairs as an array
    const array = [];

    this.arr.forEach(e => {
      let tmpArr = [];

      if (!e.head) {
        // Get Data from Objects
        tmpArr.push(e);
        tmpArr.push(e);
        array.push(tmpArr);
      } else {
        // Get Data from Linked Lists
        let tmp = e.head;
        while (tmp) {
          tmpArr.push(tmp.key);
          tmpArr.push(tmp.value);
          array.push(tmpArr);
          tmpArr = [];
          tmp = tmp.nextNode;
        }
      }
    });
    return array;
  }
}
