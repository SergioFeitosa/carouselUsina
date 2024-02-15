import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoEnglishComponent } from './contato.english.component';

describe('ContatoEnglishComponent', () => {
  let component: ContatoEnglishComponent;
  let fixture: ComponentFixture<ContatoEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoEnglishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
