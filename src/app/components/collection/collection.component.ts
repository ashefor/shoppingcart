import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  private allcollection = [];
  private allimgs = []
  constructor(private cs: CollectionService) { }

  ngOnInit() {
    this.collectAll()
  }

  collectAll(){
    this.cs.getCollections().subscribe((data:any)=>{
      this.allcollection = data
      console.log(this.allcollection)
    })
  }
}
