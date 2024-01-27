import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'search-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search-header.component.html',
  styleUrl: './search-header.component.scss'
})
export class SearchHeaderComponent {
  stateService = inject(StateService);
  searchText = new FormControl("");

  ngOnInit(){
    this.searchText.valueChanges.pipe(debounceTime(250)).subscribe((value) => {
      this.stateService.searchSubject.next(value || '');
    });
  }
}
