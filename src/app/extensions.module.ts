import { NgModule } from '@angular/core';
import { CustomActionsModule } from '@custom-actions';

// Main entry point for external extensions only.
// For any application-specific code use CoreExtensionsModule instead.

@NgModule({
  imports: [
    CustomActionsModule
  ]
})
export class AppExtensionsModule {}
