import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() weekEmitter = new EventEmitter<number>();
    @Output() dateEmitter = new EventEmitter<number>();



 @Input() dateSelector :Date = new Date();
 @Input() semanaSelector: number = 1;
currentWeekLabel = `Semana ${this.semanaSelector}`;


  prevWeek() {
    if (this.semanaSelector > 1) {
      this.semanaSelector--;
      this.updateLabel();
    }
    this.weekEmitter.emit(this.semanaSelector)
  }

  nextWeek() {
    if (this.semanaSelector < 5) {
      this.semanaSelector++;
      this.updateLabel();
    }
    this.weekEmitter.emit(this.semanaSelector)
  }

  updateLabel() {
    this.currentWeekLabel = `Semana ${this.semanaSelector}`;
  }

  openModalEvento(){
   this._openModalEvento.emit();
  }
}
