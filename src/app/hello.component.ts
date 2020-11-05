import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <div class="container-fluid">
    <wj-calendar #theCalendar>
    </wj-calendar>
    <div>
        The current date is <b>{{ theCalendar.value | date:'fullDate'}}</b>.
    </div>
  </div>`,
  styles: [`h1 { font-family: Lato;}`]
})
export class HelloComponent  {
  @Input() name: string;
}