export class LinkedList {
  constructor () {
    this.head = null;
  }

  add (key, value) {
    const node = new Node(key, value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
    return this;
  }

  getKey (key) {
    return getKeyInList(this.head, key);
  }

  hasKey (key) {
    return checkKeyInList(this.head, key);
  }

  removeNode (key) {
    let tmp = this.head;

    while (tmp.nextNode) {
      if (tmp.key === key) {
        this.head = tmp.nextNode;
        return true;
      }
      if (tmp.nextNode.key === key) {
        tmp.nextNode = tmp.nextNode.nextNode;
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }
}

export class Node {
  constructor (key, value = key, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

function getKeyInList (head, key) {
  if (!head) return null;
  if (head.key === key) return head.value;
  return getKeyInList(head.nextNode, key);
}

function checkKeyInList (head, key) {
  if (!head) return false;
  if (head.key === key) return true;
  return checkKeyInList(head.nextNode, key);
}
