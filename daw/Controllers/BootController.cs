using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using daw.Data;
using daw.DTO;
using daw.Models;
using System.Collections.Generic;
using System.Linq;


namespace daw.Controllers
{
    [Route("api/Boot")]
    public class BootController : Controller
    {
        private IMapper _mapper;
        private AppDbContext dbContext;

        public BootController(IMapper mapper, AppDbContext context)
        {
            this._mapper = mapper;
            this.dbContext = context;
        }


        [HttpGet]
        public IEnumerable<BootViewModel> Get()
        {
            IEnumerable<BootViewModel> list = this._mapper.Map<IEnumerable<BootViewModel>>(this.dbContext.Boots.AsEnumerable());
            return list;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var _boot = this._mapper.Map<BootViewModel>(this.dbContext.Boots.Find(id));
            return Ok();
        }

        [HttpPost]
        public IActionResult Post([FromBody] BootViewModel _boot)
        {
            if (ModelState.IsValid)
            {
                var boot = this._mapper.Map<Boot>(_boot);
                this.dbContext.Boots.Add(boot);
                this.dbContext.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] BootViewModel boot)
        {
            if (ModelState.IsValid)
            {
                var existingBoot = this.dbContext.Boots.Find(id);
                if (existingBoot == null)
                {
                    return NotFound();
                }
                else
                {
                    existingBoot.Brand = boot.Brand;
                    existingBoot.Image = boot.Image;
                    existingBoot.InStockNum = boot.InStockNum;
                    existingBoot.Model = boot.Model;
                    existingBoot.Size = boot.Size;
                    this.dbContext.Boots.Update(existingBoot);
                    this.dbContext.SaveChanges();
                    return Ok();
                }
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            this.dbContext.Boots.Remove(this.dbContext.Boots.Find(id));
            this.dbContext.SaveChanges();
            return Ok();
        }
    }
}