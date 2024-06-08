import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwAllBooksComponent } from './veiw-all-books.component';

describe('VeiwAllBooksComponent', () => {
  let component: VeiwAllBooksComponent;
  let fixture: ComponentFixture<VeiwAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiwAllBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeiwAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
