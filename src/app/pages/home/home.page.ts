import { Component } from '@angular/core';
import { IonContent, ModalController, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { InfoModalComponent } from 'src/app/modals/info-modal/info-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton]
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
  ) { }

  // Método para abrir o modal
  async showInfo() {
    const modal = await this.modalCtrl.create({
      component: InfoModalComponent,
    });
    return await modal.present();
  }

  // Método para realizar o login
  async login() {
    this.navCtrl.navigateForward('/volunteers');
  }
}
