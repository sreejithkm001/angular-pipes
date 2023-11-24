import { Component } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
// array to store student details
export class StudentTableComponent {
  students = [
    { id: 1, name: 'Ranesh', gender: 'Male' },
    { id: 2, name: 'Raneesha', gender: 'Female' },
    { id: 3, name: 'Sumesh', gender: 'Male' },
    { id: 4, name: 'Maneesha', gender: 'Female' },
    { id: 5, name: 'Vignesh', gender: 'Male' },
    { id: 6, name: 'Saneesha', gender: 'Female' },
  ];
}
