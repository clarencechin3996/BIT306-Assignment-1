import { Component, OnInit } from "@angular/core";
import { Request } from "src/app/account/request.modal";
import { AccService } from "src/app/account/account.service";
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  /*request = [
    {request_date: '12-11-2022', description:'dd', school_name: 'H', city:'cdd',status:'NEW', proposed_time:'12:10',proposed_date:'01-09-2022',student_level:'high',number_expected_student:'11'},
    {request_date: '22-01-2022', description:'dvewcewd', school_name: 'A', city:'cee',status:'PENDING', proposed_time:'11:10',proposed_date:'01-01-2022',student_level:'low',number_expected_student:'12'},
    {request_date: '15-04-2022', description:'eewjuyd', school_name: 'B', city:'rbb',status:'NEW', proposed_time:'15:12',proposed_date:'11-03-2022',student_level:'medium',number_expected_student:'10'},
    {request_date: '15-04-2022', description:'eewjuyd', school_name: 'B', city:'rbb',status:'NEW', proposed_time:'15:12',proposed_date:'11-03-2022',student_level:'medium',number_expected_student:'10'}
  ]*/
  requests : Request[] =[ ];
  dataSource!: MatTableDataSource<Request>;

  constructor(public accService:AccService){

  } 

  displayedColumns: string[] = ['Description', 'Date & Time', 'Student Level', 'Number of Expected Student','School Name', 'City'];
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
}
