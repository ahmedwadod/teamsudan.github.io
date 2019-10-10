import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public data: DataService) {}

  team(no: number){
    this.data.currentMember = no;
    this.navCtrl.navigateForward("/team-member");
  }
}
