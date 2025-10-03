import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';


@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,TextareaModule,CheckboxModule,DatePickerModule,MultiSelectModule,FloatLabelModule,CommonModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent implements OnInit {
  formGroup!: FormGroup;
  participantesOptions = [
    { name: 'João Silva', code: '1' },
    { name: 'Maria Souza', code: '2' },
    { name: 'Carlos Lima', code: '3' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      titulo: [''],
      assunto: [''],
      presencial: [false],
      remoto: [false],
      local: [''],
      participantes: [[]],
      descricao: [''],
      dataHora: [null]
    });
  }
}
