import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoteDto } from '../entities/note';
import { NoteService } from '../services/note-service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes: NoteDto[] = [];
  constructor(private noteservice: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteservice.getAllNotes().subscribe((newNotes) => {
      this.notes = newNotes;
    });
  }

  createNote(): void {
    this.router.navigate(['/notes/new']);
  }
}
