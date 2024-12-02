import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users = new Map<string, string>()
  loggedInUser;
  private documents: Document[] = [];
  private idCounter = 1;
  signup(username: string, password: string): boolean {
    if (this.users.has(username)) {
      return false;
    }
    this.users.set(username, password);
    return true;
  }
  login(username: string, password: string): boolean {
    debugger
    if (this.users.get(username) === password) {
      this.loggedInUser = username;
      localStorage.setItem('user', JSON.stringify(username)); // Simulating token storage
      return true;
    }
    return false;
  }
  logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem('user');
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
  getLoggedInUser(): string | null {
    return localStorage.getItem('user');
  }
  getAllUsers(): Array<{ username: string }> {
    return Array.from(this.users.keys()).map((username) => ({ username }));
  }
  uploadDocument(file: File): void {
    const document: Document = {
      id: this.idCounter++,
      name: file.name,
      file: file,
      uploadDate: new Date(),
    };
    this.documents.push(document);
  }

  getDocuments(): Document[] {
    return this.documents;
  }

  deleteDocument(id: number): void {
    this.documents = this.documents.filter((doc) => doc.id !== id);
  }
}
interface Document {
  id: number;
  name: string;
  file: File;
  uploadDate: Date;
}