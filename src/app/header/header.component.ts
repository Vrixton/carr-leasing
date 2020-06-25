import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuOpen: boolean = false;
  @HostListener('window:scroll', ['$event'])
  activeMenu($event: Event) {
    let scrollOffset = event.srcElement as HTMLInputElement;
    let value = scrollOffset.children[0].scrollTop;
    if (value > 12) {
      document.getElementById('header').classList.add('dark');
    }
    if (value < 12) {
      document.getElementById('header').classList.remove('dark');
    }
  }

  scroll(el) {
    document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
  }
  closeMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
