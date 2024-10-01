import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  items = [
    {
      title: '99ª Corrida Internacional',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Confirmado',
      modalidade: 'Futebol',
    },
    {
      title: '2025 Itau BBA',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      modalidade: 'Futebol',
      status: 'Confirmado',
    },
    {
      title: 'Airsoft',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      modalidade: 'Futebol',
      status: 'Confirmado',
    },
    {
      title: '2025 Itau BBA',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      modalidade: 'Futebol',
      status: 'Previsto',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ita%C3%BA_Unibanco_logo_2023.svg/2048px-Ita%C3%BA_Unibanco_logo_2023.svg.png',
    },
    {
      title: '99ª Corrida Internacional',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Cancelado',
      modalidade: 'Futebol',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ita%C3%BA_Unibanco_logo_2023.svg/2048px-Ita%C3%BA_Unibanco_logo_2023.svg.png',
    },
    {
      title: 'Maratona de Curitiba',
      date: '24/12/2024 - 06h',
      modalidade: 'Futebol',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      city: 'São Paulo - SP',
      status: 'Adiado',
    },
  ];
  categories = [
    { name: 'Airsoft', icon: 'fas fa-bullseye' },
    { name: 'Artes Marciais', icon: 'fas fa-hand-rock' },
    { name: 'Atletismo', icon: 'fas fa-running' },
    { name: 'Basquete', icon: 'fas fa-basketball-ball' },
    { name: 'Corrida', icon: 'fas fa-tachometer-alt' },
    { name: 'Futebol', icon: 'fas fa-futbol' },
    { name: 'Natação', icon: 'fas fa-swimmer' },
  ];
  selectedCategory: string = 'Corrida';

  selectCategory(categoryName: string) {
    this.selectedCategory = categoryName;
  }
  locationDropdownOpen: boolean = false;
  organizerDropdownOpen: boolean = false;

  locations: string[] = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador'];
  organizers: string[] = ['Organizador 1', 'Organizador 2', 'Organizador 3'];

  toggleLocationDropdown() {
    this.locationDropdownOpen = !this.locationDropdownOpen;
  }

  selectLocation(location: string) {
    console.log('Local selecionado:', location);
    this.locationDropdownOpen = false;
  }

  toggleOrganizerDropdown() {
    this.organizerDropdownOpen = !this.organizerDropdownOpen;
  }

  selectOrganizer(organizer: string) {
    console.log('Organizador selecionado:', organizer);
    this.organizerDropdownOpen = false;
  }
  months = [
    { value: '01', label: 'Janeiro' },
    { value: '02', label: 'Fevereiro' },
    { value: '03', label: 'Março' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Maio' },
    { value: '06', label: 'Junho' },
    { value: '07', label: 'Julho' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' },
  ];
}
