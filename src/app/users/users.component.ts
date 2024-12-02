import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<{ username: string }> = [];
  selectedFile
  message: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.users = this.authService.getAllUsers();
    console.log(this.users)
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
      this.message = '';
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.authService.uploadDocument(this.selectedFile);
      this.message = 'Document uploaded successfully!';
      this.selectedFile = null;
    } else {
      this.message = 'Please select a file to upload.';
    }
  }

}
