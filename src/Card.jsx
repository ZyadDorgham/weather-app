export default function WeatherCard({ data }) {

  if (!data) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>{data.city}</h2>
      <h1>{data.temperature}°C</h1>
      <p>{data.description}</p>
    </div>
  );
}