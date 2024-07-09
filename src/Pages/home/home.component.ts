import { Component } from '@angular/core';
import { NavbarComponent } from '../../Component/navbar/navbar.component';
import { HeroComponent } from '../../Component/hero/hero.component';
import { FooterComponent } from '../../Component/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HeroComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
