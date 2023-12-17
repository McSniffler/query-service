import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostcodeLocation } from '../postcode-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-postcode-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="postcode-details">
      <h2 class="details-heading">{{ postcodeLocation.postcode }}</h2>
      <p class="details-body">
        {{ postcodeLocation.parliamentaryConstituency }},
        {{ postcodeLocation.europeanElectoralRegion }},
        {{ postcodeLocation.latitude }},
        {{ postcodeLocation.longitude }}
      </p>
      <a [routerLink]="['/details', postcodeLocation.id]">Learn more</a>
    </section>
  `,
  styleUrl: './postcode-location.component.css',
})
export class PostcodeLocationComponent {
  @Input() postcodeLocation!: PostcodeLocation;
}
