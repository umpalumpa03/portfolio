import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Code2, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  public readonly currentYear: number = new Date().getFullYear();
  public readonly CodeIcon = Code2;
}
