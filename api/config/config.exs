# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :alexdovzhanyn,
  ecto_repos: [Alexdovzhanyn.Repo]

# Configures the endpoint
config :alexdovzhanyn, AlexdovzhanynWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "HNAKMJJa92x0+b6OddwcjXinBVuexUQGDBXfP2hzh4AAvTdBGbJ1cf2lH1YkKRpU",
  render_errors: [view: AlexdovzhanynWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Alexdovzhanyn.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
