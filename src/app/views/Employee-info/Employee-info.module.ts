import { EmployeeFormComponent } from './employee-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeInfoComponent } from './Employee-info.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NpDatepickerModule } from 'angular-nepali-datepicker';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule ,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    PerfectScrollbarModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,
    NgbModule,
    // NpDatepickerModule,
    RouterModule.forChild([
      {path: '', component: EmployeeInfoComponent}
    ])
  ],
  declarations: [EmployeeInfoComponent, EmployeeFormComponent],
  entryComponents: [EmployeeFormComponent]
})
export class EmployeeInfoModule { }
