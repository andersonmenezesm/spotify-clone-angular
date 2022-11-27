import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.validateTokenUrlCallback();
  }

  validateTokenUrlCallback() {
    const token = this.spotifyService.handleTokenUrlCallback();

    if (!!token) {
      this.spotifyService.setSpotifyAccessToken(token);
    }
  }

  openLoginPage() {
    window.location.href = this.spotifyService.getLoginUrl();
  }

}
