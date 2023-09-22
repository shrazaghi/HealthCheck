using Microsoft.AspNetCore.Mvc;

namespace HealthCheckAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TemperatureController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public decimal CelToFah(decimal celcius)
        {
            return celcius * 9 / 5 + 32;
        }

        [HttpGet]
        public decimal FahToCel(decimal fahrenheit)
        {
            return (fahrenheit - 32) * 5 / 9;
        }
    }
}
