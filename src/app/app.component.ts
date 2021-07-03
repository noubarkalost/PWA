import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  password = '';
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
    console.log(this.includeLetters, this.includeNumbers, this.includeSymbols);
    this.password = 'my password';
  }
  getPassword() {
    return this.password;
  }
}
