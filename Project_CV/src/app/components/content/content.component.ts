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
    this.experiences = [
      {
        title: 'Founder',
        company: 'Tatwerat',
        fromDate: {
          year: '2009',
          month: 'Jun'
        },
        toDate: 'Present',
        // tslint:disable-next-line:max-line-length
        description: 'Started as a web designer, UI developer and windows applications developer with VB6 and right now we working with new technologies and framework like WordPress using php , javascript libraries (jQuery, Angular, Node.JS) and mobile cross platforms.'
      },
      {
        title: 'UI/UX Designer and Frontend Developer',
        company: 'Tawrny',
        fromDate: {
          year: '2013',
          month: 'Sep'
        },
        toDate: 'Jun 2015',
        // tslint:disable-next-line:max-line-length
        description: 'Work as UI/UX designer and frontend developer using WordPress development to create websites and build mobile applications design.'
      },
      {
        title: 'UI/UX Designer and Frontend Developer',
        company: 'Naba Software',
        fromDate: {
          year: '2015',
          month: 'Nov'
        },
        toDate: 'May 2018',
        // tslint:disable-next-line:max-line-length
        description: 'Work as UI/UX consultant for windows applications and web , mobile applications designer plus WordPress and php developer.'
      },
      {
        title: 'Full Stack Developer and UI/UX Team Leader',
        company: 'Effective Value Solutions',
        fromDate: {
          year: '2018',
          month: 'Sep'
        },
        toDate: 'Present',
        // tslint:disable-next-line:max-line-length
        description: 'We working on build fully ERP system on python frappe framework, I manage user interface and user experience by using PHP for frontend development use frameworks like Laravel and integration with python API.'
      }
    ];
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

    ]
    // this.get_portfolio();
  }

  // get_portfolio() {
  //   this.behance.getPortfolio().subscribe((response) => {
  //     this.portfolio = (response) ? response['projects'] : response;;
  //     console.log("this.portfolio", this.portfolio)
  //   });
  // }
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
