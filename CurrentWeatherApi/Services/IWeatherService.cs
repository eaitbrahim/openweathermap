using CurrentWeatherApi.Data;

namespace CurrentWeatherApi.Services
{
  public interface IWeatherService
    {
        Task<OpenWeatherResponse> GetCurrentWeather(string queryString);
    }
}