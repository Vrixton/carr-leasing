import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuOpen: boolean = false;
  @Output() activeLanguage = new EventEmitter<string>();
  @HostListener('window:scroll', ['$event'])
  activeMenu($event: Event) {
    let scrollOffset = event.srcElement as HTMLInputElement;
    let value = scrollOffset.children[0].scrollTop;
    if (value > 1) {
      document.getElementById('header').classList.add('dark');
    }
    if (value < 1) {
      document.getElementById('header').classList.remove('dark');
    }
  }

  scroll(el) {
    document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
  }

  switchLanguage(e) {
    this.activeLanguage.emit(e.toElement.textContent);
  }

  closeMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
