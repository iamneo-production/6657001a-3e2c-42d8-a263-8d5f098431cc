import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-navigation-bar',
  templateUrl: './user-navigation-bar.component.html',
  styleUrls: ['./user-navigation-bar.component.css'],
})
export class UserNavigationBar implements AfterViewInit {
  links = [
    { name: 'Academy', route: '/user/institute', id: 'Academy' },
    {
      name: 'Enrolled Course',
      route: 'user/enrolledcourse',
      id: 'EnrolledCourse',
    },
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.navSlide();
  }

  navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      navLinks.forEach((link, index) => {
        if ((link as HTMLElement).style.animation) {
          (link as HTMLElement).style.animation = '';
        } else {
          (
            link as HTMLElement
          ).style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
      burger.classList.toggle('toggle');
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    
    this.router.navigate(['/login']);
  }
}
