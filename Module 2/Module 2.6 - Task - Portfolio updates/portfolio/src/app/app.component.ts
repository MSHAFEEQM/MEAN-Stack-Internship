import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { Projects } from './projects';
import { Services } from './services';
import { Skills } from './skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  scrolled: boolean = false;
  skillNavSelected: number = 1;

  services: Services [] = [];
  projects: Projects [] = [];
  skills: Skills [] = []
  skills1 = [1,2,3]
  profile = {
    name:'',
    title:'',
    bio:'',
    brief:'',
    profileImg:'',
    coverImg1:'',
    coverImg2:''
  };
  contacts = {
    email: '',
        phone: '',
        address: {
            place:'',
            city:'',
            dist:'',
            pinCode:''
        }
  };

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
   
    this.loadProfileData();
    this.loadServicesData();
    this.loadProjectsData();
    this.loadSkillsData();
    this.loadContactsData();
  }

  loadProfileData(){
    this.dataService.getProfileData().subscribe(result=>{
      this.profile = <any>result;
    })
  }

  loadServicesData(){
    this.dataService.getServicesData().subscribe(result=>{
      this.services = result;
      console.log(this.services);
      
    })
  }

  loadProjectsData(){
    this.dataService.getProjectsData().subscribe(result=>{
      this.projects = result;
      console.log(this.projects);
      
    })
  }

  loadContactsData(){
    this.dataService.getContactData().subscribe(result=>{
      this.contacts = <any>result;
      console.log(this.contacts);
      
    })
  }
 loadSkillsData(){
    this.dataService.getSkillsData().subscribe(result=>{
      this.skills = result;
      console.log(this.skills);
      
    })
 }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
      this.scrolled = true
    } else
      this.scrolled = false
  }

  getSelected(tabNumber: number) {
    this.skillNavSelected = tabNumber;
  }
}

