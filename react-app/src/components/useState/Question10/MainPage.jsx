import React, {useState, useEffect} from 'react';

const countryCityMap = {
    India: ["Delhi", "Mumbai", "Bangalore"],
  USA: ["New York", "Los Angeles", "Chicago"],
  UK: ["London", "Manchester", "Birmingham"],
}
const MainPage = () => {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if(!country) {
            setCities([]);
            setCity("");
            return;
        }

        setCities(countryCityMap[country]);
        setCity("");
    }, [country]);

    return (
        <div>
          <h1>Dependent Dropdown</h1>
    
          {/* Country Dropdown */}
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            {Object.keys(countryCityMap).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
    
          {/* City Dropdown */}
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={!cities.length}
          >
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      );
    };

export default MainPage;