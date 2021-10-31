import './App.css';
import GlobalSales from './containers/GlobalSales';

function App() {
  return (
    <main className="main">
      <div className="sales">
        <h1 className="heading">Global Sales</h1>
        <section className="sales-filter">
          <input className="input input-company" type="text" placeholder="Company" />
          <label className="label label-sales" for="minimum-sales">Minimum Sales ($)</label>
          <input className="input input-sales" type="number" id="minimum-sales" />
          <button className="button button-sales">FILTER RESULTS</button>
        </section>
        <GlobalSales />
      </div>
    </main>
  );
}

export default App;
