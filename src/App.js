import Greeting from './components/greeting';

function App() {

  const styles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10%"
  }

  return (
    <div style={styles}>
      <Greeting />
    </div>
  );
}

export default App;
