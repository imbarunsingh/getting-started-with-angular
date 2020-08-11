import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [CapitalizePipe],
  imports: [CommonModule],
  exports: [CapitalizePipe] // This is like making CapitalizePipe public so that it can be used elsewhere 
})
export class SharedModule {
  
 }
