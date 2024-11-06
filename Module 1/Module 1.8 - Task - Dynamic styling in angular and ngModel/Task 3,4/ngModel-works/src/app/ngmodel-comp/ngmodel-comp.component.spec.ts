import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelCompComponent } from './ngmodel-comp.component';

describe('NgmodelCompComponent', () => {
  let component: NgmodelCompComponent;
  let fixture: ComponentFixture<NgmodelCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgmodelCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmodelCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
