import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonNote, IonIcon } from '@ionic/angular/standalone';
import { EditVolunteerModalComponent } from '../edit-volunteer-modal/edit-volunteer-modal.component';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-volunteer-detail-modal',
  templateUrl: './volunteer-detail-modal.component.html',
  styleUrls: ['./volunteer-detail-modal.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonNote, IonIcon]
})
export class VolunteerDetailModalComponent {
  @Input() volunteer: any;

  constructor(
    private modalCtrl: ModalController,
    private volunteerService: VolunteerService
  
  ) { }

  // Método para abrir o formulário de inscrição
  async openVolunteerEditForm(volunteer: any) {
    const modal = await this.modalCtrl.create({
      component: EditVolunteerModalComponent,
      componentProps: {
        volunteer: volunteer
      }
    });
    return await modal.present();
  }

  // Método para excluir o voluntário
  deleteVolunteer() {
    this.volunteerService.deleteVolunteer(this.volunteer._id).subscribe(
      response => {
        console.log('Voluntário excluído com sucesso', response);
        this.closeModal();
      },
      error => {
        console.error('Erro ao excluir voluntário', error);
      }
    );
  }

  // Método para fechar o modal
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
