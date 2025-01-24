import MatchesUpdate from "../primary/MatchesUpdate";
import NewMatchForm from "../primary/NewMatchForm";

function NewMatchInput() {
  return (
    <div>
      <NewMatchForm></NewMatchForm>
      <MatchesUpdate></MatchesUpdate>
    </div>
  );
}

export default NewMatchInput;
