import { useEffect, useState } from "react";
import { getEnergyData } from "./utils/utils";
import { ItemList } from "./components/ItemList";
import { InputDate } from "./components/InputDate/InputDate";

function App() {
  const [energyData, setEnergyData] = useState(null);
  const [dates, setDates] = useState({ startDate: null, endDate: null, updated: null });

  useEffect(() => {
    if (dates.startDate && dates.endDate && dates.updated) {
      getEnergyData(dates.startDate, dates.endDate).then(resp => setEnergyData(resp));

    }
    if (!dates.startDate || !dates.endDate) {
      setEnergyData();
    }
  }, [dates]);


  return (
    <div className="App">
      <InputDate id="startDate" dates={dates} setDates={setDates} />
      <InputDate id="endDate" dates={dates} setDates={setDates} />
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
