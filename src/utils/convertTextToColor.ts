function letterToIndex (letter :string) :number {
  /**
   * converts letters into int in a range from 0 - 28
   */
  const specChars: { [key: string]: number} = {'æ': 26, 'ø': 27, 'å': 28, 'Æ': 26, 'Ø': 27, 'Å': 28};
  if (Object.keys(specChars).includes(letter)){
    return specChars[letter]
  }
  // the ascii value,
  // 65 for Uppercase letters and 97 for lowercase letters 
  return letter.charCodeAt(0) - (letter === letter.toLowerCase() ? 97 : 65);
}

function indexToRGB (idx1: number): number {
  return (idx1 / 28) * 255;
}

function convertTextToColor(str :string): string {
  const stringToLetters = str.split('');
  let gVal=0; let bVal=0;
  const rVal = indexToRGB(letterToIndex(stringToLetters[0]));
  
  if (stringToLetters.length >= 2 ){
    gVal = indexToRGB(letterToIndex(stringToLetters[1]));
  }
  if (stringToLetters.length >= 3 ){
    bVal = indexToRGB(letterToIndex(stringToLetters[2]));
  }

  return `rgb(${Math.round(rVal * 100) / 100}, ${Math.round(gVal * 100) / 100}, ${Math.round(bVal * 100) / 100})`
}

export default convertTextToColor;