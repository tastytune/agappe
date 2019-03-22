import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  basicForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.basicForm = this.formBuilder.group({
      party:  ['', [Validators.required, Validators.minLength(5)] ],
      day: ['', [Validators.required] ],
      time: ['', [Validators.required] ],
      name: ['', [Validators.required] ]

    });

    this.basicForm.valueChanges.subscribe(console.log);
  }
  updateName() {
    console.log('button clicked update');
   // this.basicForm.setValue( basicForms => {this.basicForm = basicForms; } );
    }
}
