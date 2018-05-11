import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { NpsService } from '../../../services/nps.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-agradecimento',
  templateUrl: './agradecimento.component.html',
  styleUrls: ['./agradecimento.component.scss']
})
export class AgradecimentoComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<AgradecimentoComponent>) { }

  ngOnInit() {
  }
  
  public close(){
    this.matDialogRef.close();
  }
}
