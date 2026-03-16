import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.html',
  styleUrl: './section-title.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitle {}
