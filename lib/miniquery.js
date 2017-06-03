class SweetSelector {
  static select(input){
    return document.querySelectorAll(input);
  }
}

class DOM {
  static hide(input){
    return document.querySelectorAll(input).style.visiblity = 'hidden';
  }
  static show(input){
    return document.querySelectorAll(input).style.visiblity = 'visible';
  }
  static addClass(input, clas){
    return document.querySelectorAll(input).classList.add(clas);
  }
  static removeClass(input , clas){
    return document.querySelectorAll(input).classList.remove(clas);
  }
}

class EventDispatcher{
  static on(clas, even, print){
    return document.querySelector(clas).addEventListener(even, print);
  }
}

class AjaxWrapper {
  static request(obj){
    var xhttp = new XMLHttpRequest();
    xhttp.open(obj.type, obj.url, true);
    xhttp.onload = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        obj.success(xhttp.responseText);
      } else {
        obj.fail();
      }
    };
    xhttp.send();
  }
}
/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
