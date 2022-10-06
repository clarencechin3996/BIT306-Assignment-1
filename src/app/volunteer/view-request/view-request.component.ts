import { Component, OnInit } from "@angular/core";
import { Request } from "src/app/account/request.modal";
import { AccService } from "src/app/account/account.service";
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component ({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls:['./view-request.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ViewRequestComponent implements OnInit{
  request = [
    {description:'dd',datetime:'12-12-2022',studentlevel:'high',numofexpectedstudents:'11', school_name: 'H', city:'dd'},
    {description:'dd',datetime:'12-12-2022',studentlevel:'high',numofexpectedstudents:'11', school_name: 'H', city:'dd'},
    {description:'dd',datetime:'12-12-2022',studentlevel:'high',numofexpectedstudents:'11', school_name: 'H', city:'dd'},
  ]
  requests : Request[] =[];
  dataSource!: MatTableDataSource<Request>;

  constructor(public dialog: MatDialog, public accService:AccService){
  } 

  displayedColumns: string[] = ['Description','School Name', 'City'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement!: Request | null;

  ngOnInit(){
    this.requests = this.accService.getRequest();    
    this.dataSource = new MatTableDataSource(this.requests);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(RequestDialogComponent, {
      width: '700px',
      height: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
@Component({
  selector: 'request-dialog',
  templateUrl: 'request-dialog.component.html',
})

export class RequestDialogComponent {
  constructor(public dialogRef: MatDialogRef<RequestDialogComponent>) {}
}

