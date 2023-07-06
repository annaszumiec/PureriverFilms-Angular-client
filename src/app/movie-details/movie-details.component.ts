import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})

/**
 * This component will render the movie info dialog
 * @export
 * @class MovieInfoComponent
 * @implements {OnInit}
 * @example <app-movie-details></app-movie-details>
 * @see MAT_DIALOG_DATA
 */
export class MovieDetailsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      content: string;
    }
  ) {}

  ngOnInit(): void {}
}
