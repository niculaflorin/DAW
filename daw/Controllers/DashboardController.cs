using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using daw.Data;

namespace daw.Controllers
{
    [Authorize]
    [Route("api/Dashboard")]
    public class DashboardController : Controller
    {
        private IMapper _mapper;
        private AppDbContext dbContext;
    }
}