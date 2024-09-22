import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosItemComponent } from './contatos-item.component';

describe('ContatosItemComponent', () => {
  let component: ContatosItemComponent;
  let fixture: ComponentFixture<ContatosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
