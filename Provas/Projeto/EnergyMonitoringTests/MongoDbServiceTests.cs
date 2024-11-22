using Xunit;
using Moq;
using MongoDB.Driver;
using Projeto.Models;
using Projeto.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

public class MongoDbServiceTests
{
    private readonly MongoDbService _service;
    private readonly Mock<IMongoCollection<ConsumptionModel>> _collectionMock;

    public MongoDbServiceTests()
    {
        _collectionMock = new Mock<IMongoCollection<ConsumptionModel>>();
        var mockDb = new Mock<IMongoDatabase>();
        mockDb.Setup(db => db.GetCollection<ConsumptionModel>("Consumptions", null)).Returns(_collectionMock.Object);

        var mockClient = new Mock<IMongoClient>();
        mockClient.Setup(client => client.GetDatabase("TestDb", null)).Returns(mockDb.Object);

        _service = new MongoDbService(new Mock<Microsoft.Extensions.Configuration.IConfiguration>().Object);
    }

    [Fact]
    public async Task InsertConsumptionAsync_InsertsData()
    {
        var data = new ConsumptionModel { Device = "Device1", Consumption = 50.5 };

        await _service.InsertConsumptionAsync(data);

        _collectionMock.Verify(x => x.InsertOneAsync(data, null, default), Times.Once);
    }
}
