# basic-tubro

A cloneable template for bootstrapping a Turborepo with a GraphQL server and Next.js app.

### Developer `make` commands

- `setup` &mdash; Installs dependencies and copies dotfiles

### Main `make` commands

- `start` &mdash; Starts all services
- `stop` &mdash; Stops all services
- `status` &mdash; Displays status of running services
- `logs` &mdash; Tails running service logs

#### Helpful aliases

- `up` &mdash; Alias for the `start` command
- `down` &mdash; Alias for the `stop` command
- `restart` &mdash; Alias to `stop` and `start` all services

### Service-specific `make` commands

- `psql` &mdash; Tunnels into running PostgreSQL service
