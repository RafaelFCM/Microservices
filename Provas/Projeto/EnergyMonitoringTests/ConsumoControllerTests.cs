using Xunit;
using Moq;
using Projeto.Controllers;
using Projeto.Models;
using Projeto.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

public class ConsumoControllerTests
{
    private readonly Mock<MongoDbService> _mongoDbMock;
    private readonly Mock<RedisCacheService> _redisCacheMock;
    private readonly ConsumoController _controller;

    public ConsumoControllerTests()
    {
        _mongoDbMock = new Mock<MongoDbService>();
        _redisCacheMock = new Mock<RedisCacheService>();
        _controller = new ConsumoController(_mongoDbMock.Object, _redisCacheMock.Object);
    }

    [Fact]
    public async Task GetConsumptions_ReturnsOk_WithCachedData()
    {
        var cachedData = "[{\"Device\":\"Device1\",\"Consumption\":50.5}]";
        _redisCacheMock.Setup(x => x.GetCacheAsync("consumptions")).ReturnsAsync(cachedData);

        var result = await _controller.GetConsumptions();

        var okResult = Assert.IsType<OkObjectResult>(result);
        Assert.Equal(cachedData, okResult.Value);
    }

    [Fact]
    public async Task GetConsumptions_ReturnsNotFound_WhenNoData()
    {
        _redisCacheMock.Setup(x => x.GetCacheAsync("consumptions")).ReturnsAsync((string)null);
        _mongoDbMock.Setup(x => x.GetConsumptionsAsync()).ReturnsAsync(new List<ConsumptionModel>());

        var result = await _controller.GetConsumptions();

        Assert.IsType<NotFoundObjectResult>(result);
    }

    [Fact]
    public async Task RegisterConsumption_ReturnsCreated()
    {
        var model = new ConsumptionModel { Device = "Device1", Consumption = 50.5 };

        var result = await _controller.RegisterConsumption(model);

  
        var createdResult = Assert.IsType<CreatedResult>(result);
        Assert.Equal(model, createdResult.Value);
    }
}
