import { Component } from '@angular/core';



@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent{

  // disable right click img
  onContextMenu(event: MouseEvent) {
  event.preventDefault();
  }

}
