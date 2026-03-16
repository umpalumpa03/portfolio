import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  public readonly viewProjects = output<void>();

  public downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/docs/Ucha_Sephiskveradze_CV.pdf';
    link.download = 'Ucha_Sephiskveradze_CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
