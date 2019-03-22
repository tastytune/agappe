import { Component, OnInit, Input } from '@angular/core';
import { Agappes } from '../../../models/agappes';
import { AgappeService } from '../../../services/agappe.service';

@Component({
  selector: 'app-agappeitem',
  templateUrl: './agappeitem.component.html',
  styleUrls: ['./agappeitem.component.scss']
})
export class AgappeitemComponent implements OnInit {
  @Input() agappe: Agappes;

  constructor() { }

  ngOnInit() {
  }

}
