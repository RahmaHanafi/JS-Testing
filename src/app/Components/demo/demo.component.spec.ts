import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { StudentService } from 'src/app/services/student.service';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let studentService: StudentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    studentService = TestBed.inject(StudentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test num value equal to 10', () => {
    expect(component.num).toBe(10);
  });

  it('test num value equal to 10 after calling changeNumber function', () => {
    component.changeNumber();
    expect(component.num).toBe(100);
  });

  it('test num value equal to 10 after calling changeNumAfterTime function after 3s', fakeAsync(() => {
    component.changeNumAfterTime();
    tick(3000);
    expect(component.num).toBe(200);
  }));

  it('should call getAllStudents function from service in onInit', () => {
    spyOn(studentService, 'getAllStudents');
    component.ngOnInit();
    expect(studentService.getAllStudents).toHaveBeenCalled();
  });
});
