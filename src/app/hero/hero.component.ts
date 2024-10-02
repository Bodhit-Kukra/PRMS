import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
