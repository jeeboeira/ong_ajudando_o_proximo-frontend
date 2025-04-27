import { Component} from '@angular/core';
import { ModalController, IonTextarea, IonLabel, IonInput, IonItem, IonList, IonHeader,
          IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonIcon, ToastController } from '@ionic/angular/standalone';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-add-volunteer-modal',
  templateUrl: './add-volunteer-modal.component.html',
  styleUrls: ['./add-volunteer-modal.component.scss'],
  standalone: true,
  imports: [IonTextarea, IonLabel, IonInput, IonItem, IonList, IonHeader,
            IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonIcon]
})
export class AddVolunteerModalComponent {
  name: string = '';
  email: string = '';
  interestArea: string = '';

  constructor(
    private modalCtrl: ModalController,
    private volunteerService: VolunteerService,
    private toastController: ToastController
  ) { }

  // Método para fechar o modal
  closeModal() {
    this.modalCtrl.dismiss();
  }

    // Método para adicionar voluntário
    addVolunteer() {
      if (this.name && this.email && this.interestArea) {
        this.volunteerService.addVolunteer(this.name, this.email, this.interestArea).subscribe(
          response => {
            this.showToast('Voluntário adicionado com sucesso!');
            console.log('Voluntário adicionado com sucesso', response);
            this.name = '';
            this.email = '';
            this.interestArea = '';
            this.closeModal();
          },
          error => {
            this.showToast('Erro ao adicionar voluntário', 'danger');
            console.error('Erro ao adicionar voluntário', error);
          }
        );
      } else {
        this.showToast('Por favor, preencha todos os campos!', 'danger');
        console.log('Por favor, preencha todos os campos!');
      }
    }

    onInputName(event: any) {
      this.name = event.target.value || '';
    }
    onInputEmail(event: any) {
      this.email = event.target.value || '';
    }
    onInputInterestArea(event: any) {
      this.interestArea = event.target.value || '';
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
