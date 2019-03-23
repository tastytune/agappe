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
    username: 'El rey',
    address: 'Rock and Roll Street, London',
    day: new Date(2011, 9, 8),
    party: 'Here comes the Postman'
   };


  constructor(private agappeService: AgappeService) { }

  ngOnInit() {
    this.agappeService.getAgappes().subscribe(agappe => { this.agappes = agappe; });
/*     this.agappeService.postAgappes(this.agappes).subscribe(agappe => { this.agappes = agappe; });
 */  /*   this.agappeService.getJSONplacegolder().subscribe(data => {console.log(data);
    }); */
  }
  postMe(agappe: Agappes[]) {
    this.agappeService.postAgappes(this.agappes).subscribe(datafono => this.agappes.push(this.data));
  }

}
