import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-navigation-bar',
  templateUrl: './admin-navigation-bar.component.html',
  styleUrls: ['./admin-navigation-bar.component.css'],
})
export class AdminNavigationBar implements AfterViewInit {
  links = [
    { name: 'Academy', route: '/admin/institute', id: 'Academy' },
    {
      name: 'Course',
      route: '/admin/course/',
      id: 'Course',
    },
    {
      name: 'Students',
      route: '/admin/students',
      id: 'Students',
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
