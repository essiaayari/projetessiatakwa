import { AfterViewInit, Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const minim = document.querySelector(".minimenu") as HTMLElement;
    const navLinks = document.querySelector(".links") as HTMLElement;

    minim.addEventListener('click', () => {
      this.renderer.addClass(navLinks, 'mobile-menu');
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      this.renderer.setStyle(navbar, 'backgroundColor', 'black'); // Change color when scrolling down
    } else {
      this.renderer.setStyle(navbar, 'backgroundColor', 'transparent'); // Revert back when scrolling up
    }
  }
}
