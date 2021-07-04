import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  password = '';
  onChangeLength(event: any) {
    const { value } = event.target;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(parsedValue);
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let valideCHars = '';
    if (this.includeLetters) {
      valideCHars += letters;
    }
    if (this.includeNumbers) {
      valideCHars += numbers;
    }
    if (this.includeSymbols) {
      valideCHars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * valideCHars.length);
      generatedPassword += valideCHars[index];
    }
    this.password = generatedPassword;
  }
  getPassword() {
    return this.password;
  }
}
