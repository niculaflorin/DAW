using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using daw.DTO;
using daw.Models;
using AutoMapper;

namespace daw.Utils
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() : this("My Profile")
        {
        }

        protected AutoMapperProfile(string profileName) : base(profileName) {
            CreateMap<Ski, SkiViewModel>();
            CreateMap<SkiViewModel, Ski>();
            CreateMap<SkiPole, SkiPoleViewModel>();
            CreateMap<SkiPoleViewModel, SkiPole>();
            CreateMap<Boot, BootViewModel>();
            CreateMap<BootViewModel, Boot>();

        } 
    }
}
