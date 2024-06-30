import { Component } from '@angular/core';
import {BtnContinueComponent} from "../home/components/btn-continue/btn-continue.component";

@Component({
  selector: 'app-cancel',
standalone: true,
  imports: [BtnContinueComponent],
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent {

}
