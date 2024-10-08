import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  iconSrc: string = '/assets/tools/Point-default.svg';

  // Funkcja zmieniająca obraz w zależności od zdarzenia
  changePointIcon(state: string) {
    if (state === 'hover') {
      this.iconSrc = '/assets/tools/Point-hover.svg';
    } else if (state === 'default') {
      this.iconSrc = '/assets/tools/Point-default.svg';
    } else if (state === 'clicked') {
      this.iconSrc = '/assets/tools/Point-clicked.svg';
    }
  }


}
