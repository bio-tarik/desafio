import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { NpsService } from '../../../services/nps.service';
import { ModalService } from '../../../services/modal.service';
 
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {
  private id:string = '';
  private nota:number = 0;
  private titulo:string = '';
  private emoticon:string = '';

  constructor(
    private npsService: NpsService,
    private modalService: ModalService,
    private matDialogRef: MatDialogRef<ComentarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  )
  {
    this.id = data.obj.id;
    this.nota = data.obj.nota;

    if (this.nota <= 6) {
      this.titulo = 'Nós queremos te ouvir';
      this.emoticon = ':(';
    } else if (this.nota <= 8) {
      this.titulo = 'Ficaremos felizes com sua opinião';
      this.emoticon = ':|';
    }
    else{
      this.titulo = 'Você nos deu nota ' + this.nota + '!';
      this.emoticon = ':)';
    }
  }

  ngOnInit() {
  }

  public close(){
    this.matDialogRef.close();
  }

  enviarComentario(comentario){
      // this.modalService.callComponentMethod(null);

      this.npsService.salvarComentario(this.id, comentario).subscribe(ret => {
        this.modalService.callComponentMethod(null);
      },
      error => {
        var errors = JSON.parse(error._body).errors;
        console.log("this.errors ", errors);
      });
      
    this.matDialogRef.close();
  }
}
