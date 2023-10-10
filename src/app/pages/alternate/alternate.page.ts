import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.page.html',
  styleUrls: ['./alternate.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlternatePage implements OnInit {
  router = inject(Router);
  constructor() { }

  ngOnInit() {
  }

  async home() {
    await this.router.navigateByUrl('/home');
  }

}
