import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GitHubProfile } from "./github-profile";

@Injectable()
export class homeService {
    constructor(private httpClient: HttpClient) {
    }
    getGithubProfile(profile: string) {
        const url = `http://api.github.com/users/${profile}`
        return this.httpClient.get<GitHubProfile>(url)
    }
}