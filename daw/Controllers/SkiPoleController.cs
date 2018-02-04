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
    [Route("api/SkiPole")]
    public class SkiPoleController : Controller
    {
        private IMapper _mapper;
        private AppDbContext dbContext;

        public SkiPoleController(IMapper mapper, AppDbContext context)
        {
            this._mapper = mapper;
            this.dbContext = context;
        }

        [HttpGet]
        public IEnumerable<SkiPoleViewModel> Get()
        {
            IEnumerable<SkiPoleViewModel> list = this._mapper.Map<IEnumerable<SkiPoleViewModel>>(this.dbContext.SkiPoles.AsEnumerable());
            return list;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var _ski = this._mapper.Map<SkiPoleViewModel>(this.dbContext.SkiPoles.Find(id));
            return Ok();
        }

        [HttpPost]
        public IActionResult Post([FromBody] SkiPoleViewModel _skiPole)
        {
            if (ModelState.IsValid)
            {
                var skiPole = this._mapper.Map<SkiPole>(_skiPole);
                this.dbContext.SkiPoles.Add(skiPole);
                this.dbContext.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] SkiPoleViewModel skiPole)
        {
            if (ModelState.IsValid)
            {
                var existingSkiPole = this.dbContext.SkiPoles.Find(id);
                if (existingSkiPole == null)
                {
                    return NotFound();
                }
                else
                {
                    existingSkiPole.Brand = skiPole.Brand;
                    existingSkiPole.Image = skiPole.Image;
                    existingSkiPole.InStockNum = skiPole.InStockNum;
                    existingSkiPole.Model = skiPole.Model;
                    existingSkiPole.Size = skiPole.Size;
                    this.dbContext.SkiPoles.Update(existingSkiPole);
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
            this.dbContext.SkiPoles.Remove(this.dbContext.SkiPoles.Find(id));
            this.dbContext.SaveChanges();
            return Ok();
        }
    }
}