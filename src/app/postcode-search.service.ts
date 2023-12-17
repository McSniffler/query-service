import { Injectable } from '@angular/core';
import { PostcodeLocation } from './postcode-location';

@Injectable({
  providedIn: 'root',
})
export class PostcodeSearchService {
  url = 'http://localhost:3000/postcodeLocations';

  async getAllPostcodeDetails(): Promise<PostcodeLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getPostcodeLocationById(
    id: number
  ): Promise<PostcodeLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
