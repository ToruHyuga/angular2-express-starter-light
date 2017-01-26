/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from '../shared/notes/notes.component';
import { InputComponent } from '../shared/input/input.component';
import { ButtonComponent } from '../shared/button/button.component';
import { CardComponent } from '../shared/card/card.component';
import { StoreModule } from '@ngrx/store';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LoaderComponent,
        CardComponent,
        NotesComponent,
        ButtonComponent,
        InputComponent
      ],
      imports: [
        RouterTestingModule,
        StoreModule.provideStore({}),
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
