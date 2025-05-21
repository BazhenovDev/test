import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[treeBtn]'
})
export class TreeBtnDirective {

  constructor(private el: ElementRef,private render: Renderer2) { }

  public showChildren: boolean = false;

  @HostListener('click')
  rotateOnClick() {
    this.showChildren = !this.showChildren;
    const rotate: string = this.showChildren ? '-180deg' : '0deg';
    this.render.setStyle(this.el.nativeElement, 'transform', `rotate(${rotate})`);
  }
}

// Пытался изначально сделать черед директиву, но в итоге сделал через обработчик события click и метода clickOnButton
// Т.к. нужен был доступ к переменной showChildren для отображения и скрытия в шаблоне дочерних элементов при клике
// А из директивы я его вытащить не могу
