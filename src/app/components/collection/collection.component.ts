import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  private allcollection = [];
  oneitem = new Object()
  private allimgs = []
  constructor(private cs: CollectionService) { 
    let refs = {
      modalEdicion: {
        open: function() { ;
        },
        close:function() { ;
                          
        }
      }
    };
  }

  ngOnInit() {
    this.collectAll()
  }

  openModal(i){
    this.cs.viewMore(i).subscribe((data:any)=>{
      // this.oneitem = data.description;
      // this.oneitem.
      this.oneitem = {
        description: data.description,
        price: data.price,
        title: data.product_name,
        image: data.img
      }
      console.log(this.oneitem)
    })
    let modal = document.getElementById('modalEdicion')
    modal.classList.add('is-active')
    console.log('clicked', i)
  }

  closeModal(){
    this.oneitem = ""
    document.getElementById('modalEdicion').classList.remove('is-active')
    // let modal = document.getElementById('modalEdicion')
    // modal.classList.add('is-active')
    // console.log('clicked')
  }

  collectAll(){
    this.cs.getCollections().subscribe((data:any)=>{
      this.allcollection = data
      console.log(this.allcollection)
    })
  }
}
