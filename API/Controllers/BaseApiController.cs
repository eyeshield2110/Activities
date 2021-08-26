using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {

        private IMediator _mediator;
        
        // _mediator will not be inherited, but Mediator will
        protected IMediator Mediator => _mediator ??= 
        HttpContext.RequestServices.GetService<IMediator>();

    }
}