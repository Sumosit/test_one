import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-path-tree',
  templateUrl: './path-tree.component.html',
  styleUrls: ['./path-tree.component.scss']
})
export class PathTreeComponent implements OnInit {
  @Input() pathTree: any = [
    {
      name: 'Default empty'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
