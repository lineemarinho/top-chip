import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ResultsComponent } from './pages/results/results.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateComponent } from './pages/create/create.component';
import { OrganizerComponent } from './pages/organizer/organizer.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { PaymentComponent } from './pages/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    ResultsComponent,
    GalleryComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    EventDetailsComponent,
    LoginComponent,
    CreateComponent,
    OrganizerComponent,
    EnrollmentComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
