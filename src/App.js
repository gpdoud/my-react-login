
function App() {
  return (
    <div>
      <Label id="lbl" content="My First Label" />
      <span> | </span>
      <Input id="inp" type="text" />
      <span> | </span>
      <Button id="btn" text="Click Me!" onClick={ButtonClick} />
    </div>
  );
}
function ButtonClick(e) {
  let inp = document.getElementById("inp").value;
  console.debug("Inp:", inp);
}
function Input(props) {
  return (
    <input id={props.id} type={props.type} />
  )
}
function Label(props) {
  return (
    <label id={props.id}>{props.content}</label>
  )
}
function Button(props) {
  return (
    <button id={props.id} onClick={props.onClick}>{props.text}</button>
  )
}

export default App;
