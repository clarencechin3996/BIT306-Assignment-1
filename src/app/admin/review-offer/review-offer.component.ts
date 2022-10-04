import { Component, OnInit } from "@angular/core";
import { Request } from "src/app/account/request.modal";
import { AccService } from "src/app/account/account.service";
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component ({
  selector: 'review-offer',
  templateUrl: './review-offer.component.html',
  styleUrls:['./review-offer.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ReviewOfferComponent implements OnInit{

  requests : Request[] =[ ];
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


}


