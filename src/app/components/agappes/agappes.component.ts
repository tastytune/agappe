import { Component, OnInit } from '@angular/core';
import { Agappes } from '../../../models/agappes';
import {  AgappeService } from '../../../services/agappe.service';

@Component({
  selector: 'app-agappes',
  templateUrl: './agappes.component.html',
  styleUrls: ['./agappes.component.scss']
})
export class AgappesComponent implements OnInit {
  agappes: Agappes[];
  constructor(private agappeService: AgappeService) { }

  ngOnInit() {
   this.agappeService.getAgappes().subscribe(agappe => {this.agappes = agappe; } );
  }

}
