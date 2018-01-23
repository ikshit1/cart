import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSelectedComponent } from './items-selected.component';

describe('ItemsSelectedComponent', () => {
  let component: ItemsSelectedComponent;
  let fixture: ComponentFixture<ItemsSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
