import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Config } from 'datatables.net';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-main-ventas',
  templateUrl: './main-ventas.component.html',
  styleUrl: './main-ventas.component.css'
})
export class MainVentasComponent implements OnInit {
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
      scrollY: '182px'
    };
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', modalDialogClass:'modal-lg', backdrop: 'static', keyboard: false }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    });
  }
}
