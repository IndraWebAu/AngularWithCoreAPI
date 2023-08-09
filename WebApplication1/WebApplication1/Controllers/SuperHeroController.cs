using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        private readonly DataContext _context;
        public SuperHeroController(DataContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes() =>
            Ok(await _context.SuperHeroes.ToListAsync());
    }
}
