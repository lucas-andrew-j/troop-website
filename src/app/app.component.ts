import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import {MatNavList} from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatSidenavModule, MatToolbar, MatIconModule, MatNavList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'troop-website';
  opened = 'opened';
}
