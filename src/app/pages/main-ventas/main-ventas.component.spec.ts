import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVentasComponent } from './main-ventas.component';

describe('MainVentasComponent', () => {
  let component: MainVentasComponent;
  let fixture: ComponentFixture<MainVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainVentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
