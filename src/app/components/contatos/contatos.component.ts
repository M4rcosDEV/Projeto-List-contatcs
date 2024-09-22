import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../../services/contatos.service';
import { Contato } from '../../interfaces/Contatos';
import {CommonModule} from '@angular/common';
import { ContatosItemComponent } from '../contatos-item/contatos-item.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AdicionarContatoComponent } from '../adicionar-contato/adicionar-contato.component';
import { MatDialog } from '@angular/material/dialog';
import { EditarContatoFormComponent } from '../editar-contato-form/editar-contato-form.component';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, ContatosItemComponent,AdicionarContatoComponent, FormsModule, MatFormFieldModule, MatInputModule, EditarContatoFormComponent],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent  implements OnInit {

  contatos: Contato[] = [];
  
  constructor(private dialog: MatDialog, private contatosService: ContatosService) {}
  
  ngOnInit(): void {
    this.loadContatos();
  }

  loadContatos():void{
    this.contatosService.getContatos().subscribe(contatos => {
      this.contatos = contatos;
    });
  }

  AddContato(contato: Contato){
    this.contatosService.addContato(contato).subscribe(contato => {
      this.contatos.push(contato);
    });
  }

  editContato(contato: Contato){
    // this.contatosService.editContato(contato).subscribe(contato => {
    //   this.contatos = this.contatos.map(c => c.id === contato.id ? contato : c);
    // });
  }

  updateContato(contato: Contato){
    this.contatosService.updateContato(contato).subscribe(() => {
      this.loadContatos(); 
    });
  }

  deleteContato(contato: Contato) {
    this.contatosService.deleteContato(contato).subscribe(() => {
      this.contatos = this.contatos.filter(c => c.id !== contato.id);
    });
  }

  openEditDialog(contato: Contato){
    const dialogRef = this.dialog.open(EditarContatoFormComponent, {
      data: { ...contato }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateContato(result);
      }
    });
  }
}
