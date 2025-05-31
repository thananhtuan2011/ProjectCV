import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehanceService } from '../../services/behance.service';
import { MatDialog } from '@angular/material/dialog';
import { PreviewVideoComponent } from '../preview-video/preview-video.component';
import { ModalService } from '../_model/modal.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {

  experiences: any[];
  portfolio: any;
  p = 1;
  urlactive: string;

  constructor(private dialog: MatDialog, private translate: TranslateService, private modalService: ModalService, private changeDetectorRefs: ChangeDetectorRef,) {
    this.translate.get('CV.experience').subscribe((data) => {
      this.experiences = data;
    });
    this.portfolio = [
      {
        id: 1,
        name: this.translate.instant('CV.name1'),
        url: "../../../assets/video/JeePlatform.mp4"
      },
      {
        id: 2,
        name: this.translate.instant('CV.name2'),
        url: "../../../assets/video/social.mp4"
      },

      {
        id: 3,
        name: "Mobile app",
        url: "../../../assets/video/video-mobile.mp4"
      },
      {
        id: 4,
        name: this.translate.instant('CV.name3'),
        url: "../../../assets/video/api.mp4"
      },
      {
        id: 5,
        name: this.translate.instant('CV.name4'),
        url: "../../../assets/video/callvideo.mp4"
      },
      {
        id: 6,
        name: this.translate.instant('CV.name5'),
        url: "../../../assets/video/git.mp4"
      },
      {
        id: 7,
        name: this.translate.instant('CV.name6'),
        url: "../../../assets/video/chat.mp4"
      },

    ]

  }


  openModal(id: string, url: string) {
    this.modalService.open(id);
    this.urlactive = url.toString();
  }


  closeModal(id: string) {
    this.modalService.close(id);
    this.urlactive = undefined
  }
  EventCloseOutSide() {
    this.modalService.eventCloseOutSide$.subscribe(res => {
      if (res && res == true) {
        this.urlactive = undefined
        this.changeDetectorRefs.detectChanges()
      }
    })
  }
  ngOnInit(): void {
    this.EventCloseOutSide()
  }

}
