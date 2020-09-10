import { EmployeeService } from './employee.service';
import { Component, OnInit, ChangeDetectorRef, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./Employee-info.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  private readonly toDestroy$ = new Subject<void>();
  employeeForm: FormGroup;
  isWorking: boolean;
  date: Date;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EmployeeFormComponent>,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) { }


  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.employeeForm = this.fb.group({
      id: 0,
      empId: null,
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNo: null,
      address: null,
      gender: null,
      dOb: null,
      company: null,
      designation: null,
      bloodGroup: null,
      maritalStatus: null,
      education: null,
      basicSalary: null,
      status: 'Active',
    });
  }

  saveChanges() {
    this.employeeService.addOrUpdate(this.employeeForm.value)
    .subscribe(res => {
      this.dialogRef.close(res);
      this.isWorking = false;
    });

  }

  ngOnDestroy() {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }
}
