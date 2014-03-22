function findTextNode(node) {
  var store = [];
  if (node.nodeType == 3 && !/^\s+$/.test(node.nodeValue)) {
      store.push(node);
  } else {
      for (var i = 0, len = node.childNodes.length; i < len; i++) {
          findTextNode(node.childNodes[i]);
      }
  }
}
