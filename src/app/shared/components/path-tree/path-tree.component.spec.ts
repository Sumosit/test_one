import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {PathTreeComponent} from './path-tree.component';

describe('PathTreeComponent', () => {
  let component: PathTreeComponent;
  let fixture: ComponentFixture<PathTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [PathTreeComponent]
    });
    fixture = TestBed.createComponent(PathTreeComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`pathTree has default value`, () => {
    expect(component.pathTree).toEqual([{
      name: 'Default empty'
    }]);
  });
});
