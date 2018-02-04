using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daw.Models
{
    public class Boot
    {
        public int ID { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public byte[] Image { get; set; }
        public int InStockNum { get; set; }
        public int Size { get; set; }
    }
}
