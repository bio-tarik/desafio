import { ComentarioComponent } from './../modal/comentario/comentario.component';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { NpsService } from '../../services/nps.service';
import { MatDialog } from '@angular/material';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-barra-nps',
  templateUrl: './barra-nps.component.html',
  styleUrls: ['./barra-nps.component.scss'],
  providers: [NpsService]
})
export class BarraNpsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
