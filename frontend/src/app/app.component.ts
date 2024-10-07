import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileBarComponent } from "./app-panel/profile-bar/profile-bar.component";
import { ElementPropertiesComponent} from "./app-panel/element-properties/element-properties.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileBarComponent, ElementPropertiesComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MAPP';
}
