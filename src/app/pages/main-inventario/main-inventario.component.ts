import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Config } from 'datatables.net';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-inventario',
  templateUrl: './main-inventario.component.html',
  styleUrl: './main-inventario.component.css'
})
export class MainInventarioComponent implements OnInit {
  constructor(
    private appComponent: AppComponent,
    private modalService: NgbModal
  ) {
    this.appComponent.login = false
  }

  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      scrollY: '550px'
    };
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static', keyboard: false }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    });
  }

  datosInventario: any;
}
