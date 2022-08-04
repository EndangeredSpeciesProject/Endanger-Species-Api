export default function Spinner() {
  return (
    // would have liked to see the height: 300 managed in the css if it's not going to be change dynamically based on state/props
    <img className="gif" src={'/images/icons8-top-view-fish.gif'} style={{ height: '300px' }}/>
  );
}
