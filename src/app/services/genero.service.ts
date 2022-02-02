import { IListaGenero } from './../models/IGenero.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-PT';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=ea1c30ed030222181556a6d4ce3e95c1';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero>{
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
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
