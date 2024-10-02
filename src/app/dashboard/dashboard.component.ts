import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import jsonData from '../Static.json';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

interface staticJson {
  name: string;
  role: string;
  phone_number: number;
  address: string;
  created_by: number;
  id: number;
  created_at: any;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, FooterComponent, RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  table: any;

  data: staticJson[] = jsonData;


}
