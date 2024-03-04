import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  form: FormGroup;
  filename: string="";
  filesize: number=0;
  tailleInvalid: boolean=false; 
  private _handleReaderLoaded: any;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({
        first: ['Luke', Validators.required],
        last: ['Skywalker', Validators.required],
      }),
      contact: this.formBuilder.group({
        email: [],
        phone: [],
      }),
      password: this.formBuilder.group({
        password: [],
        confirm: [],
      }),
    });
  } 

  submit() {
    console.log('reactive form submit', this.form.value);
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


