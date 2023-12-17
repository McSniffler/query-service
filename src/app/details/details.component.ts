import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostcodeSearchService } from '../postcode-search.service';
import { PostcodeLocation } from '../postcode-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <section class="postcode-details">
        <h2 class="details-heading">{{ postcodeLocation?.postcode }}</h2>
        <p class="details-body">
          {{ postcodeLocation?.parliamentaryConstituency }}<br />
          {{ postcodeLocation?.europeanElectoralRegion }}<br />
          Latitude: + {{ postcodeLocation?.latitude }}<br />
          Longitude: + {{ postcodeLocation?.longitude }}<br />
          {{ postcodeLocation?.nhsHealthAuthority }}<br />
          {{ postcodeLocation?.region }}
        </p>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postcodeSearchService = inject(PostcodeSearchService);
  postcodeLocation: PostcodeLocation | undefined;

  constructor() {
    const postcodeLocationId = parseInt(this.route.snapshot.params['id'], 10);

    this.postcodeSearchService
      .getPostcodeLocationById(postcodeLocationId)
      .then((postcodeLocation) => {
        this.postcodeLocation = postcodeLocation;
      });
  }
}
