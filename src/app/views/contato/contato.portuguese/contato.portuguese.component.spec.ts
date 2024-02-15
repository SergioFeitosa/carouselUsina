import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoPortugueseComponent } from './contato.portuguese.component';

describe('ContatoPortugueseComponent', () => {
  let component: ContatoPortugueseComponent;
  let fixture: ComponentFixture<ContatoPortugueseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoPortugueseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoPortugueseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
