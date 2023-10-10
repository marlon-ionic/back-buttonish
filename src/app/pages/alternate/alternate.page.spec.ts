import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlternatePage } from './alternate.page';

describe('AlternatePage', () => {
  let component: AlternatePage;
  let fixture: ComponentFixture<AlternatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlternatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
