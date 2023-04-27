import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  // private BaseURL = 'http://localhost:6000/student';

  getAllStudents() {
    return 'Getting All Students';
  }
}
