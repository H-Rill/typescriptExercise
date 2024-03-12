function validateISBN10(isbn: string): boolean {
    const cleanIsbn = isbn.replace(/[^0-9X]/gi, (char) => (char === 'X' ? '10' : char));
  
    if (cleanIsbn.length !== 10) {
      return false;
    }
  
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      const digit = parseInt(cleanIsbn[i], 10);
      if (isNaN(digit)) {
        return false;
      }
      sum += digit * (10 - i);
    }
  
    return sum % 11 === 0;
  }
  
  console.log(validateISBN10("1112223339")); 
  console.log(validateISBN10("111222333"));
  console.log(validateISBN10("1112223339X")); 
  console.log(validateISBN10("1234554321")); 
  console.log(validateISBN10("1234512345")); 
  console.log(validateISBN10("048665088X")); 
  console.log(validateISBN10("X123456788"));
  