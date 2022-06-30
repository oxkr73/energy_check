import { useEffect, useState } from "react";
import { queryApi } from "./utils/utils";
import { ItemList } from "./components/ItemList";

function App() {
  const [energyData, setEnergyData] = useState(null);
  async function getEnergyData() {
    try {
      const data = await queryApi("https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2022-06-01T00:00&end_date=2022-06-01T23:59&time_trunc=hour");
      setEnergyData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!energyData) {
      getEnergyData();
    }
  }, [energyData]);

  return (
    <div className="App">
      {
        energyData &&
        <div>
          <h1>{energyData.data.type}</h1>
          <ItemList props={energyData.included[0]} />
        </div>
      }

      <pre>{JSON.stringify(energyData, null, 2)}</pre>
    </div>
  );
}

export default App;
