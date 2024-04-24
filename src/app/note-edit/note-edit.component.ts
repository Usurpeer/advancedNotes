import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NoteService } from '../services/note-service';
import { NoteDto } from '../entities/note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css'],
})
export class NoteEditComponent {
  noteForm: FormGroup;
  @Input() id: string;
  operation: string;
  note: NoteDto;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.operation = this.route.snapshot.url.slice(-1)[0].path;
      this.handleOperation();
    });
  }

  handleOperation(): void {
    switch (this.operation) {
      case 'edit':
        this.editNote();
        break;
      case 'delete':
        this.deleteNote();
        break;
    }
  }

  deleteNote(): void {
    this.noteService.deleteNoteById(this.id).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  }

  editNote(): void {
    this.noteService.getNoteById(this.id).subscribe((data: NoteDto) => {
      this.note = data;
      this.noteForm.patchValue({
        title: this.note.title,
        text: this.note.text,
      });
    });
  }

  add() {
    if (this.noteForm.valid) {
      const formData = this.noteForm.value;
      if (this.operation == 'edit') {
        this.noteService
          .updateNote(this.id, formData)
          .subscribe((response: NoteDto) => {
            this.router.navigate(['/notes']);
          });
      } else {
        this.noteService.createNote(formData).subscribe((response: NoteDto) => {
          this.router.navigate(['/notes']);
        });
      }
    }
  }
}
