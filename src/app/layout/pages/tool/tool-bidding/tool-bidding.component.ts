import {Component, Input, OnInit} from '@angular/core';
import {ToolBiddingService} from "@layout/pages/tool/tool-bidding/tool-bidding.service";

@Component({
  selector: 'app-tool-bidding',
  templateUrl: './tool-bidding.component.html',
  styleUrls: ['./tool-bidding.component.scss']
})
export class ToolBiddingComponent implements OnInit {

  @Input() code: string = '';

  constructor(public toolBiddingService: ToolBiddingService) {}

  ngOnInit(): void {
  }

}
