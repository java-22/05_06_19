import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PersonFormComponent} from './person-form/person-form.component';
import {PersonListComponent} from './person-list/person-list.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreService} from './store.service';

const routs: Routes = [
  {path: '', component: PersonListComponent},
  {path: 'add', component: PersonFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routs)
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
