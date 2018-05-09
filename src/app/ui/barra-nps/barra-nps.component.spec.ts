import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNpsComponent } from './barra-nps.component';

describe('BarraNpsComponent', () => {
  let component: BarraNpsComponent;
  let fixture: ComponentFixture<BarraNpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
