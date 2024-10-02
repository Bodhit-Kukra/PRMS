import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import StaffDetailsData from './../staffDetails.json';
import { SidebarComponent } from "../sidebar/sidebar.component";

interface staffDetails {
  staff_name: string;
  role: string;
  id: number;
}

@Component({
  selector: 'app-staff-details',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.css'
})
export class StaffDetailsComponent {

  StaffDetails: staffDetails[] = StaffDetailsData;


}
