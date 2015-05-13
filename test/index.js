'use strict';

var expect = require('chai').expect;
var metas = require('../index');


describe('brindille-meta', function () {
  createMetaByName('twitter:title');
  createMetaByName('description');
  createMetaByName('twitter:description');
  createMetaByName('twitter:image:src');
  createMetaByProperty('og:description');
  createMetaByProperty('og:title');
  createMetaByProperty('og:image');

  it('set title', function() {
    metas.setTitle('Test title');
    expect(document.title).to.equal('Test title');
    expect(document.querySelector('meta[name="twitter:title"]').content).to.equal('Test title');
    expect(document.querySelector('meta[property="og:title"]').content).to.equal('Test title');
  });

  it('set description', function() {
    metas.setDescription('some description');
    expect(document.querySelector('meta[name="description"]').content).to.equal('some description');
    expect(document.querySelector('meta[name="twitter:description"]').content).to.equal('some description');
    expect(document.querySelector('meta[property="og:description"]').content).to.equal('some description');
  });

  it('set image', function() {
    metas.setShareImage('path/to/image.png');
    expect(document.querySelector('meta[name="twitter:image:src"]').content).to.equal('path/to/image.png');
    expect(document.querySelector('meta[property="og:image"]').content).to.equal('path/to/image.png');
  });
});

function createMetaByName(name) {
  var meta = document.createElement('meta');
  meta.name = name;
  document.head.appendChild(meta);
}

function createMetaByProperty(prop) {
  var meta = document.createElement('meta');
  meta.setAttribute('property', prop);
  document.head.appendChild(meta);
}