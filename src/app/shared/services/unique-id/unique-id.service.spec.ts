
import { TestBed } from '@angular/core/testing';
import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {


  let service: UniqueIdService;
  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(UniqueIdService);
    service = new UniqueIdService();
  });


  it(`#${UniqueIdService.prototype.generateUniqueIdWidthPrefix.name}
  should generate id when called with prefix`, () => {

    const id = service.generateUniqueIdWidthPrefix('app');
    expect(id.startsWith('app')).toBeTrue();

  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWidthPrefix.name}
  should not genereate duplicate Ids when called multiples times`, () => {

    // const firstId = service.generateUniqueIdWidthPrefix('app');
    // const secondId = service.generateUniqueIdWidthPrefix('app');
    // expect(firstId).not.toBe(secondId);

    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWidthPrefix('app'))
    }
    expect(ids.size).toBe(50);

  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
  should return the numeber of generateIds when called`,
    () => {
      service.generateUniqueIdWidthPrefix('app');
      service.generateUniqueIdWidthPrefix('app');
      expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    });



  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
  should throw when called with empty`,
    () => {

      const emptyValues = [null, undefined, '', '0', '1'];
      emptyValues.forEach(emptyValue => {
        expect(() => service.generateUniqueIdWidthPrefix(emptyValue))
          .withContext(`Empty value: ${emptyValue}`)
          .toThrow();
      });

    });



  //   let service: UniqueIdService;
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(UniqueIdService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
