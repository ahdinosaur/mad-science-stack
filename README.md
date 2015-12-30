# mad-science-stack

** work in progress **

bleeding magic stack for [Craftworks](http://craftworks.enspiral.com)

still very much based on ["the business stack"](https://github.com/enspiral-craftworks/business-stack)

## stack

- task runner: [npm scripts](http://substack.net/task_automation_with_npm_run)
- client bundler: [browserify](https://github.com/substack/browserify-handbook)
  - es6/jsx transform: [babelify](https://www.npmjs.com/package/babelify)
  - css transform: [sheetify](https://www.npmjs.com/package/sheetify)
  - configuration: [evalify](https://www.npmjs.org/package/evalify)
  - bulk require: [bulkify](https://www.npmjs.org/package/bulkify)
- utility functions: [ramda](http://ramdajs.com/docs/)
- directory structure:
  - `/config/`
    - `/config/defaults.js`
    - `/config/{ NODE_ENV }.js`
  - `/app/`
    - symlink `/app` to `/node_modules/app`
      - `/app/package.json`
      - `/app/client.js`
      - `/app/server.js`
      - `/app/reducer.js`
      - `/app/routes.js`
      - `/app/thing/model.js`
      - `/app/thing/service.js`
      - `/app/thing/client.js`
      - `/app/thing/routes.js`
      - `/app/thing/actions.js`
      - `/app/thing/reducer.js`
      - `/app/thing/getters.js`
      - `/app/thing/components/thing-list.js`
      - `/app/thing/components/thing-list.css`
      - `/app/thing/spec/components/thing-list.js`
      - `/app/thing/index.feature`
      - `/app/thing/steps.js`
      - `/app/list-view/index.js`
    - only do relative requires if within module
    - otherwise, always require top-down (`require('app/things/model')`).
- data model: [tcomb](https://github.com/gcanti/tcomb)
- database: [knex](https://www.npmjs.com/package/knex)
- data validator: [tcomb-validator](https://github.com/gcanti/tcomb-validation)
- api service: [feathers-knex](https://www.npmjs.com/package/feathers-knex)
- api authentication: [feathers-authentication](https://www.npmjs.org/package/feathers-authentication)
- api transport: [primus](https://www.npmjs.com/package/primus)
- api client: [feathers-client](https://www.npmjs.com/package/feathers-client)
- client async actions: [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- client action creators: [redux-actions](https://www.npmjs.com/package/redux-actions)
- client action types: [create-action-types](https://www.npmjs.com/package/create-action-types)
- client action store: [redux](http://redux.js.org)
- client reducers: [redux-tcomb](https://github.com/gcanti/redux-tcomb)
- client getters: [reselect](https://www.npmjs.com/package/reselect)
- client router: [wayfarer](https://www.npmjs.com/package/wayfarer)
- client viewmodel: [vdux](https://www.npmjs.com/package/vdux)
- client views: [virtex-element](https://www.npmjs.com/package/virtex-element)
- test specs: [ava](https://www.npmjs.com/package/ava)
- test features: [cuke-tap](https://www.npmjs.com/package/cuke-tap)
- generators: [plop](https://github.com/amwmedia/plop)

refs: [0](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html), [1](http://blog.workshape.io/the-3ree-stack-react-redux-rethinkdb-express-js/)
