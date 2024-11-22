using MongoDB.Driver;
using Projeto.Models;
using Microsoft.Extensions.Configuration;

namespace Projeto.Services
{
    public class MongoDbService
    {
        private readonly IMongoCollection<ConsumptionModel> _collection;

        public MongoDbService(IConfiguration configuration)
        {
            var client = new MongoClient(configuration["MongoDB:ConnectionString"]);
            var database = client.GetDatabase(configuration["MongoDB:DatabaseName"]);
            _collection = database.GetCollection<ConsumptionModel>("Consumptions");
        }

        public async Task InsertConsumptionAsync(ConsumptionModel data)
        {
            await _collection.InsertOneAsync(data);
        }

        public async Task<List<ConsumptionModel>> GetConsumptionsAsync()
        {
            return await _collection.Find(_ => true).ToListAsync();
        }
    }
}
