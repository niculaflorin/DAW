using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daw.DTO
{
    public class BootViewModel
    {
        public int ID { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public byte[] Image { get; set; }
        public int InStockNum { get; set; }
        public int Size { get; set; }
    }
}
