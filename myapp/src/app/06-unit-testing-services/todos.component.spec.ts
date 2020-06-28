import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

// RxJS is a library for composing asynchronous and event-based programs by using observable sequences. 
// It provides one core type, the Observable, 
import { from, empty, Observable } from 'rxjs'; // with this we can create an observable from an array

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService

  beforeEach(() => {
    service = new TodoService(null)
    component = new TodosComponent(service)
  });

  it('should set todos property with the items return from the server', () => {
    let expectedTodos = ['foo', 'bar', 'baz']

    // SpyOn puts a spy on a method on a class
    // the first arg is the object to put the spy on
    // the second arg is the name of the method on that object to spyon
    // callFake needs the same function signature as the method under test
    spyOn(service, 'getTodos').and.callFake(
      () => { return from([['foo', 'bar', 'baz']]) } // this is the fake getTodos function used by the unit test
    )

    component.ngOnInit()
    expect(component.todos.length).toBe(3)
    expect(component.todos).toEqual(expectedTodos)

  });

  it('should call the server to save when a new todo item is added', () => {
  
    let spy = spyOn(service, 'add').and.callFake(
      () => { return empty()} // this is the fake add function, it just returns an empty observable
    )

    component.add()
    expect(spy).toHaveBeenCalled()


  });

  it('should add the new todo returned from the server', () => {

    let todo = {id : 1}
  
    spyOn(service, 'add').and.returnValue(from([todo]))

    component.add()
   
    console.log(component.todos)
    console.log(component.todos.indexOf(todo))
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1)

  });
});