import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-add-cart',
  templateUrl: './modal-add-cart.component.html',
  styleUrls: ['./modal-add-cart.component.css']
})
export class ModalAddCartComponent implements OnInit {

  @Input() products:Products[];
  prefUrlImage=`${environment.prefUrlImage}`;

  constructor() { }

  ngOnInit(): void {
  }

}
