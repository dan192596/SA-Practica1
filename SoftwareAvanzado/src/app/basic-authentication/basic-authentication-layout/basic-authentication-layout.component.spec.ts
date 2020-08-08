import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAuthenticationLayoutComponent } from './basic-authentication-layout.component';

describe('BasicAuthenticationLayoutComponent', () => {
  let component: BasicAuthenticationLayoutComponent;
  let fixture: ComponentFixture<BasicAuthenticationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAuthenticationLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAuthenticationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
