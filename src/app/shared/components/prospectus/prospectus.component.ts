import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";

@Component({
  selector: 'app-prospectus',
  templateUrl: './prospectus.component.html',
  styleUrls: ['./prospectus.component.scss']
})
export class ProspectusComponent implements OnInit {

  @Input() paddingTop: string = '';
  @Input() range = {first: '', last: ''};
  @Input() NumberFromLastYear: number = 0;
  @Input() customRange: TabsInterface[] = [];
  @Input() maxAutoFill: boolean = false;
  @Input() flipping: boolean = false;
  @Input() text: boolean = true;

  @Output() currentTab: any = new EventEmitter<string>();

  public tabs: TabsInterface[] = []

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 2021; i < 2050; i++) {
      this.tabs.push({
        header: i.toString(),
        translateCode: '',
        link: '',
        active: false
      })
    }
  }

  getEmitCurrentTab(tab: TabsInterface): void {
    this.currentTab.emit(tab);
  }


  clickLeft() {
    // let element = document.getElementById('tabs-sec')
    // let width = document.getElementById('tabs-sec2021');
    // // @ts-ignore
    // let style = window.getComputedStyle(width);
    // if (element && width && style) {
    //   console.log(width.scrollWidth + style.paddingRight);
    //   element.scrollLeft -= width.clientWidth;
    // }
  }

  clickRight() {
    // let element = document.getElementById('tabs-sec')
    // let width = document.getElementById('tabs-sec2021');
    // // @ts-ignore
    // let style = window.getComputedStyle(width);
    // if (element && width && style) {
    //   console.log(width.scrollWidth + style.paddingRight);
    //   element.scrollLeft += width.clientWidth;
    // }
  }
}
