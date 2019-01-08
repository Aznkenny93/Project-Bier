using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Project_Bier.Models;
using System.Linq;

namespace Project_Bier.Repository 
{
    /// <summary>
    /// Interface that describes what kind of methods a Order Repository class
    /// should have.
    /// 
    /// Depency injection is used for the repository pattern. Where we need the product repository
    /// we have a inject an instance of the concrete class: OrderRepository
    /// </summary>
    public interface IUserRepository
    {
        IEnumerable<WebshopUser> ListAllUsers();
    }
}