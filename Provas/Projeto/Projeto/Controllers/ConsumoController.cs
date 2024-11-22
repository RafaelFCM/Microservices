using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Projeto.Models;
using Projeto.Services;

namespace Projeto.Controllers
{
    [ApiController]
    [Route("consumo")]
    public class ConsumoController : ControllerBase
    {
        private readonly MongoDbService _mongoDbService;
        private readonly RedisCacheService _redisCacheService;

        public ConsumoController(MongoDbService mongoDbService, RedisCacheService redisCacheService)
        {
            _mongoDbService = mongoDbService;
            _redisCacheService = redisCacheService;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterConsumption([FromBody] ConsumptionModel data)
        {
            if (data == null)
                return BadRequest("Invalid data.");

            data.Id = Guid.NewGuid();
            data.Timestamp = DateTime.UtcNow;

            await _mongoDbService.InsertConsumptionAsync(data);
            return Created($"consumo/{data.Id}", data);
        }

        [HttpGet]
        public async Task<IActionResult> GetConsumptions()
        {
            var cacheKey = "consumptions";
            var cachedData = await _redisCacheService.GetCacheAsync(cacheKey);

            if (!string.IsNullOrEmpty(cachedData))
                return Ok(cachedData);

            var consumptions = await _mongoDbService.GetConsumptionsAsync();

            if (!consumptions.Any())
                return NotFound("No consumption data available.");

            var serializedData = JsonConvert.SerializeObject(consumptions);
            await _redisCacheService.SetCacheAsync(cacheKey, serializedData, TimeSpan.FromMinutes(5));
            return Ok(consumptions);
        }
    }

}
