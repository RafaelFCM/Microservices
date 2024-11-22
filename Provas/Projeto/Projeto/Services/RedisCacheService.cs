using Microsoft.AspNetCore.Mvc;
using StackExchange.Redis;

namespace Projeto.Services
{
    public class RedisCacheService
    {
        private readonly ConnectionMultiplexer _redis;

        public RedisCacheService(IConfiguration configuration)
        {
            _redis = ConnectionMultiplexer.Connect(configuration["Redis:ConnectionString"]);
        }

        public async Task<string> GetCacheAsync(string key)
        {
            return await _redis.GetDatabase().StringGetAsync(key);
        }

        public async Task SetCacheAsync(string key, string value, TimeSpan expiration)
        {
            await _redis.GetDatabase().StringSetAsync(key, value, expiration);
        }
    }

}
