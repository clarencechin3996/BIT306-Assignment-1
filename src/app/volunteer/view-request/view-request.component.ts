import { Component } from "@angular/core";


@Component ({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls:['./view-request.component.css']

})

export class ViewRequestComponent{
  request = [
    {request_date: '12-11-2022', description:'dd', school_name: 'H', city:'cdd',status:'NEW', proposed_time:'12:10',proposed_date:'01-09-2022',student_level:'high',number_expected_student:'11'},
    {request_date: '22-01-2022', description:'dvewcewd', school_name: 'A', city:'cee',status:'PENDING', proposed_time:'11:10',proposed_date:'01-01-2022',student_level:'low',number_expected_student:'12'},
    {request_date: '15-04-2022', description:'eewjuyd', school_name: 'B', city:'rbb',status:'NEW', proposed_time:'15:12',proposed_date:'11-03-2022',student_level:'medium',number_expected_student:'10'},
    {request_date: '15-04-2022', description:'eewjuyd', school_name: 'B', city:'rbb',status:'NEW', proposed_time:'15:12',proposed_date:'11-03-2022',student_level:'medium',number_expected_student:'10'}
  ]
}
