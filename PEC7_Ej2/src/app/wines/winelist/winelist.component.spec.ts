import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WineListComponent } from './winelist.component';

describe('WinelistComponent', () => {
  let component: WineListComponent;
  let fixture: ComponentFixture<WineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
