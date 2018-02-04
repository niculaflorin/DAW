using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;


namespace daw.Models
{
    public class RentalUser : IdentityUser
    {
        public List<Helmet> Helmets { get; set; }
        public List<Ski> Skis { get; set; }
        public List<SnowBoard> SnowBoards { get; set; }
        public List<Boot> Boots { get; set; }
        public List<SkiPole> SkiPoles { get; set; }
        public List<Sledge> Sledges { get; set; }

    }
}
