import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public save_project: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '', 2019, '', '');
  }

  ngOnInit() {
  }

  onSubmit(form) {

    // Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {

          // Subir la imagen
          this._uploadService.makeFileRequest(
            Global.url + 'upload-image/' + response.project._id,
            [],
            this.filesToUpload,
            'image'
          ).then((result: any) => {
            this.save_project = result.project;
            this.status = 'success';
            form.reset();
          });
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error as any);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }

}
