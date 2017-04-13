



### Quickstart

1.  `bundle install`
2.  `rake db:create`
3.  `rake db:migrate`
4.  `rake db:seed`
5.  `shotgun config.ru`
6.  Open [http://localhost:9393/bands](http://localhost:9393/bands)

#### Running Tests
**Note**: Be sure to run `rake db:test:prepare` before running tests.

To run the entire suite of tests: `rspec`

To run a specific example: `rspec spec/band_spec.rb`


As needed, create models & migrations with the `rake` tasks:

```
rake generate:migration  # Create an empty migration in db/migrate, e.g., rake generate:migration NAME=create_tasks
rake generate:model      # Create an empty model in app/models, e.g., rake generate:model NAME=User
```

### Contributing

We would love for you to help make the skeleton more awesome, There are three ways to contribute:

1. Ask for a bug fix or enhancement!
2. Submit a pull request for a bug fix or enhancement!
3. Code review an open pull request!

Be prepared to give and receive specific, actionable, and kind feedback!
