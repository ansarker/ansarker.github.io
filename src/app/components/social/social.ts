import { Component } from '@angular/core';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { featherGithub, featherLinkedin } from '@ng-icons/feather-icons';
import { heroAcademicCapSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-social',
  imports: [NgIcon],
  templateUrl: './social.html',
  viewProviders: [provideIcons({ featherGithub, featherLinkedin, heroAcademicCapSolid })]
})
export class Social {
}
