import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

import { FileUploadService } from 'src/app/services/file-upload.service';
import { Categoria } from 'src/app/models/categoria.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IconosService } from 'src/app/services/iconos.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TipovehiculoService } from 'src/app/services/tipovehiculo.service';
import { TipoVehiculo } from 'src/app/models/tipovehiculo.model';

interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
}

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css'],
  providers: [IconosService]
})
export class CatEditComponent implements OnInit {


  public tipoForm: FormGroup;
  public tipo: TipoVehiculo;
  public usuario: Usuario;
  public imagenSubir: File;
  public imgTemp: any = null;

  banner: string;
  pageTitle: string;
  listIcons;
  state_banner:boolean;

  public Editor = ClassicEditor;
  public tipoSeleccionado: TipoVehiculo;

  constructor(
    private fb: FormBuilder,
    private tipoService: TipovehiculoService,
    private usuarioService: UsuarioService,
    private fileUploadService: FileUploadService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private _iconoService: IconosService,
  ) {
    this.usuario = usuarioService.usuario;
    const base_url = environment.baseUrl;
  }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.cargar_iconos();
    
    this.validarFormulario();
    this.activatedRoute.params.subscribe( ({id}) => this.cargarCategoria(id));
    if(this.tipoSeleccionado){
      //actualizar
    this.pageTitle = 'Edit Tipo Vehiculo';
    
    }else{
      //crear
      this.pageTitle = 'Create Tipo Vehiculo';
      }


  }

  validarFormulario(){
    this.tipoForm = this.fb.group({
      nombre: ['', Validators.required],
      icono: ['', Validators.required],
      precio: [''],
    })
  }

  cargar_iconos(){
    this._iconoService.getIcons().subscribe(
      (resp:any) =>{
        this.listIcons = resp.iconos;
        // console.log(this.listIcons.iconos)

      }
    )
  }

  cargarCategoria(_id: string){

    if(_id === 'nuevo'){
      return;
    }

    this.tipoService.getTiposVehicById(_id)
    .pipe(
      // delay(100)
      )
      .subscribe( tipo =>{


      if(!tipo){
        return this.router.navigateByUrl(`/dasboard/categoria`);
      }

        const { nombre,  icono, precio } = tipo;
        this.tipoSeleccionado = tipo;
        this.tipoForm.setValue({nombre,  icono, precio });

      });

  }




  updateCategoria(){

    const {nombre } = this.tipoForm.value;

    if(this.tipoSeleccionado){
      //actualizar
      const data = {
        ...this.tipoForm.value,
        _id: this.tipoSeleccionado._id
      }
      this.tipoService.update(data).subscribe(
        resp =>{
          Swal.fire('Actualizado', `${nombre} actualizado correctamente`, 'success');
        });

    }else{
      //crear
      this.tipoService.registro(this.tipoForm.value)
      .subscribe( (resp: any) =>{
        Swal.fire('Creado', `${nombre} creado correctamente`, 'success');
        this.router.navigateByUrl(`/dashboard/categoria`);
      })
    }

  }


  cambiarImagen(file: File){
    this.imagenSubir = file;

    if(!file){
      return this.imgTemp = null;
    }

    const reader = new FileReader();
    const url64 = reader.readAsDataURL(file);

    reader.onloadend = () =>{
      this.imgTemp = reader.result;
    }
  }

  subirImagen(){
      this.fileUploadService
      .actualizarFoto(this.imagenSubir, 'tipos', this.tipoSeleccionado._id)
      .then(img => { this.tipoSeleccionado.img = img;
        Swal.fire('Guardado', 'La imagen fue actualizada', 'success');
  
      }).catch(err =>{
        Swal.fire('Error', 'No se pudo subir la imagen', 'error');
  
      })
    }
  

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
