import { AgradecimentoComponent } from './../ui/modal/agradecimento/agradecimento.component';
import { ModalService } from './../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComentarioComponent } from '../ui/modal/comentario/comentario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog, private modalService: ModalService) {
    this.modalService.componentMethodCalled$.subscribe(
      (obj:any) => {
        this.openModal(obj);
      }
    );
  }

  ngOnInit() {
    
  }
  public openModal(obj:any) {
    if (obj == null)
      this.dialog.open(AgradecimentoComponent, { data: { obj } });
    else
      this.dialog.open(ComentarioComponent, { data: { obj } });
  }
}
