import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
 import {MatButtonModule} from '@angular/material/button';
 import { MatToolbarModule } from '@angular/material/toolbar'; 
 import {MatIconModule} from '@angular/material/icon';
 import { FlexLayoutModule } from '@angular/flex-layout';
 import { MatDividerModule } from '@angular/material/divider';
 import {MatMenuModule} from '@angular/material/menu';
import {MatListModule } from '@angular/material/list';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
     MatMenuModule,
     MatListModule,
     FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
