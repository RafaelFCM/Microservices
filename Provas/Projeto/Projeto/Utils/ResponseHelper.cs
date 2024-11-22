using Microsoft.AspNetCore.Mvc;

namespace Projeto.Utils
{
    public class ResponseHelper : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
