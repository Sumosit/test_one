import {Component, Input, OnInit} from '@angular/core';
import {ToolSpecificationsInterface} from "@shared//interfaces/tool-specifications-interface";

@Component({
  selector: 'app-paper-info',
  templateUrl: './paper-info.component.html',
  styleUrls: ['./paper-info.component.scss']
})
export class PaperInfoComponent implements OnInit {

  @Input() data: ToolSpecificationsInterface = <ToolSpecificationsInterface>{};

  constructor() { }

  ngOnInit(): void {
  }

}
