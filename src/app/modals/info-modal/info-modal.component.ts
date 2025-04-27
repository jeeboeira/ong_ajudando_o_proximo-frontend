import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonIcon, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonTitle, IonButtons, IonButton, IonHeader, IonIcon, IonContent]
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
