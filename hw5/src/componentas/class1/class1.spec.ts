import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class1 } from './class1';

describe('Class', () => {
  let component: Class1;
  let fixture: ComponentFixture<Class1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
