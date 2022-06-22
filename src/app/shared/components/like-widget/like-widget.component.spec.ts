import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule
      ],
      declarations: [LikeWidgetComponent],
      providers: [
        UniqueIdService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // dectetar as alterações do component
  });

  it('should create componente', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`Should NOT auto-generate ID during ngOnInit when (@input id
      ) property is assinged`, () => {

    component = fixture.componentInstance;
    expect(component.id).toBeTruthy();
  });


  it(`Should NOT auto-generate ID during ngOnInit when (@input id
    ) property is assinged`, () => {
    component = fixture.componentInstance;
    component.id = 'someId';
    expect(component.id).toBe('someId');
  });

  // it(`#${LikeWidgetComponent.prototype.like.name}
  //   Should trigger when called`, () => {
  //   fixture.detectChanges();
  //   component = fixture.componentInstance;
  //   component.liked.subscribe(() => {
  //     expect(true).toBeTrue();
  //   });
  //   component.like();
  // });

  //   it(`#${LikeWidgetComponent.prototype.like.name}
  //   Should trigger when called`, done => {
  //   fixture.detectChanges();
  //   component = fixture.componentInstance;
  //   component.liked.subscribe(() => {
  //     expect(true).toBeTrue();
  //     done();
  //   });
  //   component.like();
  // });


  it(`#${LikeWidgetComponent.prototype.like.name}
  Should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });



});
