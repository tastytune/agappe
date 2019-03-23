import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgappeService } from '../../../services/agappe.service';
import { Agappes } from '../../../models/agappes';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  basicForm: FormGroup;
  modeloItem: AgappeService;
  agappes: Agappes[];


  constructor(private formBuilder: FormBuilder, private modelAgappes: AgappeService, private agappeService: AgappeService) { }

  ngOnInit() {
    this.basicForm = this.formBuilder.group({
      name:  ['', [Validators.required, Validators.minLength(2)] ],
      title: ['', [Validators.required] ],
      day: ['', [Validators.required] ],
      time: ['', [Validators.required] ],
      full_address: ['', [Validators.required] ],
      rating: ['', [Validators.required] ],

    });

    this.basicForm.valueChanges.subscribe(console.log);
  }
get formForm() {
  return this.basicForm.get('name');
}
postMe(agappe: Agappes[]) {
  this.agappeService.postAgappes(this.agappes).subscribe(datafono => this.agappes.push());
}
}
