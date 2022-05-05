import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalPositionService {

  constructor() {
  }

  modalOn(id: string, bottomName: string, width: number, height: number, screenWidth: number, screenHeight: number) {
    let button = document.getElementById(id);
    let bottom = document.getElementById(bottomName);
    let temp = {x: 0, y: 0}
    if (button && bottom) {
      temp.x = button.getBoundingClientRect().x - width + button.clientWidth;
      if (temp.x < 0) {
        temp.x = button.getBoundingClientRect().x;
      }
      temp.y = bottom.getBoundingClientRect().bottom
      if (temp.y + height > screenHeight) {
        temp.y = screenHeight - height;
      } else if (temp.y < 0) {
        temp.y = 0;
      }
    }
    return temp;
  }
}
