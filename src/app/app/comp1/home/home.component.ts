import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { Events } from '../../classes/events';
import { Eventschedule } from '../../classes/eventschedule';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  lesimages: Eventschedule[] = [];

  event: Events[] = [];
  eventschuedule: Eventschedule[] = [];

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private eventservice: EventsService,
    private router: Router,
  ) {}
  
  onAboutUs() {
    this.router.navigate(['/aboutus']);
  }

  ngAfterViewInit() {
    // Your JavaScript code that executes on page load
    // For example:
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    var x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const demoElement: HTMLElement | null = this.elementRef.nativeElement.querySelector("#demo");
      if (demoElement) {
        this.renderer.setProperty(demoElement, 'innerHTML', `${days}d ${hours}h ${minutes}m ${seconds}s`);
      }

      if (distance < 0) {
        clearInterval(x);
        if (demoElement) {
          this.renderer.setProperty(demoElement, 'innerHTML', "EXPIRED");
        }
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.eventservice.getEvent().subscribe(data => {
      this.event = data;
    });

    this.eventservice.gettableau().subscribe(datatab => {
      this.eventschuedule = datatab;
    });
  }

  getEvents() {
    return this.event;
  }

  
}
