

//les Directive Attribut

import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";


@Directive({
  selector : '[appColor]',
})

export class ColorDirective implements OnInit {

  @HostListener('mouseenter', ['$event']) private inLigne(event : MouseEvent){
    console.log('event Mouse Entre: ', event.target);
    console.log("surLignageColor", this.surLignageColor);

    this.el.nativeElement.style.color = this.surLignageColor?.color;
    this.el.nativeElement.style.backgroundColor = this.surLignageColor?.backgroundColor
    //this.el.nativeElement.style.backgroundColor = "green"
  }


  // @HostListener('mouseleave',["$event"]) private outLigne(event : MouseEvent){
  //   console.log("Event mouse Leave", event.target);

  //   this.el.nativeElement.style = "none"
  // }

  // @HostListener('window:click', ["$event"]) private windowClick(event : any){
  //   console.log("Window Click",event.target);

  // }

  // @HostListener('window:keydown.enter', ["$event"]) private windowKeyPress(event : any){
  //   console.log("Window Key Down enter",event.target);
  // }


  // @Input() @HostBinding('class') public class : any;


  // @HostBinding('role') private role : any;

  // //ajouter attribut role dans l'hote
  // @HostBinding('attr.role') private roleAttr : any;

  // //initialiser les style background a un color specifier dans l'ngOnInit
  // @HostBinding('style.backgroundColor') public backgroudColor : string | undefined;


  // // ajouter la classe active lorsque variable estActive vaut true
  // @HostBinding('class.active') private estActive : boolean | undefined


  @Input("appColor") public surLignageColor? : {
    color: string;
    backgroundColor: string;
  }


  // @HostBinding('style.backgroundColor') color?:string;

  // @Input() colorSurLignage?: string;

  // @HostListener('mouseenter') onMouseEnter(){
  //   this.color = this.colorSurLignage
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.color = ""
  // }



  constructor(private el : ElementRef<any>) {}

  ngOnInit(): void {
    // console.log(this.class);
    // this.role = "admin"
    // this.backgroudColor = "yellow",
    // this.estActive = true
    // console.log('estActive', this.estActive);
  }
}
