import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonTextarea, IonLabel, IonInput, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/angular/standalone';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-add-volunteer-modal',
  templateUrl: './add-volunteer-modal.component.html',
  styleUrls: ['./add-volunteer-modal.component.scss'],
  standalone: true,
  imports: [IonTextarea, IonLabel, IonInput, IonItem, IonList, IonHeader,
            IonToolbar, IonTitle, IonButtons, IonButton]
})
export class AddVolunteerModalComponent {
  name: string = '';
  email: string = '';
  interestArea: string = '';

  constructor(
    private modalCtrl: ModalController,
    private volunteerService: VolunteerService
  ) { }

  // Método para fechar o modal
  closeModal() {
    this.modalCtrl.dismiss();
  }

    // Função para adicionar voluntário
    addVolunteer() {
      this.volunteerService.addVolunteer(this.name, this.email, this.interestArea).subscribe(
        response => {
          console.log('Voluntário adicionado com sucesso', response);
          this.name = '';
          this.email = '';
          this.interestArea = '';
        },
        error => {
          console.error('Erro ao adicionar voluntário', error);
        }
      )
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
            
}
