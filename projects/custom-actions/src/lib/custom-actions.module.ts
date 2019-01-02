import { NgModule } from '@angular/core';
import { CustomActionsComponent } from './custom-actions.component';
import { ExtensionService, ExtensionsModule } from '@alfresco/adf-extensions';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';

@NgModule({
  imports: [
    ExtensionsModule,
    FlexLayoutModule,
    CoreModule.forChild(),
    ContentModule.forChild()
  ],
  declarations: [CustomActionsComponent],
  entryComponents: [ CustomActionsComponent ],
  exports: [CustomActionsComponent]
})
export class CustomActionsModule {
  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'custom-actions.main.component': CustomActionsComponent
    });
  }
}
