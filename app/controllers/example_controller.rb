class ExampleController < ApplicationController
  def show
    @count ||= 1
  end
end
