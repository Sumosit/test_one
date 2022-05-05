import {Component, EventEmitter, HostListener, Inject, Input, OnInit, Output} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {ModalPositionService} from "@shared/services/modal-position.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-header-menu-small',
  templateUrl: './header-menu-small.component.html',
  styleUrls: ['./header-menu-small.component.scss']
})
export class HeaderMenuSmallComponent implements OnInit {

  public screenWidth: any;
  public screenHeight: any;
  public x = 9999;
  public y = 9999;

  @Input() show: string = '';
  @Input() itemHeader: string = '';
  @Input() menuList: TabsInterface[] = [];

  constructor(public modalPositionService: ModalPositionService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.modalOn();
    console.log(this.menuList);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  modalOn() {
    if (this.show === this.itemHeader) {
      let interval = setInterval(() => {
        let temp = this.modalPositionService.modalOn(this.itemHeader, 'header-inner', 223, 154, this.screenWidth, this.screenHeight)
        this.x = temp.x;
        this.y = temp.y;
        if (this.show != this.itemHeader) {
          clearInterval(interval);
        }
      }, 0)
    }
    return
  }

}
