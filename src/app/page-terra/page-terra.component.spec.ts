import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTerraComponent } from './page-terra.component';

describe('PageTerraComponent', () => {
  let component: PageTerraComponent;
  let fixture: ComponentFixture<PageTerraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTerraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTerraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
