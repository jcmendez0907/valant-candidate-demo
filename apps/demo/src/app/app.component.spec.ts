import { of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { LoggingService } from './logging/logging.service';
import { SilentLogger } from './logging/silent-logger';
import { StuffService } from './stuff/stuff.service';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { MazeService } from './services/maze.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ValantDemoApiClient } from './api-client/api-client';

const mockStuffService = { getStuff: jest.fn(() => of([])) };


describe('AppComponent', () => {
  let component: Shallow<AppComponent>;
  beforeEach(() => {
    component = new Shallow(AppComponent, AppModule)
      .provideMock({ provide: StuffService, useValue: mockStuffService })
      .provideMock({ provide: LoggingService, useClass: SilentLogger });
    jest.clearAllMocks();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render file upload component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const { debugElement } = fixture;
    const fileUpload = debugElement.query(By.css('app-file-upload'));
    expect(fileUpload).toBeTruthy();
  });

  it('should render app-maze component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const { debugElement } = fixture;
    const fileUpload = debugElement.query(By.css('app-maze'));
    expect(fileUpload).toBeTruthy();
  });
});
