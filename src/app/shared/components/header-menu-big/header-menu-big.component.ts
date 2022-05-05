import {Component, HostListener, Input, OnInit} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {ModalPositionService} from "@shared/services/modal-position.service";

@Component({
  selector: 'app-header-menu-big',
  templateUrl: './header-menu-big.component.html',
  styleUrls: ['./header-menu-big.component.scss']
})
export class HeaderMenuBigComponent implements OnInit {

  public screenWidth: any;
  public screenHeight: any;
  public x = 9999;
  public y = 9999;
  public width = 0;

  @Input() show: string = '';
  @Input() itemHeader: string = '';
  @Input() menuList: {
    header: string,
    menuList: TabsInterface[]
  }[] = [];

  constructor(public modalPositionService: ModalPositionService) { }

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
        let headerInner = document.getElementById('header-inner')
        if (headerInner) {
          let temp = this.modalPositionService.modalOn(this.itemHeader, 'header-inner', 223, 154, this.screenWidth, this.screenHeight)
          this.x = headerInner.getBoundingClientRect().x;
          this.y = temp.y;
          this.width = headerInner.offsetWidth;
        }
        if (this.show != this.itemHeader) {
          clearInterval(interval);
        }
      }, 0)
    }
    return
  }

}
