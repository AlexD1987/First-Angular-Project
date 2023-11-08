import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];
  headlines = ['My First Halloween Website', 'Shocks you to the core', 'Creppy Outstanding']
  currentImage = 0;
  showImage = true;


  ngOnInit() {
    this.slideImages();
  }


  slideImages() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 1);
    }, 8000);
  }


}
