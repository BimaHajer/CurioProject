import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrls: ['./add-mark.component.css'],

})
export class AddMarkComponent {
  markForm: FormGroup
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  private _handleReaderLoaded: any;

  
  constructor(private formBuilder: FormBuilder) { 
    this.markForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: [],
      date: ["", Validators.required],
      status: ["", Validators.required],
      image: [""],

    });
  }

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.markForm.value);
    }
    upload(event:any) {
      let fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        let file: File = fileList[0];
        this.filename = file.name;
        this.filesize = file.size;
        if (this.filesize > 100000) {
          this.tailleInvalid = true;
          return
        }
        this.tailleInvalid = false;
         file = file;
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
          // this.alert = { type: 'danger', message: "format d'image invalide " };
          return;
        }
        reader.onloadend = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      }
      else {
        alert("No file selected");
      }
    }
}
