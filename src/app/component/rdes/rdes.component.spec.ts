import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdesComponent } from './rdes.component';

describe('RdesComponent', () => {
  let component: RdesComponent;
  let fixture: ComponentFixture<RdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
