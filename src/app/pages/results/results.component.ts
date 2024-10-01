import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  items = [
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
}
