import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HideDirective } from './hide.directive';
import { HideitDirective } from './hideit.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PostDetailsComponent,
    QuoteFormComponent,
    HideDirective,
    HideitDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
