import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-editar-contato-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatRadioModule],
  templateUrl: './editar-contato-form.component.html',
  styleUrl: './editar-contato-form.component.css'
})
export class EditarContatoFormComponent {
  contatoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarContatoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.contatoForm = this.fb.group({
      nome: [data.nome, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      telefone: [data.telefone, Validators.required],
      sexo: [data.sexo ? '1' : '0']
    });
  }

  onSave(): void {
    if(this.contatoForm.value.sexo == null){
      alert('Informe o sexo')
    }
        
    if (this.contatoForm.valid) {
      
      const sexoEmBoolean = !!+this.contatoForm.value.sexo;
      
      const updatedContato = {
        id: this.data.id,
        ...this.contatoForm.value,
        sexo: sexoEmBoolean
      };
      this.dialogRef.close(updatedContato);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
