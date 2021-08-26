using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest // query -> return; command -> does not return
        {
            public Activity Activity { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity); // this method does not touch db yet -> no need to be async

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}