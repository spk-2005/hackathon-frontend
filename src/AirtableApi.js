const AirtableAPI = () => {
    const name = sessionStorage.getItem('usname');  // Get the name from sessionStorage
    const [stepData, setStepData] = useState([]);
    const [loading, setLoading] = useState(true);  // Loading state
  
    useEffect(() => {
      const fetchStepData = async () => {
        const url = `https://api.airtable.com/v0/appfQNmAs6vTN5iAn/walking`;
        const config = {
          headers: {
            Authorization: `Bearer pataRZ3DHSFEkG4y5.990679aa58294bb7876ba2b2450d1c3b79ef7c49cf4754557f69d0e5e07e2061`,
          },
        };
  
        try {
          const response = await axios.get(url, config);
          const records = response.data.records;
  
          // Get the current date and the date for 7 days ago
          const currentDate = new Date();
          const lastWeekDate = new Date(currentDate);
          lastWeekDate.setDate(currentDate.getDate() - 7);
  
          // Filter records based on the name and date range (last 7 days)
          const filteredData = records.filter((record) => {
            const recordDate = new Date(record.fields.date);
            return (
              record.fields.name === name && recordDate >= lastWeekDate && recordDate <= currentDate
            );
          });
  
          // Format the filtered data
          const formattedData = filteredData.map((record) => ({
            day: new Date(record.fields.date).toLocaleDateString(),
            steps: record.fields.steps,
            name: record.fields.name,
            email: record.fields.email,
          }));
  
          setStepData(formattedData);
        } catch (error) {
          console.error('Error fetching data from Airtable:', error);
        } finally {
          setLoading(false);  // Set loading to false once data is fetched
        }
      };
  
      fetchStepData();
    }, [name]);
  
    if (loading) {
      return <p>Loading data...</p>;
    }
  
    return (
      <div>
        <h2>Walking Data for {name}</h2>
        {stepData.length === 0 ? (
          <p>No data available for the last week.</p>
        ) : (
          <ul>
            {stepData.map((data, index) => (
              <li key={index}>
                {data.day}: {data.steps} steps (Name: {data.name}, Email: {data.email})
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default AirtableAPI;
  