import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IListaFilmes } from './../models/IFilmeAPI.model';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-PT';
  regiao = 'PT';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=ea1c30ed030222181556a6d4ce3e95c1';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarFilmes(busca: string): Observable<IListaFilmes>{
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro na consulta á API.',
      duration: 2000,
      color:'danger',
      position:'middle'
    });
    toast.present();
    return null;
  }



}
