import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Config } from 'datatables.net';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FacturacionService } from '../../services/facturacion.service';

@Component({
  selector: 'app-main-ventas',
  templateUrl: './main-ventas.component.html',
  styleUrl: './main-ventas.component.css'
})
export class MainVentasComponent implements OnInit {

  //DATA
  dataProducto: any;

  fechaToday: string = '';

  constructor(
    private appComponent: AppComponent,
    private modalService: NgbModal,
    private facturacionService: FacturacionService
  ) {
    // const fechaActual = new Date().toISOString().split('T')[0];
    // this.fechaActual = fechaActual
    // console.log(this.fechaActual);

    this.appComponent.login = false
  }
  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      scrollY: '162px'
    };
    const fechaActual = new Date().toISOString().split('T')[0];
    this.fechaToday = fechaActual
    console.log(this.fechaToday);
    this.listarProductos()
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', modalDialogClass: '', backdrop: 'static', keyboard: false }).result.then((result) => {
      console.log(`Closed with: ${result}`);
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
