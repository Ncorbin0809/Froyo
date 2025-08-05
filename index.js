//prompt for list of flavors//
function flavorPrompt() {
  const userInput = prompt('Please enter your favorite froyo flavors!')
  //return user entry in comma seperated strings//
  return userInput.split(',').map((element) => element.trim())
}
//iterate through and count num of flavors and save to object
function countNumOfFlavors(flavorArray) {
  const flavorCountTracker = {}

  for (const flavor of flavorArray) {
    flavorCountTracker[flavor] = (flavorCountTracker[flavor] || 0) + 1
  }
  return flavorCountTracker
}

//start the functions getting user input, counting flavors and logging them//
const start = flavorPrompt()
const countOfFlavors = countNumOfFlavors(start)

console.log('Flavor count:')
console.log(countOfFlavors)
