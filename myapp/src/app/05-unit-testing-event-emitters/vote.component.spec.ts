import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise vote changed event when upvoted', () => {
    let totalVotes = null
    component.voteChanged.subscribe(emitted => totalVotes = emitted)

    component.upVote()

    expect(totalVotes).not.toBeNull()
    expect(totalVotes).toBe(1)
  });
});