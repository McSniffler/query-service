export interface PostcodeLocation {
  id: number;
  postcode: string;
  outcode: string;
  incode: string;
  quality: number;
  eastings: number;
  northings: number;
  country: string;
  nhsHealthAuthority: string;
  adminDistrict: string;
  adminWard: string;
  longitude: number;
  latitude: number;
  parliamentaryConstituency: string;
  europeanElectoralRegion: string;
  region: string;
}
