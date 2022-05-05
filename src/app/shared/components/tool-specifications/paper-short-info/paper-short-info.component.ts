import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paper-short-info',
  templateUrl: './paper-short-info.component.html',
  styleUrls: ['./paper-short-info.component.scss']
})
export class PaperShortInfoComponent implements OnInit {

  @Input() code: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
