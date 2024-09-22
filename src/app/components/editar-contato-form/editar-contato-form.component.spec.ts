import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContatoFormComponent } from './editar-contato-form.component';

describe('EditarContatoFormComponent', () => {
  let component: EditarContatoFormComponent;
  let fixture: ComponentFixture<EditarContatoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarContatoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarContatoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
