import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompliteResultComponent } from './autocomplite-result.component';

describe('AutocompliteResultComponent', () => {
  let component: AutocompliteResultComponent;
  let fixture: ComponentFixture<AutocompliteResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompliteResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompliteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
