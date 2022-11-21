import { AuthService } from './../../auth/auth.service';
import { User } from './../../auth/user.model';
import { Component, OnInit } from "@angular/core";
import { Request } from "src/app/request.modal";
import { AccService } from "src/app/auth/account.service";
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

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

  user:User;
  newrequest: Request[]=[];
  requests : Request[] =[];
  users : User[]=[];
  private requestsSub: Subscription | undefined;
  private usersSub: Subscription | undefined;
  newSum = 0;
  pendSum = 0;
  acceptSum = 0;
  dataSource!: MatTableDataSource<Request>;
  constructor(public dialog: MatDialog, public accService:AccService, public authService:AuthService){
  }

  displayedColumns: string[] = ['Description','School Name', 'City'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement!: Request | null;

  ngOnInit(){
    this.user=this.authService.getUser();

    this.accService.getUser();
    this.usersSub = this.accService.getUserUpdateListener().subscribe((users: User[])=>{
      this.users = users;
    })

    this.accService.getRequest();
    this.requestsSub = this.accService.getRequestUpdateListener().subscribe((requests: Request[])=>{
      this.requests = requests;
      for(let i = 0; i < this.requests.length; i++){
        if(this.requests[i].school_name==this.user.schoolname){
          this.newrequest.push(this.requests[i]);
        };
      };
      this.dataSource = new MatTableDataSource(this.newrequest);
      for(let i = 0; i < this.newrequest.length; i++){
          if(this.newrequest[i].status=='NEW'){
          this.newSum += 1;
          };
        };
      for(let i = 0; i < this.newrequest.length; i++){
          if(this.newrequest[i].status=='PENDING'){
          this.pendSum += 1;
          };
        };
        for(let i = 0; i < this.newrequest.length; i++){
          if(this.newrequest[i].status=='ACCEPTED'){
          this.acceptSum += 1;
          };
        };
    });
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


