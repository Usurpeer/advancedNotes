import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { NoteDto } from '../entities/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  httpProperties = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllNotes(): Observable<NoteDto[]> {
    return this.http.get<NoteDto[]>(`${environment.noteUrl}`);
  }

  getNoteById(id: string): Observable<NoteDto> {
    return this.http.get<NoteDto>(`${environment.noteUrl}/${id}`);
  }

  createNote(Note: NoteDto): Observable<NoteDto> {
    return this.http.post<NoteDto>(
      `${environment.noteUrl}`,
      Note,
      this.httpProperties
    );
  }

  updateNote(id: string, Note: NoteDto): Observable<NoteDto> {
    return this.http.put<NoteDto>(
      `${environment.noteUrl}/${id}`,
      Note,
      this.httpProperties
    );
  }

  deleteNoteById(id: string): Observable<NoteDto> {
    const a: string = `${environment.noteUrl}/${id}`;
    return this.http.delete<NoteDto>(a);
  }
}
