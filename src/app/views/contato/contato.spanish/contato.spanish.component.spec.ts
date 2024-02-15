import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoSpanishComponent } from './contato.spanish.component';

describe('ContatoSpanishComponent', () => {
  let component: ContatoSpanishComponent;
  let fixture: ComponentFixture<ContatoSpanishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoSpanishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoSpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
