import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Contato } from '../../interfaces/Contatos';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-adicionar-contato',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatRadioModule],
  templateUrl: './adicionar-contato.component.html',
  styleUrl: './adicionar-contato.component.css'
})
export class AdicionarContatoComponent {
  @Output() adicionarContato = new EventEmitter<Contato>();


  contato:  any = {
    nome: '',
    email: '',
    telefone: '',
    sexo: null
    };

    onSubmit() {
      if (this.contato.nome === '' || this.contato.email === '' || this.contato.telefone === '') {
        alert('Preencha todos os campos');
      } else {
        alert('Contato adicionado com sucesso');
        
        const sexoEmBoolean = !!+this.contato.sexo;
        this.contato.sexo = sexoEmBoolean; 
        console.log(this.contato);
        const novoContato = this.contato;
        
        this.adicionarContato.emit(novoContato);
        
        this.contato = {
          nome: '',
          email: '',
          telefone: '',
          sexo: null
        };
      }
    }

  
}
