import { Injectable } from '@angular/core';

enum INPUT_TYPE {
  PASSWORD = 'password',
  TEXT = 'text'
}

// to deal password related matters on ui i.e. password hide/show
@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() {
  }

  hasUppercaseLetter(word: string) {
    let hasUppercase: boolean = false

    for (let index = 0; index < word.length; index++) {
      const char = word[index];

      if (char === char.toUpperCase() && !Number.parseInt(char)) {
        hasUppercase = true
      }
    }

    return hasUppercase
  }

  hasLowercaseLetter(word: string) {
    let hasLowercase: boolean = false

    for (let index = 0; index < word.length; index++) {
      const char = word[index];

      if (char == char.toLowerCase())
        hasLowercase = true
    }

    return hasLowercase
  }

  hasDigit(word: string) {
    let hasDigit: boolean = false

    for (let index = 0; index < word.length; index++) {
      const char = word[index];

      if (Number.parseInt(char))
        hasDigit = true
    }

    return hasDigit
  }
}
