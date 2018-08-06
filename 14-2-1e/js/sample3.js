// Display the event and coordinates on an element whose ID is type
function printEvent(event) {
  var type = document.getElementById('type');
  var html = event.type + ' (' + event.offsetX + ',' + event.offsetY + ')<br>';
  type.innerHTML += html;
}

// Display the coordinates of the event on the element whose ID is x and y
function printCoordinate(event) {
  var offsetX = event.offsetX;
  var offsetY = event.offsetY;
  var x = document.getElementById('x');
  var y = document.getElementById('y');
  x.textContent = offsetX;
  y.textContent = offsetY;
}

// Register an event handler in the element whose ID is field
var element = document.getElementById('field');
element.addEventListener('click', printEvent);
element.addEventListener('dblclick', printEvent);
element.addEventListener('mousedown', printEvent);
element.addEventListener('mouseup', printEvent);
element.addEventListener('mouseover', printEvent);
element.addEventListener('mouseenter', printEvent);
element.addEventListener('mouseleave', printEvent);
element.addEventListener('mousemove', printCoordinate);
