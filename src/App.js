import "./App.css";
import Header from "./component/Header";
import Contain from "./component/Contain";
import data from "./data";
function App() {
   const contain = data.map((item) => {
      return <Contain key={item.id} {...item} />;
   });
   return (
      <div className="App">
         <Header />
         {contain}
      </div>
   );
}

export default App;
