import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformExComponent } from './reactiveform-ex.component';

describe('ReactiveformExComponent', () => {
  let component: ReactiveformExComponent;
  let fixture: ComponentFixture<ReactiveformExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
