import { Component, OnInit } from "@angular/core";
import { Request } from "src/app/account/request.modal";
import { Account } from "src/app/account/account.model";
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

  requests : Request[] =[];
  users : Account[]=[];

  dataSource!: MatTableDataSource<Request>;
  constructor(public dialog: MatDialog, public accService:AccService){
  } 

  displayedColumns: string[] = ['Description','School Name', 'City'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement!: Request | null;

  ngOnInit(){
    this.requests = this.accService.getRequest();    
    this.users = this.accService.getAcc();
    this.dataSource = new MatTableDataSource(this.requests);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAcceptOfferDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AcceptOfferDialogComponent, {
      width: '450px',
      height: '180px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openCloseOfferDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CloseOfferDialogComponent, {
      width: '450px',
      height: '180px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
@Component({
  selector: 'accept-offer-dialog',
  templateUrl: 'accept-offer-dialog.component.html',
})

export class AcceptOfferDialogComponent {
  constructor(public dialogRef: MatDialogRef<AcceptOfferDialogComponent>) {}
}

@Component({
  selector: 'close-offer-dialog',
  templateUrl: 'close-offer-dialog.component.html',
})

export class CloseOfferDialogComponent {
  constructor(public dialogRef: MatDialogRef<CloseOfferDialogComponent>) {}
}


