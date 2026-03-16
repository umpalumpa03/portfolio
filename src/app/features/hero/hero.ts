import { ChangeDetectionStrategy, Component, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  public readonly viewProjects = output<void>();

  public downloadCV(): void {
    console.log('Download CV clicked');
  }
}
