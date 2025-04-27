import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolunteerDetailModalComponent } from './volunteer-detail-modal.component';

describe('VolunteerDetailModalComponent', () => {
  let component: VolunteerDetailModalComponent;
  let fixture: ComponentFixture<VolunteerDetailModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerDetailModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolunteerDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
