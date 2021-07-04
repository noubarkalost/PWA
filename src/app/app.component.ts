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
  footerDate: string = new Date(Date.now()).getFullYear().toString();
  password: string = '';
  isCopied: boolean = false;

  onChangeLength(event: any): void {
    const { value } = event.target;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick(): void {
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijklmnopqrstuvwxyz';
    const symbols: string = '!@#$%^&*()';
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
    let generatedPassword: string = '';
    for (let i = 0; i < this.length; i++) {
      const index: number = Math.floor(Math.random() * valideChars.length);
      generatedPassword += valideChars[index];
    }
    this.password = generatedPassword;
  }
  getPassword(): string {
    return this.password;
  }
  copyText(): void {
    this.clipboardApi.copyFromContent(this.password);
    this.isCopied = true;
    this.resetIsCopied();
  }
  resetIsCopied(): void {
    setTimeout(() => {
      this.isCopied = false;
    }, 4000);
  }
}
