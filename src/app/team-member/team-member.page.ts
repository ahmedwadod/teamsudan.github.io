import { Component, OnInit } from '@angular/core';
import { DataService, Member } from '../data.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.page.html',
  styleUrls: ['./team-member.page.scss'],
})
export class TeamMemberPage implements OnInit {

  member: Member;
  constructor(public data: DataService, public platform: Platform) { }

   ngOnInit() {
    this.member = this.data.getCurrentMember();
  }

}
