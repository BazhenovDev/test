import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {treeNodesType} from '../../types/tree-nodes.type';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'tree-component',
  imports: [CommonModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent {

  @Input() tree: treeNodesType;
  @ViewChild('treeBtn')
  private treeButton!: ElementRef;

  constructor() {
    this.tree = {
      id: 0,
      title: '',
      is_deleted: false,
      children: []
    }
  }

  showChildren: boolean = false;

  clickOnButton() {
    this.showChildren = !this.showChildren;
    let rotate: string = this.showChildren ? '-180deg' : '0deg';
    this.treeButton.nativeElement.style.transform = `rotate(${rotate})`;
  }
}
