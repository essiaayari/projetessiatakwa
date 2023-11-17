import { Component, OnInit } from '@angular/core';
import { Members } from '../../classes/members';
import { MembersService } from '../../services/members.service';
import { Gallery } from '../../classes/gallery';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  lesimages: Gallery[] = [];
  lesmembres: Members[] = [];

  constructor(private membreservice: MembersService) {}

  ngOnInit(): void {
    this.membreservice.getMembres().subscribe(
      data => {
        this.lesmembres = data;
      }
    );
    this.membreservice.getgallery().subscribe(
      datag => {
        this.lesimages = datag;
      }
    );
  }
  show:boolean=false;
  showDetails(){
    this.show=true;
    alert('eeee');
    
  }
  hideDetails(){
    this.show=false;
  }

}
