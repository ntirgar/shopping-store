import { Component } from '@angular/core';
import {BtnContinueComponent} from "../home/components/btn-continue/btn-continue.component";

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [BtnContinueComponent],
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {

}
