import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() version: number;
  print() {
    console.log('Tutaj ChildComponent, moja wersja to: ', this.version);
  }
}
