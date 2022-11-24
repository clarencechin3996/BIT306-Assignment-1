import { User } from './../../auth/user.model';
import { AuthService } from './../../auth/auth.service';
import { School } from './../../auth/school.modal';
import { Component, OnInit, Inject } from "@angular/core";
import { Request } from "src/app/request.modal";
import { AccService } from "src/app/auth/account.service";
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

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
  private schoolSub: Subscription | undefined;
  private requestsSub: Subscription | undefined;
  user:User;
  school: School[]=[];
  requests : Request[] =[];
  newrequest:Request[]=[];
  dataSource!: MatTableDataSource<Request>;

  constructor(public dialog: MatDialog, public accService:AccService, public authService:AuthService){}

  displayedColumns: string[] = ['Description','School Name', 'City'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement!: Request | null;

  ngOnInit(){
    this.accService.getRequest();

    this.requestsSub = this.accService.getRequestUpdateListener().subscribe((requests: Request[])=>{
      this.requests = requests;
      for(let i = 0; i < this.requests.length; i++){
        if(this.requests[i].request_status=='NEW'){
          this.newrequest.push(this.requests[i]);
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

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, element): void {
    this.dialog.open(RequestDialogComponent, {
      width: '700px',
      height: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {dialogelement: element, dialogText: 'eze'}

    });
  }

}
@Component({
  selector: 'request-dialog',
  templateUrl: 'request-dialog.component.html',
})

export class RequestDialogComponent {

  element
  constructor(public dialogRef: MatDialogRef<RequestDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private accountService:AccService, public authService: AuthService) {
   this.element = this.data.dialogelement;

}
user:User;
submitOffer(){
  console.log(this.element);

  this.user = this.authService.getUser();
  this.accountService.submitOffer(this.element.requestId, this.element.fullName).subscribe((data)=>{
    if(data){
      console.log(data);
      //window.location.reload()



    }
  })
}
}

