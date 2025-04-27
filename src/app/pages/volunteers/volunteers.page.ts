import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonBackButton, IonButton, IonButtons, IonContent, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { AddVolunteerModalComponent } from 'src/app/modals/add-volunteer-modal/add-volunteer-modal.component';
import { ModalController } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { VolunteerService } from 'src/app/services/volunteer.service';



@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.page.html',
  styleUrls: ['./volunteers.page.scss'],
  standalone: true,
  imports: [IonIcon, IonBackButton, IonButtons, IonContent, IonTitle,
            IonToolbar, CommonModule, FormsModule, IonList, IonItem,
            IonLabel, IonButton]
})
export class VolunteersPage implements OnInit {
  volunteers: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private volunteerService: VolunteerService

  ) { }

  async ngOnInit() {
    await this.storage.create();
    this.getVolunteers();
  }

  // Função para obter a lista de voluntários
  getVolunteers() {
    this.volunteerService.getVolunteers().subscribe(
      (data: any) => {
        this.volunteers = data;
      },
      (error: any) => {
        console.error('Erro ao obter a lista de voluntários:', error);
      }
    );
  }

  // Método para abrir o formulário de inscrição
  async openVolunteerForm() {
    const modal = await this.modalCtrl.create({
      component: AddVolunteerModalComponent,
    });
    return await modal.present();
  }
}
