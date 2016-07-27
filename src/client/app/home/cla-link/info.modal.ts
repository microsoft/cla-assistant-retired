import { Component, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'info-modal',
  directives: [MODAL_DIRECTIVES],
  template: `
    <modal class="howto" #infoModal>
      <modal-body>
        <div (click)="infoModal.close()" class="fa fa-times close-button"></div>
        <div class="free-space">
          <h4>How can I create a CLA Gist?</h4>
          <div>
            At <a href="http://gist.github.com" target="_blank" class="text-primary">gist.github.com</a>
            enter a file name and paste the content of your CLA.
          </div>
        </div>
        <div class="free-space">
          <h4>What happens if I edit the Gist file?</h4>
          <div>  
            CLA assistant will always show you the current version of your Gist file.
            Users who accept your CLA sign the current version.
            If you change the content of your CLA, each contributor has to accept the new version when they create a new pull request. 
          </div>
        </div>
      </modal-body>
    </modal>
  `
})
export class InfoModal {
  @ViewChild('infoModal')
  private modal: ModalComponent;

  public open() {
    this.modal.open();
  }
}
