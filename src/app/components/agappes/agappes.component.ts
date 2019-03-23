import { Component, OnInit, Input } from '@angular/core';
import { Agappes } from '../../../models/agappes';
import { AgappeService } from '../../../services/agappe.service';


@Component({
  selector: 'app-agappes',
  templateUrl: './agappes.component.html',
  styleUrls: ['./agappes.component.scss']
})
export class AgappesComponent implements OnInit {
  agappes: Agappes[];
  data = {
    id: 100,
    name: 'Elvis Presley',
    title: 'Rockandrolla times',
    day: new Date(2011, 9, 8),
    time: 20,
    full_address: 'Rock and Roll Street 28, London, UK',
    rating: 3,
  };


  constructor(private agappeService: AgappeService) { }

  ngOnInit() {
    this.agappeService.getAgappes().subscribe(agappe => { this.agappes = agappe; });

  }
  postMe(agappe: Agappes[]) {
    this.agappeService.postAgappes(this.agappes).subscribe(datafono => this.agappes.push(this.data));
  }

}
