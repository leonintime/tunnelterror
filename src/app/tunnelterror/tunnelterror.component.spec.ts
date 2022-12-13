import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelterrorComponent } from './tunnelterror.component';

describe('TunnelterrorComponent', () => {
  let component: TunnelterrorComponent;
  let fixture: ComponentFixture<TunnelterrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelterrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
