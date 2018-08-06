// Sample 2-1
// Show the HTML in the element whose ID is sample-2-1
function sample2_1_1() {
  var element = document.getElementById('sample-2-1');
  var content = element.innerHTML;
  console.log(content);
}

// Show the text in the element whose ID is sample-2-1
function sample2_1_2() {
  var element = document.getElementById('sample-2-1');
  var text = element.textContent;
  console.log(text);
}

// Sample 2-2
// Show the href attribute in the element whose ID is sample-2-link
function sample2_2_1() {
  var element = document.getElementById('sample-2-link');
  var attribute = element.getAttribute('href');
  console.log(attribute);
}

// Check if the element whose ID is sample-2-2 has a sample-content class
function sample2_2_2() {
  var element = document.getElementById('sample-2-2');
  var containsSampleContent = element.classList.contains('sample-content');
  console.log(containsSampleContent);
}

// Sample 2-3
// Get the value of the textbox
function sample2_3_1() {
  var element = document.getElementById('textbox');
  var value = element.value;
  console.log(value);
}

// Get the status of the checkbox
function sample2_3_2() {
  var element = document.getElementById('checkbox');
  var checked = element.checked;
  console.log(checked);
}

// Check if the checkbox is enabled
function sample2_3_3() {
  var element = document.getElementById('checkbox');
  var disabled = element.disabled;
  console.log(disabled);
}

// Sample 2-4
// Set the content of the textarea as HTML in the element whose ID is content
function sample2_4_1() {
  var textarea = document.getElementById('textarea');
  var content = document.getElementById('content');
  var value = textarea.value;
  content.innerHTML = value;
}

// Set the content of the textarea as text in the element whose ID is content
function sample2_4_2() {
  var textarea = document.getElementById('textarea');
  var content = document.getElementById('content');
  var value = textarea.value;
  content.textContent = value;
}

// Sample 2-5
// Set the src attribute of the element whose ID is sample-2-img
function sample2_5_1() {
  var element = document.getElementById('sample-2-img');
  element.setAttribute('src', 'img/hub1.jpg');
}

// Delete the sample-content class from the element whose ID is sample-2-5
function sample2_5_2() {
  var element = document.getElementById('sample-2-5');
  element.classList.remove('sample-content');
}

// Add the sample-content class tothe element whose ID is sample-2-5
function sample2_5_3() {
  var element = document.getElementById('sample-2-5');
  element.classList.add('sample-content');
}

// Sample 2-6
// Set the value of the textbox
function sample2_6_1() {
  var element = document.getElementById('textbox2');
  element.value = 'hello';
}

// Set the status of the checkbox
function sample2_6_2() {
  var element = document.getElementById('checkbox2');
  element.checked = true;
}

// Set the checkbox disabled
function sample2_6_3() {
  var element = document.getElementById('checkbox2');
  element.disabled = true;
}