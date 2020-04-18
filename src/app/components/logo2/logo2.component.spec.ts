import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Logo2Component } from './logo2.component';

describe('Logo2Component', () => {
  let component: Logo2Component;
  let fixture: ComponentFixture<Logo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logo2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Logo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
