import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelFarnhtComponent } from './cel-farnht.component';

describe('CelFarnhtComponent', () => {
  let component: CelFarnhtComponent;
  let fixture: ComponentFixture<CelFarnhtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelFarnhtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelFarnhtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
