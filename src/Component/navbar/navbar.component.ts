import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent 
{
   img: string="https://isthara.com/assets/common/isthara-foodcourt-logo.svg";
   simg: string="https://isthara.com/assets/codining/images/common/header-search-icon.svg"
   active: boolean=true
}
