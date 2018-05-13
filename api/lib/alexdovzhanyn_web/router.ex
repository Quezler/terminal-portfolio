defmodule AlexdovzhanynWeb.Router do
  use AlexdovzhanynWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", AlexdovzhanynWeb do
    pipe_through :api
  end
end
