import { EmployeeService } from './employee.service';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-Employee-info',
  templateUrl: './Employee-info.component.html',
  styleUrls: ['./Employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit, OnDestroy, AfterViewInit {
  filterForm: FormGroup;
  private readonly unSubscribe$ =  new Subject<void>();
  displayedColumns = ['select', 'id', 'name', 'address', 'gender', 'company', 'designation', 'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource(null);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel<any>(true, []);

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.initData();

    this.filterForm = this.fb.group({
      filterValue: null,
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}


applyFilter(filterValue: string) {
  filterValue = filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  this.dataSource.filter = filterValue;
}

  private initData() {
    this.dataSource.data = [];

    this.employeeService.getList().subscribe(res => {
      this.dataSource.data = res;
      this.paginator.length = (res.length || 0);
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

}
