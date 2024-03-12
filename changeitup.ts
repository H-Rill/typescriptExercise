function wrapAroundAlphabet(inputString: string): string {
    const result: string[] = [];
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      if (/^[a-zA-Z]$/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const alphabetStart = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const alphabetEnd = isUpperCase ? 'Z'.charCodeAt(0) : 'z'.charCodeAt(0);
        const charCode = char.charCodeAt(0);
  
        const newCharCode = ((charCode - alphabetStart + 1) % (alphabetEnd - alphabetStart + 1)) + alphabetStart;
  
        const newChar = String.fromCharCode(newCharCode);
  
        result.push(isUpperCase ? newChar.toUpperCase() : newChar.toLowerCase());
      } else {
        result.push(char);
      }
    }
  
    return result.join('');
  }
  
  const inputString = 'Wat30';
  const resultString = wrapAroundAlphabet(inputString);
  