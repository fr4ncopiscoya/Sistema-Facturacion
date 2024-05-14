import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComprasComponent } from './main-compras.component';

describe('MainComprasComponent', () => {
  let component: MainComprasComponent;
  let fixture: ComponentFixture<MainComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComprasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
