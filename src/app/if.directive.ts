import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AuthService } from './auth.service';




//les directive Structurel
@Directive({
  selector: '[appIf]',
})
export class IfDirective implements OnInit, OnDestroy {

  private subscription?: Subscription;
  @Input('appIf') role?:string

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService : AuthService
  ) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  ngOnInit() {
    console.log(this.role);

    this.subscription = this.authService.user
    .pipe(tap(()=> this.viewContainer.clear()))
    .subscribe(user=>{
      if(user.role===this.role){
        this.viewContainer.createEmbeddedView(this.templateRef)
      }
    })
  }
}
