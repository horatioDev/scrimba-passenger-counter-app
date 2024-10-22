let countEl = document.getElementById('count')
let incrementBtn = document.getElementById('increment-btn')
let savedEntries = document.getElementById('saved-entries')
// intialize the count as 0
let count = 0;
// listen for clicks on the increment button
incrementBtn.addEventListener('click', increment)
// increment the count variable when the button is clicked
function increment() {
  count += 1;
  // change the count-el in the HTML to reflect the new count
  return countEl.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let seperator = ' - ';
  let savedCount = count + seperator;
  // 3. Render the variable in the saveEl using innerText
  savedEntries.textContent += savedCount;
  count = 0;
  countEl.innerText = count;
  // NB: Make sure to not delete the existing content of the paragraph
  console.log('The subway count is:', savedCount)
}
