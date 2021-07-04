import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private clipboardApi: ClipboardService) {}

  length: number = 0;
  includeLetters: boolean = false;
  includeSymbols: boolean = false;
  includeNumbers: boolean = false;
  footerDate: any = new Date(Date.now()).getFullYear().toString();
  password: string = '';
  isCopied: boolean = false;
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
    let valideChars = '';
    if (this.includeLetters) {
      valideChars += letters;
    }
    if (this.includeNumbers) {
      valideChars += numbers;
    }
    if (this.includeSymbols) {
      valideChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * valideChars.length);
      generatedPassword += valideChars[index];
    }
    this.password = generatedPassword;
  }
  getPassword() {
    return this.password;
  }
  copyText() {
    this.clipboardApi.copyFromContent(this.password);
    this.isCopied = true;
    console.log(this.isCopied);
    this.resetIsCopied();
    console.log(this.isCopied);
  }
  resetIsCopied() {
    setTimeout(() => {
      this.isCopied = false;
      console.log(this.isCopied);
    }, 2000);
  }
}
