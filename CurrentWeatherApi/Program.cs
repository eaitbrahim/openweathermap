using AutoMapper;
using CurrentWeatherApi.Dtos;
using CurrentWeatherApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails();
builder.Services.AddHttpClient<IWeatherService, WeatherService>(client => 
{
    client.BaseAddress = new Uri(builder.Configuration["OpenWeatherBaseUrl"]);
});
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();
app.UseExceptionHandler();
app.UseStatusCodePages();

app.MapGet("api/v1/currentWeatherByCity/{city}",  async (string city, IMapper mapper, IWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"q={city}&appid={builder.Configuration["OpenWeatherId"]}");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});

app.MapGet("api/v1/currentWeatherByZip/{zip}",  async (string zip, IMapper mapper, IWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"zip={zip}&appid={builder.Configuration["OpenWeatherId"]}");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});

app.MapGet("api/v1/currentWeatherByCoord/{lat}/{lon}",  async (decimal lat, decimal lon, IMapper mapper, IWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"lat={lat}&lon={lon}&appid={builder.Configuration["OpenWeatherId"]}");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});


app.Run();
