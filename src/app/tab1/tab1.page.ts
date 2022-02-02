import { IGenero } from './../models/IGenero.model';
import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeAPI } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  titulo = 'Filmes';
  listaVideos: IFilme[] = [
    {
      nome: 'Mother/Android (2021)',
      descricao: 'Georgia and her boyfriend Sam go on a treacherous journey to escape their country.',
      genero: ['Science', 'Fiction', 'Thriller'],
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rO3nV9d1wzHEWsC7xgwxotjZQpM.jpg',
      classificacao: 58,
      pagina: '/mother-android'
    },
    {
      nome: 'Riverdance: The Animated Adventure (2021)',
      descricao: 'A young Irish boy named Keegan and Spanish girl named Moya journey into a magical world of the Megaloceros Giganteus.',
      genero: ['Animation', 'Fantasy', 'Music', 'Adventure', 'Comedy'],
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i6TRDlVuuEXMyLSlIkDd8YhBN0r.jpg',
      classificacao: 56,
      pagina: '/riverdance'
    },
    {
      nome: 'The Wheel of Time (2021)',
      descricao: 'Follow Moiraine, a member of the shadowy and influential all-female organization called the “Aes Sedai”.',
      genero: ['Sci-Fi', 'Fantasy', 'Drama'],
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mpgDeLhl8HbhI03XLB7iKO6M6JE.jpg',
      classificacao: 79,
      pagina: '/the-whell-of-time'
    }
  ];

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router) { }

  buscarFilmes(evento: any){
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.buscarFilmes(busca).subscribe(dados =>{
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeAPI) {
    //console.log(filme);
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertFavorito() {
    const alert = await this.alertController.create({
      /* cssClass: 'my-custom-class', */
      header: 'Alerta!',
      message: 'Adicionar aos <strong>favoritos</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          /* cssClass: 'secondary', */
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            this.apresentarToast();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  ngOnInit(){
      this.generoService.buscarGeneros().subscribe(dados => {
        console.log('Generos: ' , dados.genres);
        dados.genres.forEach(genero => {
          this.generos[genero.id] = genero.name;
        });

        this.dadosService.guardarDados('generos', this.generos);
      });
  }
}
