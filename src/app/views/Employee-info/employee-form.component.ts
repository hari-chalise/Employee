import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./Employee-info.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.employeeForm = this.fb.group({
      id: 0,
      empId: 'Emp-234',
      name: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      phoneNo: null,
      address: null,
      gender: null,
      company: null,
      designation: null,
      bloodGroup: null,
      maritalStatus: null,
      education: null,
      basicSalary: null,
      status: 'Active',
    });
  }

  saveChanges() {}
}
