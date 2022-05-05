import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolService} from "@layout/pages/tool/tool.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit, OnDestroy {

  chart2: any

  paramCode: string = '';
  paramTab: string = '';

  constructor(public toolService: ToolService,
              public activatedRoute: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit(): void {
    this.paramCode = this.activatedRoute.snapshot.params['code'];
    if (!this.paramCode) {
      this.router.navigate(['/financial-instruments'])
    }
    this.toolService.setCurrentTab(this.paramCode, this.toolService.tabs[0].link);
    // this.createChart2()
  }

  getEmitCurrentTab(link: string): void {
    this.toolService.setCurrentTab(this.paramCode, link);
  }

  ngOnDestroy() {
  }

  // createChart2() {
  //   this.chart2.remove();
  //   this.chart2 = createChart(document.getElementById("indexes2")!, {
  //     width: document.getElementById('indexes2')!.offsetWidth,
  //     height: 450,
  //     timeScale: {fixLeftEdge: true, fixRightEdge: true},
  //     layout: {backgroundColor: 'rgba(0,0,0,0)', textColor: this.textColor}
  //   });
  //   }

}
