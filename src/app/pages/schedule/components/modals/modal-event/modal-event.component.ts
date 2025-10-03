import { Component } from '@angular/core';
import { EventFormComponent } from '../../event-form/event-form.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-event',
  standalone: true,
  imports: [EventFormComponent,DialogModule,ButtonModule,CommonModule],
  templateUrl: './modal-event.component.html',
  styleUrl: './modal-event.component.scss'
})
export class ModalEventComponent {
   visible: boolean = false;

    open() {
        this.visible = true;
    }
}
