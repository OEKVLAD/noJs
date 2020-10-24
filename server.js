import {TwingEnvironment, TwingLoaderFilesystem} from 'twing';
import pkg from 'express';
import {dataBaseService} from "./dataBase.service.js";
import {router} from "./router.js";
import path from "path";

const app = new pkg();
const port = process.env.NODE_PORT || 3001;

const templatePath = './templates';

app.get('/scripts/:file', function (req, res) {
  res.set('Content-Type', 'text/javascript');
  res.set('Cache-control', `public, max-age=1`);

  let options = {
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(path.resolve("static/", req.params.file), options, function (err) {
    if (err) {
      res.redirect("/404")
    }
  })
});

app.get('/style/:file', function (req, res) {

  res.set('Content-Type', 'text/stylesheet');
  res.set('Cache-control', `public, max-age=1`);

  let options = {
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  console.log(path.resolve("static/", req.params.file));

  res.sendFile(path.resolve("static/", req.params.file), options, function (err) {
    if (err) {
      console.log(err);
      // res.redirect("/404")
    }
  })

});

app.get('/image/:file', function (req, res) {
  res.set('Content-Type', 'image');
  res.set('Cache-control', `public, max-age=1`);

  let options = {
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(path.resolve("static/", req.params.file), options, function (err) {
    if (err) {
      res.redirect("/404")
    }
  })

});

app.get('/favicon', function (req, res) {
  res.set('Content-Type', 'image');
  res.set('Cache-control', `public, max-age=1`);

  let options = {
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(path.resolve("favicon.ico"), options, function (err) {
    if (err) {
      res.redirect("/404")
    }
  })

});

app.get('/', function (req, res) {
  const _router = new router();

  _router.controller("/", req.params)

  let loader = new TwingLoaderFilesystem(templatePath);
  let twig = new TwingEnvironment(loader);

  twig.render(_router.getViewsPath, _router.getData).then((output) => {
    res.end( output);
  });
});

app.get('/:controller', function (req, res) {
  const _router = new router();

  _router.controller(req.params.controller, req.params)

  let loader = new TwingLoaderFilesystem(templatePath);
  let twig = new TwingEnvironment(loader);

  twig.render(_router.getViewsPath, _router.getData).then((output) => {
    res.end( output);
  });
});

app.listen(port, () => {
  console.log('Node.js Express server listening on port '+port);
});