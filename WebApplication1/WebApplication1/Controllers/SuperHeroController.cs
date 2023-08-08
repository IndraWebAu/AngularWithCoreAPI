using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes()
        {
            return new List<SuperHero>() {
                new SuperHero {Id=1, Name="Batman", FirstName="Danny", LastName="Thompson", Place="Testville"  },
            new SuperHero {Id=2, Name="Robinhood", FirstName="Robin", LastName="Hood", Place="Forest"  }

            };
        }
    }
}
