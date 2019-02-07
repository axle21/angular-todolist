import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOdoItemComponent } from './todo-item.component';

describe('TOdoItemComponent', () => {
  let component: TOdoItemComponent;
  let fixture: ComponentFixture<TOdoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOdoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOdoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
