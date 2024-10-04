import { Component } from '@angular/core';
import { PropertiesComponent } from "./properties/properties.component";

@Component({
  selector: 'app-element-properties',
  standalone: true,
  imports: [PropertiesComponent],
  templateUrl: './element-properties.component.html',
  styleUrl: './element-properties.component.css'
})
export class ElementPropertiesComponent {

}
