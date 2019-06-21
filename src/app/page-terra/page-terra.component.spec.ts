import { ParametresComponent } from './../parametres/parametres.component';
import { LineChartComponent } from './../line-chart/line-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTerraComponent } from './page-terra.component';
import { ChartsModule } from 'ng2-charts';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { ResumeTerrasComponent } from '../resume-terras/resume-terras.component';

describe('PageTerraComponent', () => {
  let component: PageTerraComponent;
  let fixture: ComponentFixture<PageTerraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTerraComponent, LineChartComponent, ResumeTerrasComponent, ParametresComponent ],
      imports: [NgbModule, ChartsModule, AppRoutingModule],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
      ],
    })
    .compileComponents();
  }));

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };
  
  beforeEach(() => {
    fixture = TestBed.createComponent(PageTerraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
