import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-volunteer-detail-modal',
  templateUrl: './volunteer-detail-modal.component.html',
  styleUrls: ['./volunteer-detail-modal.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonNote]
})
export class VolunteerDetailModalComponent {
  @Input() volunteer: any;

  constructor(
    private modalCtrl: ModalController
  ) { }

  // Método para editar o voluntário
  editVolunteer() {}

  // Método para excluir o voluntário
  deleteVolunteer() {}
  
  // Método para fechar o modal
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
