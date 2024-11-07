import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleBulbComponent } from './toggle-bulb.component';

describe('ToggleBulbComponent', () => {
  let component: ToggleBulbComponent;
  let fixture: ComponentFixture<ToggleBulbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleBulbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleBulbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
