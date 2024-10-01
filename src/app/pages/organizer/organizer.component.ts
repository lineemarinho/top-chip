import { Component } from '@angular/core';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css'],
})
export class OrganizerComponent {
  items = [
    {
      title: '99ª Corrida Internacional',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Confirmado',
    },
    {
      title: '2025 Itau BBA',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Confirmado',
    },
    {
      title: 'Airsoft',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Confirmado',
    },
    {
      title: '2025 Itau BBA',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Confirmado',
    },
    {
      title: '99ª Corrida Internacional',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Confirmado',
    },
    {
      title: 'Maratona de Curitiba',
      date: '24/12/2024 - 06h',
      img: 'https://blog.sporti.com.br/wp-content/uploads/2022/02/375-780x470.png',
      city: 'São Paulo - SP',
      status: 'Confirmado',
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
  open() {}
}
