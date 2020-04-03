import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FilePath } from 'src/storage/file-path.storage';

@Component({
  selector: 'app-select-rating',
  templateUrl: './select-rating.component.html',
  styleUrls: ['./select-rating.component.scss']
})
export class SelectRatingComponent implements OnInit {

  selected_rating_value: number = 0
  @Input('rating_value') display_rating_value: number = 0
  @Output('onRatingChange') onRatingChange: EventEmitter<number>
  rating_list: number[] = [1, 2, 3, 4, 5]

  constructor() {
    this.onRatingChange = new EventEmitter()
  }

  ngOnInit() {
  }

  selectedRating(rating: number) {
    this.display_rating_value = rating
    this.selected_rating_value = rating
    this.onRatingChange.emit(rating)
  }

  onMouseEnter(rating_value: number) {
    console.log(rating_value)
    this.display_rating_value = rating_value
  }

  onMouseLeave() {
    this.display_rating_value = this.selected_rating_value
    console.log(this.selected_rating_value)
  }

  get FilePath() {
    return FilePath
  }

}
