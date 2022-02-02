import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

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

}
