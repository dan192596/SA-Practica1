import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenBearerLayoutComponent } from './token-bearer-layout.component';

describe('TokenBearerLayoutComponent', () => {
  let component: TokenBearerLayoutComponent;
  let fixture: ComponentFixture<TokenBearerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenBearerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenBearerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
