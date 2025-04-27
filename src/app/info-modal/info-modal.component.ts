import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton]
})
export class InfoModalComponent {

  constructor(
    private modalCtrl: ModalController
  ) { }

  // Método para fechar o modal
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
