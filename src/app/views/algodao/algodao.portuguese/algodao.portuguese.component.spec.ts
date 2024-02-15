import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgodaoPortugueseComponent } from './algodao.portuguese.component';

describe('AlgodaoPortugueseComponent', () => {
  let component: AlgodaoPortugueseComponent;
  let fixture: ComponentFixture<AlgodaoPortugueseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgodaoPortugueseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgodaoPortugueseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
