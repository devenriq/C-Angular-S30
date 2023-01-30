import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
import { collection } from 'firebase/firestore';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private fireStore: Firestore) { }

  // getProduct():Observable<Products[]>{
  //   const productRef = collection(this.fireStore, 'product')
  //   return collectionData(productRef, {idField:'id'}) as Observable<Products[]>
  // }
}
