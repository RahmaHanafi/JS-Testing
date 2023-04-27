import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor(public studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents();
  }

  num: number = 10;
  changeNumber() {
    this.num = 100;
  }

  changeNumAfterTime() {
    timer(3000).subscribe(() => {
      this.num = 200;
    });
  }
}
