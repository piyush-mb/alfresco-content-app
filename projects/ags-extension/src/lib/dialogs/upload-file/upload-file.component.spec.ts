import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileComponent } from './upload-file.component';
import { CoreModule, FileModel, setupTestBed } from '@alfresco/adf-core';
import { ContentModule, UploadFilesEvent } from '@alfresco/adf-content-services';


export function getFakeFile(name = "test.pdf", lastModified= 1534829090290, type = "application/pdf", size = 1024) {
  return {
    size: size,
    type: type,
    slice(start?: number, end?: number, contentType?: string): Blob {
      return undefined;
    },
    lastModified: lastModified,
    name: name
  };
}

describe('UploadFileComponent', () => {
  let component: UploadFileComponent;
  let fixture: ComponentFixture<UploadFileComponent>;

  setupTestBed({
    imports: [
      CoreModule,
      ContentModule
    ],
    declarations: [
      UploadFileComponent
    ]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });


  describe('Node lock dialog component', () => {

    beforeEach(() => {

      component.data = {
        node: {
          id: 'node-id',
          name: 'node-name',
          isFolder: true,
          properties: {
            ['cm:lockType']: 'WRITE_LOCK'
          }
        }
      };
      fixture.detectChanges();
    });

    it('should init dialog with form inputs', () => {
      expect(component.node.name).toBe('node-name');
      expect(component.node.id).toBe('node-id');
    });

    it('should initiate with empty table', () => {
      expect(component.tableData.getRows.length).toEqual(0);
    });

    it('should update the table when files dragged or uploaded', () => {
      const fakeUpload = new UploadFilesEvent(
        [
          new FileModel(getFakeFile() , null, null)
        ],
        null,
        null
      );

      component.onBeginUpload(fakeUpload);

      expect(component.currentEvent).toEqual(fakeUpload);
    });

  });
});
