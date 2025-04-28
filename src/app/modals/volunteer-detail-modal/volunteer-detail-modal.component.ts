import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
         IonContent, IonList, IonItem, IonLabel, IonNote,
         IonIcon, ToastController, AlertController } from '@ionic/angular/standalone';
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
    private volunteerService: VolunteerService,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  // Método para abrir o formulário de edição do voluntário
  async openVolunteerEditForm(volunteer: any) {
    const modal = await this.modalCtrl.create({
      component: EditVolunteerModalComponent,
      componentProps: {
        volunteer: volunteer,
        parentModal: this
      }
    });
    return await modal.present();
  }

  // Método para excluir o voluntário
  deleteVolunteer() {
    this.volunteerService.deleteVolunteer(this.volunteer._id).subscribe(
      response => {
        this.showToast('Voluntário excluído com sucesso!');
        console.log('Voluntário excluído com sucesso', response);
        this.closeModal();
      },
      error => {
        this.showToast('Erro ao excluir voluntário', 'danger');
        console.error('Erro ao excluir voluntário', error);
      }
    );
  }

  // Método para abrir o  de confirmação de exclusão
  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: 'Tem certeza que deseja excluir este voluntário?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => {
            this.deleteVolunteer();
          }
        }
      ]
    });
  
    await alert.present();
  }

  // Método para fechar o modal
  closeModal() {
    this.modalCtrl.dismiss();
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }
}
