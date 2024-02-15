import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgodaoEnglishComponent } from './algodao.english.component';

describe('AlgodaoEnglishComponent', () => {
  let component: AlgodaoEnglishComponent;
  let fixture: ComponentFixture<AlgodaoEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgodaoEnglishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgodaoEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
