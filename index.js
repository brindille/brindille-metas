module.exports = {
  /**
   * Set titles (title tag + facebook and twitter metas)
   * @param {String} title
   */
  setTitle: function(title) {
    if (!title) return;

    document.title = title;
    var all = Array.prototype.slice.call(document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]'));
    if (!all.length) return;

    for (var i = 0, l = all.length; i < l; i++) {
      all[i].content = title;
    }
  },
  /**
   * Set descriptions (description, og:description and twitter:description metas)
   * @param {String} description
   */
  setDescription: function(description) {
    if (!description) return;

    var all = Array.prototype.slice.call(document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]'));
    if (!all.length) return;

    for (var i = 0, l = all.length; i < l; i++) {
      all[i].content = description;
    }
  },
  /**
   * Set share images (og:image and twitter:image:src metas)
   * @param {String} path
   */
  setShareImage: function(path) {
    if (!path) return;

    var all = Array.prototype.slice.call(document.querySelectorAll('meta[property="og:image"], meta[name="twitter:image:src"]'));
    if (!all.length) return;

    for (var i = 0, l = all.length; i < l; i++) {
      all[i].content = path;
    }
  }
};
