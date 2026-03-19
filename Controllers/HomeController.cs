using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
//using QuPic.Models;

namespace QuPic.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Home()
    {
        return View();
    }

    
}
