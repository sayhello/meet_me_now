import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCVODV6oS4diFZyVHE8CXx6zRhtByguogE",
  authDomain: "inventory-app-726af.firebaseapp.com",
  databaseURL: "https://inventory-app-726af.firebaseio.com",
  projectId: "inventory-app-726af",
  storageBucket: "inventory-app-726af.appspot.com",
  messagingSenderId: "596351154439"
};

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  /*{ path: "manage", component: ManageComponent, canActivate: [AuthGuard] },
  { path: "request", component: RequestComponent, canActivate: [AuthGuard] },
  { path: "approve", component: ApproveComponent, canActivate: [AuthGuard] },
  { path: "signin", component: SigninComponent }, 
  { path: "signup", component: SignupComponent }*/
]

//* https://github.com/pari-agsft/inventory-app/tree/master/src/app *//

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
