import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewellaryComponent } from './jewellary.component';

describe('JewellaryComponent', () => {
  let component: JewellaryComponent;
  let fixture: ComponentFixture<JewellaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewellaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewellaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
