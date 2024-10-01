import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images: string[] = [
    '../../../assets/images/corredor.png',
    '../../../assets/images/corredor2.png',
    '../../../assets/images/corredor3.png',
  ];
  currentImageIndex: number = 0;
  interval: any;

  gallery = [
    {
      title: '2025 Itau BBA',
      img: 'http://topchip.com.br/media/banner-evento/nossa_gente_atual.jfif',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Realizado',
    },
    {
      title: '99ª Corrida Internacional',
      img: 'http://topchip.com.br/media/banner-evento/lupo02.jfif',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Realizado',
    },
    {
      title: '2025 Itau BBA',
      img: 'http://topchip.com.br/media/banner-evento/nossa_gente_atual.jfif',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Realizado',
    },
    {
      title: '99ª Corrida Internacional',
      img: 'http://topchip.com.br/media/banner-evento/lupo02.jfif',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Realizado',
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

  selectedCategory: string = 'Corrida';

  selectCategory(categoryName: string) {
    this.selectedCategory = categoryName;
  }
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
