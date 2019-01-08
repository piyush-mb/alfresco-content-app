import { NgModule } from '@angular/core';
import { ExtensionService, ExtensionsModule } from '@alfresco/adf-extensions';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';
import { EffectsModule } from '@ngrx/effects';
import { UploadFileComponent } from './dialogs';
import { ExtensionEffects } from './effects';

@NgModule({
  imports: [
    ExtensionsModule,
    FlexLayoutModule,
    CoreModule.forChild(),
    ContentModule.forChild(),
    EffectsModule.forFeature([ ExtensionEffects ])
  ],
  declarations: [
    UploadFileComponent
  ],
  entryComponents: [
    UploadFileComponent
  ],
  exports: [
    UploadFileComponent
  ]
})
export class AgsExtensionModule {
  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'ags-extension.main.component': UploadFileComponent
    });
  }
}
