import { Component } from '@angular/core';
import { MyStatusBarService } from '../core/my-status-bar/my-status-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private statusBar: MyStatusBarService) {}

  toggle() {
    if (this.statusBar.isVisible) {
      this.statusBar.hide();
    } else {
      this.statusBar.show();
    }
  }
}
