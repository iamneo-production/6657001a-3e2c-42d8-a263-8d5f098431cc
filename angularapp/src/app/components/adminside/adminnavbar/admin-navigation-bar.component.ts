import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-navigation-bar',
  templateUrl: './admin-navigation-bar.component.html',
  styleUrls: ['./admin-navigation-bar.component.css'],
})
export class AdminNavigationBar implements AfterViewInit {
  links = [
    { name: 'Academy', route: '/academy', id: 'Academy' },
    {
      name: 'Course',
      route: '/course',
      id: 'Course',
    },
    {
      name: 'Students',
      route: '/students',
      id: 'Students',
    },
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.navSlide();
  }

  navSlide() {
    const burger = document.querySelector('.burger') as HTMLElement;
    const nav = document.querySelector('.nav-links') as HTMLElement;
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
    // Perform logout actions
    this.router.navigate(['/login']);
  }
}
