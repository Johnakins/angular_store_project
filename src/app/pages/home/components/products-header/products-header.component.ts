import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: "./products-header.component.html"
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnCountChange = new EventEmitter<number>()
  sort = "desc";
  itemsShowCount = 12
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort
  }
  onItemUpdated(count: number): void {
    this.itemsShowCount = count
  }
  onColumnUpdated(colsNum: number): void {
    this.columnCountChange.emit(colsNum)
  }
  
}
