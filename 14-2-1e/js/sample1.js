// Sample 1-1
// Search for an element whose ID is sample-1
function sample1_1() {
  var element = document.getElementById('sample-1');
  var text = element.textContent;
  console.log(text);
}

// Sample 1-2
// Search for H2 elements
function sample1_2_1() {
  var elements = document.getElementsByTagName('h2');
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent;
    console.log(text);
  }
}

// Search for H2 elements in the element whose ID is sample-2
function sample1_2_2() {
  var element = document.getElementById('sample-1-2');
  var elements = element.getElementsByTagName('h2');
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent;
    console.log(text);
  }
}

// Sample 1-3
// Search for elements whose class are sample-description
function sample1_3_1() {
  var elements = document.getElementsByClassName('sample-description');
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent;
    console.log(text);
  }
}

// Search for elements whose class are sample-description in the element whose ID is sample-3
function sample1_3_2() {
  var element = document.getElementById('sample-1-3');
  var elements = element.getElementsByClassName('sample-description');
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent;
    console.log(text);
  }
}

// Sample 1-4
// Search for the elements that macthes "#sample-1-4 h2"
function sample1_4_1() {
  var elements = document.querySelectorAll('#sample-1-4 h2');
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent;
    console.log(text);
  }
}

// Search for the elements that macthes ".sample-description" in the element whose ID is sample-4
function sample1_4_2() {
  var element = document.getElementById('sample-1-4');
  var elements = element.querySelectorAll('.sample-description');
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent;
    console.log(text);
  }
}
