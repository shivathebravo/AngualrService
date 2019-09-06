import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { RouterModule, Routes } from '@angular/router';
import { OutletComponent } from './outlet/outlet.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductService } from './product.service';
import { DetailsComponent } from './details/details.component';
import { InstructionsComponent } from './instructions/instructions.component';

const appRoutes:Routes=[
{path: '',redirectTo:'login',pathMatch:'full'},
{path: 'login',component:LoginComponent},
{path: 'reset-password',component:ResetComponent},
{path:'**',component:NotFoundComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent,
    LoginComponent,
    ResetComponent,
    OutletComponent,
    NotFoundComponent,
    DetailsComponent,
    InstructionsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
