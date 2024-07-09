import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {TopBarComponent} from "./layout/top-bar/top-bar.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
standalone: true,
  imports: [CommonModule, RouterOutlet, TopBarComponent, FooterComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-store';
}
