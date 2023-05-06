import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-create-chat-form',
  standalone: true,
  templateUrl: './create-chat-form.component.html',
  styleUrls: ['./create-chat-form.component.scss'],
  imports: [ReactiveFormsModule, TranslateModule]
})
export class CreateChatFormComponent {

  createForm = new FormGroup({
    title: new FormControl('', Validators.required),
    goal: new FormControl(''),
    file: new FormControl(''),
  });

  onFileSelected($event: Event) {
    const target = $event.target as HTMLInputElement;
    const files: FileList = (target.files as FileList);
    console.log(files);
    }

  onSubmit() {
    if (this.createForm.valid) {
      console.log(this.createForm.value);
      // Handle successful form submission
    } else {
      this.createForm.markAllAsTouched();
    }
  }
}
