import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropAppComponent } from './crop-app.component';

describe('CropAppComponent', () => {
  let component: CropAppComponent;
  let fixture: ComponentFixture<CropAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
