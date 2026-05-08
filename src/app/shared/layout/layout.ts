import { Component } from '@angular/core';
import { Social } from '../../components/social/social';
import { Publications } from '../../components/publications/publications';
import { Education } from '../../components/education/education';
import { About } from '../../components/about/about';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer, About, Education, Publications, Contact, Social],
  templateUrl: './layout.html',
})
export class Layout {

}
