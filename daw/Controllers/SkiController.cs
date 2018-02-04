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
    [Route("api/Ski")]
    public class SkiController : Controller
    {
        private IMapper _mapper;
        private AppDbContext dbContext;

        public SkiController(IMapper mapper, AppDbContext context)
        {
            this._mapper = mapper;
            this.dbContext = context;
        }

        [HttpGet]
        public IEnumerable<SkiViewModel> Get() {
            IEnumerable<SkiViewModel> list = this._mapper.Map<IEnumerable<SkiViewModel>>(this.dbContext.Skis.AsEnumerable());
            return list;
        }
          
        [HttpGet("{id}")]
        public SkiViewModel Get(int id) {
            var _ski = this._mapper.Map<SkiViewModel>(this.dbContext.Skis.Find(id));
            return _ski;
        }

        [HttpPost]
        public IActionResult Post([FromBody] SkiViewModel _ski) {
            if (ModelState.IsValid)
            {
                var ski = this._mapper.Map<Ski>(_ski);
                this.dbContext.Skis.Add(ski);
                this.dbContext.SaveChanges();
                return Ok();
            }
            else {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] SkiViewModel ski) {
            if (ModelState.IsValid)
            {
                var existingSki = this.dbContext.Skis.Find(id);
                if (existingSki == null)
                {
                    return NotFound();
                }
                else
                {
                    existingSki.Brand = ski.Brand;
                    existingSki.Image = ski.Image;
                    existingSki.InStockNum = ski.InStockNum;
                    existingSki.Model = ski.Model;
                    existingSki.Size = ski.Size;
                    this.dbContext.Skis.Update(existingSki);
                    this.dbContext.SaveChanges();
                    return Ok();
                }
            }
            else {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            this.dbContext.Skis.Remove(this.dbContext.Skis.Find(id));
            this.dbContext.SaveChanges();
            return Ok();
        }
    }
}