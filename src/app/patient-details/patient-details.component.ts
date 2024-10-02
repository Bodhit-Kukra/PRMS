import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FooterComponent } from "../footer/footer.component";
import PatientDetailsData from './../Static.json';
import { RouterLink } from '@angular/router';

interface patientDetails {
  name: string;
    role: string;
    phone_number: number;
    address: string;
    created_by: number;
    id: number;
    created_at: any;
}

@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterLink],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent {

  PatientDetails: patientDetails[] = PatientDetailsData;
}
