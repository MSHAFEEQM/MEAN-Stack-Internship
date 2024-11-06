import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  scrolled: boolean = false;
  skillNavSelected : number = 1;
  datas = [{
    name: 'Website Design',
    img: 'html.gif',
    brief : 'From wireframing and UI/UX design to HTML, CSS, and JavaScript development. I create websites that seamlessly adapt to various screen sizes, ensuring optimal user experiences across all devices.'
  },
  {
    name: 'Web Development',
    img: 'api.gif',
    brief : 'I specialize in creating dynamic and scalable web applications. I build robust and efficient server-side applications, handling data storage and integrate APIs to enhance website functionality and data exchange.'
  },
  {
    name: 'App Development',
    img: 'cell.gif',
    brief : 'I design intuitive and visually appealing user interfaces that enhance user engagement. My development includes high-quality mobile apps for iOS and Android using frameworks like React Native, Flutter, and Ionic.'
  },
  {
    name: 'PC App Development',
    img: 'pc.gif',
    brief : 'I create high-performance Linux and Windows applications using C#, C++, .NET, and Visual Studio. Builds multi sectional software and integrate applications with databases like SQL Server, MySQL, and PostgreSQL.'
  }]

  projects = [{
    name : 'Online Voting System',
    category : 'Web Development',
    img : 'vote.jpg',
    brief : 'A simple online voting system used to elect class and school leaders of a Educational Institute:',
    stack : 'HTML, CSS, EJS, JavaScript, NodeJS, ExpressJS, PostgreSQL',
    link :'https://github.com/MSHAFEEQM/Voting'
  },{
    name : 'Wheather APP',
    category : 'Website Design',
    img : 'whether.png',
    brief : 'A weather showing webapp created using HTML, CSS, and Javascript. API of openweather.com was used for data gathering.',
    stack :'HTML, CSS, JavaScript, API',
    link : 'https://github.com/MSHAFEEQM/WeatherApp'
  },{
    name : 'Home Automation ',
    category : 'Web and App Development',
    img : 'iot.webp',
    brief : 'This project was developed for controlling various appliances in a home remotely by ESP8266 wifi module ',
    stack : 'HTML, CSS, JS, NodeJS, Android, IoT',
    link : 'https://github.com/MSHAFEEQM/Home_Auto_IOT_System'
  },{
    name : 'Rentome - Rent a Home',
    category : 'Web Development',
    img : 'home.png',
    brief : 'A single page webapp - vendors can list thier houses for rent. It provides detils of ready to rent houses and useful for a person or family looking for a rent home ',
    stack : 'HTML, CSS, JavaScript, ReactJS',
    link : 'https://github.com/MSHAFEEQM/Rent-home'
  }]

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
      this.scrolled = true 
    } else
      this.scrolled = false
  }

  getSelected(tabNumber:number){
    this.skillNavSelected = tabNumber;
  }
}

