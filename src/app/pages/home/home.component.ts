import { Component,OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users:any = [];
  mostrar = false;

  constructor( private usuarioService:UsuarioService ){}

  ngOnInit(): void {
    this.usuarioService.getMostrar().subscribe(
      res => {
        this.users = res
        }, err => {
          console.log(err)
      }
    );
  }

  mostrarUsuario(){
    if (this.mostrar){
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }
}
