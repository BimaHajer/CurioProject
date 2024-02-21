import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNAVComponent } from './side-nav.component';

describe('SideNAVComponent', () => {
  let component: SideNAVComponent;
  let fixture: ComponentFixture<SideNAVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNAVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
