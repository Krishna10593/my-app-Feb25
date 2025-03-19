import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleintComponent } from './simpleint.component';

describe('SimpleintComponent', () => {
  let component: SimpleintComponent;
  let fixture: ComponentFixture<SimpleintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
