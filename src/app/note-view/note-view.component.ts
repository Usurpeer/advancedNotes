import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note-service';
import { NoteDto } from '../entities/note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css'],
})
export class NoteViewComponent {
  note: NoteDto;

  constructor(
    private route: ActivatedRoute,
    private projectService: NoteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const noteId = params['id'];
      this.projectService.getNoteById(noteId).subscribe((data: NoteDto) => {
        this.note = data;
      });
    });
  }
  onEditClick(): void {
    this.router.navigate(['/notes']);
  }
}
