import { NbTooltipModule } from '@nebular/theme';
import { NbSearchModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbSidebarModule } from '@nebular/theme';
import { NbContextMenuModule } from '@nebular/theme';
import { NbUserModule } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';
import { NbActionsModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbIconModule,
    NbUserModule,
    NbContextMenuModule,
    NbSidebarModule,
    NbListModule,
    NbSearchModule,
    NbTooltipModule,
  ],
})
export class NebularModule {}
