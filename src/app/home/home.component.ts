import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostcodeLocationComponent } from '../postcode-location/postcode-location.component';
import { PostcodeLocation } from '../postcode-location';
import { PostcodeSearchService } from '../postcode-search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostcodeLocationComponent],
  template: `
    <section class="search-header">
      <form>
        <input type="text" placeholder="Search postcode" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-postcode-location
        *ngFor="let postcodeLocation of filteredLocationList"
        [postcodeLocation]="postcodeLocation"
      ></app-postcode-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  postcodeLocationList: PostcodeLocation[] = [];
  postcodeSearchService: PostcodeSearchService = inject(PostcodeSearchService);
  filteredLocationList: PostcodeLocation[] = [];

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.postcodeLocationList;
      return;
    }

    this.filteredLocationList = this.postcodeLocationList.filter(
      (postcodeLocation) =>
        postcodeLocation?.postcode.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    this.postcodeSearchService
      .getAllPostcodeDetails()
      .then((postcodeLocationList: PostcodeLocation[]) => {
        this.postcodeLocationList = postcodeLocationList;
        this.filteredLocationList = postcodeLocationList;
      });
  }
}
