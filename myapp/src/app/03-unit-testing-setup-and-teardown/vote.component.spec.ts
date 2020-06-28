import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  let component: VoteComponent

  beforeAll(() => { }) // runs once at the start
  afterAll(() => { }) // runs once at the end

  beforeEach(() => { // set up
    component = new VoteComponent
  })

  afterEach(() => { // tear down
  })

  it('should increment total votes when up voted', () => {
    component.upVote()

    expect(component.totalVotes).toBe(1)
  });

  it('should decrement total votes when down voted', () => {
    component.downVote()

    expect(component.totalVotes).toBe(-1)
  });
});