import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ResultsComponent } from './pages/results/results.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { OrganizerComponent } from './pages/organizer/organizer.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'details', component: EventDetailsComponent },
  { path: 'contact', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'organizer', component: OrganizerComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
