import { Component } from '@angular/core';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  faSkullCrossbones = faSkullCrossbones;
}
