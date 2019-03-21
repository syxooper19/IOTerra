import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTerrasComponent } from './resume-terras.component';

describe('ResumeTerrasComponent', () => {
  let component: ResumeTerrasComponent;
  let fixture: ComponentFixture<ResumeTerrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeTerrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTerrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
