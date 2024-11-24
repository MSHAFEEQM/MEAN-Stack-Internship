import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from './services';
import { Projects } from './projects';
import { Skills } from './skills';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  profileAPI = "http://127.0.0.1:3000/profile";
  servicesAPI = "http://127.0.0.1:3000/services";
  projectsAPI = "http://127.0.0.1:3000/projects";
  contactAPI = "http://127.0.0.1:3000/contacts";
  skillsAPI = "http://127.0.0.1:3000/skills"


  constructor(private http: HttpClient) { }

  getProfileData(){

    return this.http.get(this.profileAPI);

  }

  getServicesData(){

      return this.http.get<Services []>(this.servicesAPI);
  }

  getProjectsData(){

      return this.http.get<Projects []>(this.projectsAPI);
  }

  getContactData(){

    return this.http.get(this.contactAPI);

  }

  getSkillsData(){

      return this.http.get<Skills []>(this.skillsAPI);
  }

}
