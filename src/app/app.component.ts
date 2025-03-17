import { Component } from '@angular/core';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[HomeComponent,HeaderComponent]
})
export class AppComponent {
  title = 'frontend';
}
