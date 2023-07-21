import { Component, OnInit } from '@angular/core';
import { Institute } from './institute';
import { InstituteService } from 'src/app/services/institute.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.css']
})
export class InstitutesComponent implements OnInit{

  institutes!: Institute[];
  searchText !: string;

  constructor(private router: Router, private instituteService: InstituteService) {

  }

  ngOnInit(): void {
    this.getInstitutes();
  }

  getInstitutes() {
    this.instituteService.viewInstitutes().subscribe(data => {
      this.institutes = data;
    });
  }

  editInstitute(instituteId: number) {
    this.router.navigate(['admin/editInstitute', instituteId]);

  }

  deleteInstitute(instituteId: number) {
    this.instituteService.deleteInstitute(instituteId).subscribe(data => {
      this.getInstitutes();
    });
  }
  

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  filterInstitutes(): Institute[] {
    if (!this.searchText || this.searchText.trim() === '') {
      return this.institutes;
    }

    const searchLowerCase = this.searchText.toLowerCase();
    return this.institutes.filter((institute: Institute) => {
      const nameLowerCase = institute.instituteName.toLowerCase();
      const locationLowerCase = institute.instituteAddress.toLowerCase();
      return nameLowerCase.includes(searchLowerCase) || locationLowerCase.includes(searchLowerCase);
    });
  }
}
