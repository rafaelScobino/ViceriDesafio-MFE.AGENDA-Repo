import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Calendar } from 'primeng/calendar';
import { DatePickerModule } from 'primeng/datepicker';
@Component({
  selector: 'app-schedule-header',
  standalone: true,
  imports: [ButtonModule,DatePickerModule,Calendar],
  templateUrl: './schedule-header.component.html',
  styleUrl: './schedule-header.component.scss'
})
export class ScheduleHeaderComponent {
 @Output() _openModalEvento = new EventEmitter<void>();

currentWeek = 1;
currentWeekLabel = `Semana ${this.currentWeek}`;


  prevWeek() {
    if (this.currentWeek > 1) {
      this.currentWeek--;
      this.updateLabel();
    }
  }

  nextWeek() {
    if (this.currentWeek < 4) {
      this.currentWeek++;
      this.updateLabel();
    }
  }

  updateLabel() {
    this.currentWeekLabel = `Semana ${this.currentWeek}`;
  }

  openModalEvento(){
   this._openModalEvento.emit();
  }
}
