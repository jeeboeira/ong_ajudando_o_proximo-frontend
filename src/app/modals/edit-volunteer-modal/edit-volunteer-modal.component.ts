import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonInput, IonHeader, IonToolbar, IonTitle, IonButtons,
         IonButton, IonContent, IonList, IonItem, IonLabel, IonIcon,
         ToastController } from '@ionic/angular/standalone';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-edit-volunteer-modal',
  templateUrl: './edit-volunteer-modal.component.html',
  styleUrls: ['./edit-volunteer-modal.component.scss'],
  standalone: true,
  imports: [IonInput, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
            IonContent, IonList, IonItem, IonLabel, IonIcon]
})
export class EditVolunteerModalComponent implements OnInit {
  @Input() volunteer: any;
  @Input() parentModal: any;

  id: string = '';
  name: string = '';
  email: string = '';
  interestArea: string = '';

  constructor(
    private modalCtrl: ModalController,
    private volunteerService: VolunteerService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.volunteer) {
      // Atribuindo os valores do volunteer aos campos internos
      this.id = this.volunteer._id;
      this.name = this.volunteer.name;
      this.email = this.volunteer.email;
      this.interestArea = this.volunteer.interestArea;
    }
  }

  // Método para editar o voluntário
  editVolunteer() {
    if (this.name && this.email && this.interestArea) {
      this.volunteerService.editVolunteer(this.id, this.name, this.email, this.interestArea).subscribe(
        response => {
          this.showToast('Voluntário editado com sucesso!');
          console.log('Voluntário editado com sucesso', response);
          this.name = '';
          this.email = '';
          this.interestArea = '';
          this.closeModal();
        },
        error => {
          this.showToast('Erro ao editar voluntário', 'danger');
          console.error('Erro ao editar voluntário', error);
        }
      );
    } else {
      this.showToast('Por favor, preencha todos os campos!', 'danger');
      console.log('Por favor, preencha todos os campos!');
    }
  }

  // Método para fechar o modal
  async closeModal() {
    await this.modalCtrl.dismiss(); // Fecha o modal filho
    if (this.parentModal) {
      await this.parentModal.modalCtrl.dismiss(); // Fecha o modal pai
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
