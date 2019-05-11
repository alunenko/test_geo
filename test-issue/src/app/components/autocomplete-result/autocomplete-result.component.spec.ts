import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteResultComponent } from './autocomplete-result.component';

describe('AutocompleteResultComponent', () => {
  let component: AutocompleteResultComponent;
  let fixture: ComponentFixture<AutocompleteResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
