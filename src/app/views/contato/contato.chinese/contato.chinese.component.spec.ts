import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoChineseComponent } from './contato.chinese.component';

describe('ContatoChineseComponent', () => {
  let component: ContatoChineseComponent;
  let fixture: ComponentFixture<ContatoChineseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoChineseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoChineseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
