namespace CurrentWeatherApi.Data
{
  public class OpenWeatherResponse
    {
        public string Name { get; set; }

        public IEnumerable<Weather> Weather { get; set; }

        public Main Main { get; set; }
    }
}