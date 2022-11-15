import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: any;
  @Input('restaurantId') restaurantId!: number;
  addMenuForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  fileBlob: any;

  constructor(private api: HttpservicesService) {}

  uploadFile(event: any) {
    const file = event.target.files[0];
    this.fileBlob = file;
  }

  onSubmit() {
    console.log(this.addMenuForm);
    const formData = new FormData();
    const name = this.addMenuForm?.controls['name'].value;
    const description = this.addMenuForm?.controls['description'].value;
    const price = this.addMenuForm?.controls['price'].value;
    formData.append('Name', name ? name : '');
    formData.append('Description', description ? description : '');
    formData.append('RestaurantId', String(this.restaurantId));
    formData.append('Price', price ? price : '');
    formData.append('Image', this.fileBlob);

    this.api.sendMenu(formData).subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}
}
