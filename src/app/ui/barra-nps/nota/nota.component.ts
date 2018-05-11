import { BarraNpsComponent } from './../barra-nps.component';
import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { NpsService } from '../../../services/nps.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})

export class NotaComponent implements OnInit {
  @Input() nota: Number;
  constructor(private npsService: NpsService, private modalService: ModalService) { }

  ngOnInit() {
    
  }

  salvarNota(selecao) {
    this.npsService.salvarNota(Number(selecao)).subscribe(ret => {
        this.callMethod({ id: ret.data.id, nota: this.nota });
      },
      error => {
        var errors = JSON.parse(error._body).errors;
        console.log("this.errors ", errors);
      });
  }

  callMethod = function (id) {
    var obj = {data: id};
    this.modalService.callComponentMethod(id);
  }
}
