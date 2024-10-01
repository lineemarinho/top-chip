import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  gallery = [
    {
      title: '99ª Corrida Internacional',
      img: 'http://topchip.com.br/media/banner-evento/SUZANO2024.jfif',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Confirmado',
    },
    {
      title: '2025 Itau BBA',
      img: 'http://topchip.com.br/media/banner-evento/kitsoldado.jpg',
      date: '24/12/2024 - 06h',
      city: 'São Paulo - SP',
      status: 'Confirmado',
    },
    {
      title: 'Airsoft',
      img: 'http://topchip.com.br/media/banner-evento/imperial1407.jpg',
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
}
