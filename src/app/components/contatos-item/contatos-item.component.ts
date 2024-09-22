import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Contato } from '../../interfaces/Contatos';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-contatos-item',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './contatos-item.component.html',
  styleUrl: './contatos-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatosItemComponent {
  
  @Output () onDeleteContato = new EventEmitter<Contato>();
  @Output() editar = new EventEmitter<Contato>();

  @Input() contato!:Contato;

  verConsole(){
     console.log(this.contato);
  }
  onDelete(contato: Contato){
    console.log('deletar contato');
    this.onDeleteContato.emit(contato);
  }

  onEdit(): void {
    console.log("Editou")
    this.editar.emit(this.contato); 
  }
}
