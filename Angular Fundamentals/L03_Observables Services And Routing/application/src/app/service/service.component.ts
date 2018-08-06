import { Component, OnInit } from '@angular/core';
import { homeService } from './homeService';
import { GitHubProfile } from './github-profile';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  profile: GitHubProfile

  someData: string
  constructor(private homeService: homeService) {
  }

  ngOnInit() {
    this.homeService.getGithubProfile('ivaylokenov')
      .subscribe(data => this.profile = data)
  }
}
