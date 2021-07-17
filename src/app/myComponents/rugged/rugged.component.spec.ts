import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuggedComponent } from './rugged.component';

describe('RuggedComponent', () => {
  let component: RuggedComponent;
  let fixture: ComponentFixture<RuggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
