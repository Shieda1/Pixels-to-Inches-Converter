// https://www.omnicalculator.com/conversion/pixels-to-inches

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const inchesRadio = document.getElementById('inchesRadio');
const pixelsRadio = document.getElementById('pixelsRadio');
const resolutionRadio = document.getElementById('resolutionRadio');

let inches;
let pixels = v1;
let resolution = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

inchesRadio.addEventListener('click', function() {
  variable1.textContent = 'Pixels';
  variable2.textContent = 'Resolution';
  pixels = v1;
  resolution = v2;
  result.textContent = '';
});

pixelsRadio.addEventListener('click', function() {
  variable1.textContent = 'Inches';
  variable2.textContent = 'Resolution';
  inches = v1;
  resolution = v2;
  result.textContent = '';
});

resolutionRadio.addEventListener('click', function() {
  variable1.textContent = 'Inches';
  variable2.textContent = 'Pixels';
  inches = v1;
  pixels = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(inchesRadio.checked)
    result.textContent = `Inches = ${computeinches().toFixed(2)}`;

  else if(pixelsRadio.checked)
    result.textContent = `Pixels = ${computepixels().toFixed(2)}`;

  else if(resolutionRadio.checked)
    result.textContent = `Resolution = ${computeresolution().toFixed(2)}`;
})

// calculation

function computeinches() {
  return Number(pixels.value) * Number(resolution.value);
}

function computepixels() {
  return Number(inches.value) / Number(resolution.value);
}

function computeresolution() {
  return Number(inches.value) / Number(pixels.value);
}