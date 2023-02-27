module.exports = function toReadable (number) {

  const oneArr = ['zero', 'one', 'two', 'three','four','five','six', 'seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen']
  const twoArr = ['twenty', 'thirty', 'forty', 'fifty','sixty','seventy','eighty', 'ninety']

  const numberStr = String(number).split('')

  if (number <= 19) {
    return oneArr[number]
  }
  if (number <= 99 && numberStr[1] === "0" ) { 
    return twoArr[numberStr[0] - 2]
  }
  if (number <= 99 && number[1] !== "0" ) {
    return `${twoArr[numberStr[0] - 2]} ${oneArr[numberStr[1]]}`
  }
  if (number <= 999 && numberStr[1] ==="0" && numberStr[2] ==="0") {
    return `${oneArr[numberStr[0]]} hundred`
  }
  if (number <=999 && numberStr[1] <= "1") { 
    return `${oneArr[numberStr[0]]} hundred ${oneArr[Number(numberStr.slice(1,numberStr.length).join(''))]}`
  }
  if (number <=999 && numberStr[2] ==="0") {
    return `${oneArr[numberStr[0]]} hundred ${twoArr[numberStr[1] - 2]}`
  }
  if (number <= 999) {
    return `${oneArr[numberStr[0]]} hundred ${twoArr[numberStr[1] - 2]} ${oneArr[numberStr[2]]}`
  }
}

