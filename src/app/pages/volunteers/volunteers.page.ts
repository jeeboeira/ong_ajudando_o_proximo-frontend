import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.page.html',
  styleUrls: ['./volunteers.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VolunteersPage implements OnInit {
  volunteers: any[] = [];

  constructor(
    private volunteerService: VolunteerService,
    private storage: Storage
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

}
