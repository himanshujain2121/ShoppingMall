import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtDescriptionComponent } from './shirt-description.component';

describe('ShirtDescriptionComponent', () => {
  let component: ShirtDescriptionComponent;
  let fixture: ComponentFixture<ShirtDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
