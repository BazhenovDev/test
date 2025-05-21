import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TreeService} from "./services/tree.service";
import {treeNodesType} from "./types/tree-nodes.type";
import {TreeComponent} from "./components/tree/tree.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  treeNodes: treeNodesType[] = [];

  constructor(private treeService: TreeService) {}

  ngOnInit() {
    this.treeNodes = this.treeService.getTreeNodes();
  }

}
