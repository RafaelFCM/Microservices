using Xunit;
using Moq;
using Projeto.Services;
using StackExchange.Redis;
using System.Threading.Tasks;

public class RedisCacheServiceTests
{
    private readonly RedisCacheService _service;
    private readonly Mock<IConnectionMultiplexer> _redisMock;

    public RedisCacheServiceTests()
    {
        _redisMock = new Mock<IConnectionMultiplexer>();
        _service = new RedisCacheService(new Mock<Microsoft.Extensions.Configuration.IConfiguration>().Object);
    }

    [Fact]
    public async Task SetCacheAsync_SavesDataSuccessfully()
    {
        var dbMock = new Mock<IDatabase>();
        _redisMock.Setup(x => x.GetDatabase(It.IsAny<int>(), It.IsAny<object>())).Returns(dbMock.Object);

        await _service.SetCacheAsync("key", "value", System.TimeSpan.FromMinutes(5));

        dbMock.Verify(db => db.StringSetAsync("key", "value", System.TimeSpan.FromMinutes(5), It.IsAny<When>(), It.IsAny<CommandFlags>()), Times.Once);
    }
}
