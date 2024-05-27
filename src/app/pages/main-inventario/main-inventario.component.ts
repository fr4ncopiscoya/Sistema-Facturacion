import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Config } from 'datatables.net';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacturacionService } from '../../services/facturacion.service';

@Component({
  selector: 'app-main-inventario',
  templateUrl: './main-inventario.component.html',
  styleUrl: './main-inventario.component.css'
})
export class MainInventarioComponent implements OnInit {

  //DATA
  datosInventario: any;
  dataCategoria: any;
  dataProducto: any;

  //Registrar nuevo prod
  stock: string = '';
  precio: string = '';

  constructor(
    private appComponent: AppComponent,
    private modalService: NgbModal,
    private facturacionService: FacturacionService
  ) {
    this.appComponent.login = false
  }

  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      scrollY: '250px'
    };
    this.listarCategorias();
    this.listarProductos();
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static', keyboard: false }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    });
  }

  validarNumero(event: any): void {
    const keyCode = event.keyCode;
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault();
    }
  }

  listarCategorias() {
    this.facturacionService.listarCategorias().subscribe({
      next: (data: any) => {
        this.dataCategoria = data
        console.log("data-categorias: ", this.dataCategoria);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  listarProductos() {
    this.facturacionService.listarProductos().subscribe({
      next: (data: any) => {
        this.dataProducto = data
        console.log("data-productos: ", this.dataProducto);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

}
