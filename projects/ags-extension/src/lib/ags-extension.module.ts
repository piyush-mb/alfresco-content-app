import { NgModule } from '@angular/core';
import { ExtensionService, ExtensionsModule } from '@alfresco/adf-extensions';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';
import { EffectsModule } from '@ngrx/effects';
import { UploadFileComponent } from './dialogs';
import { ExtensionEffects } from './effects';
import { RuleContext, RuleParameter } from '@alfresco/adf-extensions';

@NgModule({
  imports: [
    ExtensionsModule,
    FlexLayoutModule,
    CoreModule.forChild(),
    ContentModule.forChild(),
    EffectsModule.forFeature([ExtensionEffects])
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

    extensions.setEvaluators({
      "my-fn": rulesfunction

    })
  }
}


export function rulesfunction(
  context: RuleContext,
  ...args: RuleParameter[]
): boolean {
  console.log(...args);
  return context.selection.first.entry.isFile;

}

export function hasLibraryRole(
  context: RuleContext,
  ...args: RuleParameter[]
) {
  // const library = context.selection.library;
  console.log(context);

  // return true;
  //  return library ? !!(library.entry && library.entry.role) : false;
}