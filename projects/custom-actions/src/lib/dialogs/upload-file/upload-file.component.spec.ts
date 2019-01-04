import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileComponent } from './upload-file.component';
import { setupTestBed } from '@alfresco/adf-core';

describe('UploadFileComponent', () => {
  let component: UploadFileComponent;
  let fixture: ComponentFixture<UploadFileComponent>;

  setupTestBed({
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

    // it('should update the table when files dragged or uploaded', () => {
    //   const fakeUpload = new UploadFilesEvent(
    //     [
    //       { file: {lastModified: null, name: 'test.pdf'} }
    //     ],
    //     null,
    //     null
    //   );
      // spyOn(alfrescoApi.nodesApi, 'lockNode').and.returnValue(Promise.resolve({}));
      //
      // component.submit();
      //
      // expect(alfrescoApi.nodesApi.lockNode).toHaveBeenCalledWith(
      //   'node-id',
      //   new NodeBodyLock({
      //     'timeToExpire': 60,
      //     'type': 'ALLOW_OWNER_CHANGES',
      //     'lifetime': 'PERSISTENT'
      //   })
      // );
    // });
    //
    // it('should submit the form and unlock the node', () => {
    //   spyOn(alfrescoApi.nodesApi, 'unlockNode').and.returnValue(Promise.resolve({}));
    //
    //   component.form.controls['isLocked'].setValue(false);
    //   component.submit();
    //
    //   expect(alfrescoApi.nodesApi.unlockNode).toHaveBeenCalledWith('node-id');
    // });
    //
    // it('should call dialog to close with form data when submit is successfully', fakeAsync(() => {
    //   const node = { entry: {} };
    //   spyOn(alfrescoApi.nodesApi, 'lockNode').and.returnValue(Promise.resolve(node));
    //
    //   component.submit();
    //   tick();
    //   fixture.detectChanges();
    //
    //   expect(dialogRef.close).toHaveBeenCalledWith(node.entry);
    // }));
    //
    // it('should call onError if submit fails', fakeAsync(() => {
    //   spyOn(alfrescoApi.nodesApi, 'lockNode').and.returnValue(Promise.reject('error'));
    //   spyOn(component.data, 'onError');
    //
    //   component.submit();
    //   tick();
    //   fixture.detectChanges();
    //
    //   expect(component.data.onError).toHaveBeenCalled();
    // }));
  });
});
