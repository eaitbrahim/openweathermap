using CurrentWeatherApi.Data;

namespace CurrentWeatherApi.Services
{
  public class WeatherService : IWeatherService
  {
    private readonly HttpClient _client;
    
    public WeatherService(HttpClient client)
    {
        _client = client;
    }

    public async Task<OpenWeatherResponse> GetCurrentWeather(string queryString)
    {
      return  await _client.GetFromJsonAsync<OpenWeatherResponse>($"/data/2.5/weather?{queryString}");
    }

  }
}