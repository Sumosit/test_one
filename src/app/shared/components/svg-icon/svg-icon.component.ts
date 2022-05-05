import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  @Input() width: string | undefined;
  @Input() height: string | undefined;
  @Input() classFill: string | undefined;
  @Input() iconName: string | undefined;

  public svgUrl: string = 'assets/images/icon.svg'

  constructor() { }

  ngOnInit(): void {
    this.svgUrl = this.svgUrl + "#" + this.iconName;
  }

  getWidth() {
    if (this.width) {
      return this.width;
    }
    return 0;
  }

  getHeight() {
    if (this.height) {
      return this.height;
    }
    return 0;
  }

}
