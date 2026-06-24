export default function WeatherDetails({ data }) {

  if (!data) return <p>Loading...</p>;

  return (
    <div className="details">
      <div>Temp: {data.temperature}°C</div>
      <div>Wind: {data.windspeed} km/h</div>
      <div>Direction: {data.winddirection}°</div>
    </div>
  );
}