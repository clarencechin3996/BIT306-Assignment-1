import { AuthService } from './../../auth/auth.service';
import { User } from './../../auth/user.model';
import { School } from './../../auth/school.modal';
import { Component, OnInit } from "@angular/core";
import { Request } from "src/app/request.modal";
import { AccService } from "src/app/auth/account.service";
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component ({
  selector: 'check-view-request',
  templateUrl: './check-request.component.html',
  styleUrls:['./check-request.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CheckRequestComponent implements OnInit{
  private schoolSub: Subscription | undefined;
  private requestsSub: Subscription | undefined;
  user: User
  school: School[]=[];
  requests : Request[] =[];
  newrequest:Request[]=[];
  dataSource!: MatTableDataSource<Request>;

  constructor(public dialog: MatDialog, public accService:AccService, public authService:AuthService){}

  displayedColumns: string[] = ['Description','School Name', 'City','Status'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement!: Request | null;

  ngOnInit(){
    this.accService.getRequest();
    this.user=this.authService.getUser();

    this.requestsSub = this.accService.getRequestUpdateListener().subscribe((requests: Request[])=>{
      this.requests = requests;
      for(let i = 0; i < this.requests.length; i++){
        if(this.requests[i].offer_status=='PENDING'){
          if(this.requests[i].volunteerUsername==this.user.fullName){
            this.newrequest.push(this.requests[i]);
          }
        };
      };
      this.dataSource = new MatTableDataSource(this.newrequest);
    });
    this.accService.getSchool();
    this.schoolSub = this.accService.getSchoolUpdateListener().subscribe((school: School[])=>{
      this.school = school;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
