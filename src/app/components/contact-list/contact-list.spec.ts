import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactList } from './contact-list';

describe('ContactList', () => {
  let component: ContactList;
  let fixture: ComponentFixture<ContactList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactList],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render contacts in the table', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');

    expect(rows.length).toBe(2);
    expect(compiled.textContent).toContain('Maria López');
    expect(compiled.textContent).toContain('Carlos Ruiz');
  });
});
