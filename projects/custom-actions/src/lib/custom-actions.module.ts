import { NgModule } from '@angular/core';
import { ExtensionService, ExtensionsModule } from '@alfresco/adf-extensions';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';
import { EffectsModule } from '@ngrx/effects';
import * as Dialogs from './dialogs';
import { effects } from './effects';

export function getComponents(): any[] {
  return [
    Dialogs.UploadFileComponent,
  ]
}

@NgModule({
  imports: [
    ExtensionsModule,
    FlexLayoutModule,
    CoreModule.forChild(),
    ContentModule.forChild(),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    ...getComponents()
  ],
  entryComponents: [
    ...getComponents()
  ],
  exports: [
    ...getComponents()
  ]
})
export class CustomActionsModule {
  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'ags-extension.main.component': Dialogs.UploadFileComponent
    });
  }
}
