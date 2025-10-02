import { Component } from '@angular/core';
import { EventFormComponent } from '../../event-form/event-form.component';

@Component({
  selector: 'app-modal-event',
  standalone: true,
  imports: [EventFormComponent],
  templateUrl: './modal-event.component.html',
  styleUrl: './modal-event.component.scss'
})
export class ModalEventComponent {

}
