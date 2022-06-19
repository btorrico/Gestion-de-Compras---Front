import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionProductosComponent } from './modificacion-productos.component';

describe('ModificacionProductosComponent', () => {
  let component: ModificacionProductosComponent;
  let fixture: ComponentFixture<ModificacionProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
