import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Calendar } from 'primeng/calendar';
import { DatePickerModule, DatePickerMonthChangeEvent } from 'primeng/datepicker';
@Component({
  selector: 'app-schedule-header',
  standalone: true,
  imports: [ButtonModule,DatePickerModule],
  templateUrl: './schedule-header.component.html',
  styleUrl: './schedule-header.component.scss'
})
export class ScheduleHeaderComponent {
 @Output() _openModalEvento = new EventEmitter<void>();
  @Output() weekEmitter = new EventEmitter<number>();
    @Output() dateEmitter = new EventEmitter<Date>();



dateSelector :Date = new Date();
semanaSelector: number = 1;
currentWeekLabel = `Semana ${this.semanaSelector}`;


  prevWeek() {
    if (this.semanaSelector > 1) {
      this.semanaSelector--;
      this.updateLabel();
    }
    this.weekEmitter.emit(this.semanaSelector)
  }

  nextWeek() {
    if (this.semanaSelector < 6) {
      this.semanaSelector++;
      this.updateLabel();
    }
    this.weekEmitter.emit(this.semanaSelector)
  }

  updateLabel() {
    this.currentWeekLabel = `Semana ${this.semanaSelector}`;
  }

  changeMonth(e:Date) {
    console.log(e)
    this.dateEmitter.emit(e);
}

  openModalEvento(){
   this._openModalEvento.emit();
  }
}
