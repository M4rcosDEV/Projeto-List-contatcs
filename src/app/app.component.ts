import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContatosComponent } from './components/contatos/contatos.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContatosComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoTwo';
}
