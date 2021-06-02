import { Component } from '@angular/core';

import { Phone, PhoneData } from '../core/phone/phone.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html',
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(phone: Phone, activatedRoute: ActivatedRoute) {
   phone.get(activatedRoute.snapshot.paramMap.get('phoneId'))
      .subscribe((p: PhoneData) => {
        this.phone = p;
        this.setImage(p.images[0]);
      });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
