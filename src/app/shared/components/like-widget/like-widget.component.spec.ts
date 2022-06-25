import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetModule } from './like-widget.module';


describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [FontAwesomeModule],
      // declarations: [LikeWidgetComponent],
      // providers: [UniqueIdService]
      imports: [LikeWidgetModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges(); // dectetar as alterações do component
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
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  // it(`Should NOT auto-generate ID during ngOnInit when (@input id
  //   ) property is assinged1`, () => {
  //   component = fixture.componentInstance;
  //   component.id = '';
  //   // fixture.detectChanges();
  //   console.log(component.id)
  //   expect(component.id).toBe('like-widget');
  // });



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


// describe(LikeWidgetComponent.name, () => {
//   let fixture: ComponentFixture<LikeWidgetComponent> = null;
//   let component: LikeWidgetComponent = null;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [LikeWidgetModule]
//     }).compileComponents();

//     fixture = TestBed.createComponent(LikeWidgetComponent);
//     component = fixture.componentInstance;
//   });

//   it('Should create component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
//     fixture.detectChanges();
//     expect(component.id).toBeTruthy();
//   });

//   it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
//     const someId = 'someId';
//     component.id = someId;
//     fixture.detectChanges();
//     expect(component.id).toBe(someId);
//   });

//   it(`#${LikeWidgetComponent.prototype.like.name}
//     should trigger (@Output liked) when called`, () => {
//       spyOn(component.liked, 'emit');
//       fixture.detectChanges();
//       component.like();
//       expect(component.liked.emit).toHaveBeenCalled();
//   });
// });
