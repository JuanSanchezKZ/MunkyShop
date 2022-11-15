import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.scss'],
})
export class CreateRestaurantComponent implements OnInit {
  constructor(private api: HttpservicesService) {}
  @ViewChild('fileInput') fileInput!: any;
  createRestaurantForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    products: new FormControl('', [Validators.required]),
    rating: new FormControl(null, [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  fileBlob: any;

  uploadFile(event: any) {
    const file = event.target.files[0];
    this.fileBlob = file;
  }

  onSubmit() {
    const formData = new FormData();
    const name = this.createRestaurantForm?.controls['name'].value;
    const address = this.createRestaurantForm?.controls['address'].value;
    const rating = this.createRestaurantForm?.controls['rating'].value;
    const products = this.createRestaurantForm?.controls['products'].value;
    formData.append('Name', name ? name : '');
    formData.append('Address', address ? address : '');
    formData.append('Rating', rating ? rating : '');
    formData.append('Products', products ? products : '');
    formData.append('Image', this.fileBlob);

    this.api.sendRestaurants(formData).subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}
}
