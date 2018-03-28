import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeEffectComponent } from './customize-effect.component';

describe('CustomizeEffectComponent', () => {
  let component: CustomizeEffectComponent;
  let fixture: ComponentFixture<CustomizeEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
