import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { About } from "./components/about/about";
import { Education } from "./components/education/education";
import { Publications } from "./components/publications/publications";
import { Social } from "./components/social/social";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, About, Education, Publications, Social],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anis-web');
}
