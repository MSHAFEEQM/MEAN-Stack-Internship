import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSampleComponentComponent } from './new-sample-component.component';

describe('NewSampleComponentComponent', () => {
  let component: NewSampleComponentComponent;
  let fixture: ComponentFixture<NewSampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSampleComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
