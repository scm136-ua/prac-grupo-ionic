import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exit',
  templateUrl: 'exit.page.html',
  styleUrls: ['exit.page.scss']
})
export class ExitPage {
  constructor(private alertCtrl: AlertController, private router: Router) {}

  async confirmExit() {
    const alert = await this.alertCtrl.create({
      header: 'Exit',
      message: 'You have decided to exit the app.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigateByUrl('/login');
        }
      }]
    });
    await alert.present();
  }

  goToWiki() {
    this.router.navigate(['/tabs/wiki']);
  }
}
