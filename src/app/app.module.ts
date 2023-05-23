import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { navBarComponent } from './components/navBar/navBar.component';
import { ToRomanComponent } from './components/to-roman/to-roman.component';
import { ToNumberComponent } from './components/to-number/to-number.component';

@NgModule({
    declarations: [
        AppComponent,
        navBarComponent,
        ToRomanComponent,
        ToNumberComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
