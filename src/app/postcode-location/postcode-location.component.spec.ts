import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeLocationComponent } from './postcode-location.component';

describe('PostcodeLocationComponent', () => {
  let component: PostcodeLocationComponent;
  let fixture: ComponentFixture<PostcodeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostcodeLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcodeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
