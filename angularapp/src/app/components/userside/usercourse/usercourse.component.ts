import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercourse',
  templateUrl: './usercourse.component.html',
  styleUrls: ['./usercourse.component.css']
})
export class UsercourseComponent implements OnInit {
  courses=[
    {
     name : 'M.Com.(CA)', duration:'2 years', time:'9am - 4pm',students:122, description:'This course focuses on integrating technology into various aspects of commerce, including accounting, finance, and business operations. Graduates gain expertise in areas such as financial analysis, software development, data analytics, and business management.'
    },
     {
     name : 'M.Com.(International Business & Finance)', duration:'2 years', time:'9am - 4pm',students:139, description:'This course focuses on the intersection of international business and financial management. It equips students with knowledge and skills in areas such as global trade, international financial markets, cross-border transactions, and strategic financial decision-making in a global context.' 
    },
    {
     name : 'M.A.(Financial Economics)', duration:' 2 years', time:'9am - 4pm',students:150, description:'This course combines the fields of economics and finance to provide students with a comprehensive understanding of financial markets, investment analysis, and economic principles that drive financial decision-making. The program focuses on topics such as financial modeling, asset pricing, risk management, econometrics, and monetary policy.' 
    },
    {
     name : 'MBA (Human Resource Management)', duration:'2 years', time:'9am - 4pm',students:100, description:'This course focuses on developing expertise in managing the human capital within organizations. The program covers topics such as strategic HR management, talent acquisition, performance management, training and development, and employee relations.' 
    },
    {
     name : 'M.E.(VLSI)', duration:'2 years', time:'9am - 4pm',students:222, description:'This course focuses on the design and development of integrated circuits and systems. Graduates are equipped with skills in VLSI design methodologies, semiconductor technologies, and computer-aided design tools, preparing them for careers in semiconductor companies and electronic design.' 
    },
    {
     name : 'M.E.(Applied Electronics)', duration:'2 years', time:'9am - 4pm',students:100, description:'This course  focuses on the practical application of electronic principles in various fields. Graduates are equipped with skills in circuit design, embedded systems, signal processing, and communication systems, preparing them for careers in industries such as telecommunications, consumer electronics, and automotive electronics.' 
    },
    {
     name : 'M.E.(Computer Science Engineering)', duration:'2 years', time:'9am - 4pm',students:100, description:'This course focuses on advanced knowledge and skills in computer science and engineering. Graduates are prepared for careers in software development, data analysis, cybersecurity, and research.' 
    },
    {
     name : 'M.E.(Power Systems Engineering)', duration:'2 years', time:'9am - 4pm',students:100, description:'focuses on the study of power generation, transmission, distribution, and utilization. Graduates are equipped with knowledge and skills in power system analysis, electrical machines, renewable energy systems, and smart grid technologies.' 
    }
 
    ]
     searchCourse = '';
     
     get filteredCourses(): any[] { 
       if (!this.searchCourse) {
         return this.courses;
       }
       return this.courses.filter(courses => courses.name.toLowerCase().includes(this.searchCourse.toLowerCase()));
     }
  constructor() { 
    //Empty constructor
  }

  ngOnInit(): void {
    // Empty ngOnInit
  }

}
