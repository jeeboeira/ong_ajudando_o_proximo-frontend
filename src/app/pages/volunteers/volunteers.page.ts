import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonButton, IonContent, IonTitle, IonToolbar } from '@ionic/angular/standalone';



@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.page.html',
  styleUrls: ['./volunteers.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonButton, IonContent, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VolunteersPage {

  constructor(
  ) { }

}
