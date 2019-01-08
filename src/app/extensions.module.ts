import { NgModule } from '@angular/core';
import { AgsExtensionModule } from 'ags-extension';

// Main entry point for external extensions only.
// For any application-specific code use CoreExtensionsModule instead.

@NgModule({
  imports: [
    AgsExtensionModule
  ]
})
export class AppExtensionsModule {}
