import { Component, ElementRef, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const homeElement = this.elementRef.nativeElement.querySelector('.home');
    const aboutElement = this.elementRef.nativeElement.querySelector('.about');

    if(homeElement){
      homeElement.classList.remove('active');
      aboutElement.classList.add('active');
    }
    
    AOS.init();
  }

}
