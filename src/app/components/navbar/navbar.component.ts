import { Component, OnInit } from '@angular/core';0
import { Link } from 'src/app/types/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: Link[] = [];
  constructor() { 

  }

  ngOnInit(): void {
    this.links = [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'News & Articles', href: '/news-&-research' },
      { name: 'Contact', href: '/contact' },
    ];
  }

}
