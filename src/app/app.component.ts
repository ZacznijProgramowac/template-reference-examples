import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  // wstrzykiwanie przez nazwę referenji
  @ViewChild('child1')
  childOne: ChildComponent;

  // tak było kiedyś, w wersji 8 dodatkowo trzeba było ustawić static
  // @ViewChild('child', { static: false })
  // child: ChildComponent

  // wstrzykiwanie przez nazwę klasy komponentu
  // w przypadku wielu, wstrzyknięty będzie pierwszy
  @ViewChild(ChildComponent)
  childByName: ChildComponent;

  // wstrzykiwanie wszystkich komponentów
  @ViewChildren(ChildComponent)
  allChildren: QueryList<ChildComponent>;

  // wstrzyknięcie elementu html przez referencję
  @ViewChild('button')
  buttonElement: ElementRef;

  printAll() {
    this.allChildren.forEach(item => item.print());
  }

  ngAfterViewInit(): void {
    console.log('Button', this.buttonElement);
  }
}
