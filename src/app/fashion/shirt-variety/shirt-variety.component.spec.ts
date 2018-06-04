import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtVarietyComponent } from './shirt-variety.component';

describe('ShirtVarietyComponent', () => {
  let component: ShirtVarietyComponent;
  let fixture: ComponentFixture<ShirtVarietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtVarietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtVarietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
