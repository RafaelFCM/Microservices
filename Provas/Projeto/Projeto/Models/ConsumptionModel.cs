using Microsoft.AspNetCore.Mvc;

namespace Projeto.Models
{
    public class ConsumptionModel
{
    public Guid Id { get; set; }
    public string Device { get; set; }
    public double Consumption { get; set; }
    public DateTime Timestamp { get; set; }
}

}
