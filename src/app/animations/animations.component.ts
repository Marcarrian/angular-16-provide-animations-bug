import {Component} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-animations',
  standalone: true,
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  imports: [
    NgIf,
  ],
})
export default class AnimationsComponent {

  public visible = true;
}
