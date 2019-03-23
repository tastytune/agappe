import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgappeService } from '../../../services/agappe.service';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  basicForm: FormGroup;
  modeloItem: AgappeService;


  constructor(private formBuilder: FormBuilder, private modelAgappes: AgappeService) { }

  ngOnInit() {
    this.basicForm = this.formBuilder.group({
      party:  ['', [Validators.required, Validators.minLength(5)] ],
      day: ['', [Validators.required] ],
      time: ['', [Validators.required] ],
      name: ['', [Validators.required] ]

    });

    this.basicForm.valueChanges.subscribe(console.log);
  }
get formForm() {
  return this.basicForm.get('name');
}
/* updateName() {
 return this.modelAgappes.getAgappes();
 // this.basicForm.setValue( basicForms => {this.basicForm = basicForms; } );
  } */
}
