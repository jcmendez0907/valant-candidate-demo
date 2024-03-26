import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeComponent } from './maze.component';
import { MazeService } from '../../services/maze.service';
import { ValantDemoApiClient } from '../../api-client/api-client';

describe('MazeComponent', () => {
  let component: MazeComponent;
  let fixture: ComponentFixture<MazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazeComponent ],
      providers: [MazeService, ValantDemoApiClient.Client]
    })
    .compileComponents();
    // const createElement = document.createElement.bind(document);
    // document.createElement = (tagName) => {
    //     if (tagName === 'canvas') {
    //         return {
    //             getContext: () => ({}),
    //             measureText: () => ({})
    //         };
    //     }
    //     return createElement(tagName);
    // };
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as endGame 'false'`, () => {
    const fixture = TestBed.createComponent(MazeComponent);
    const app = fixture.componentInstance;
    expect(app.endGame).toEqual(false);
  });

});
