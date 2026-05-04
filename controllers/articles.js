const Article = require('../models/article');
const { NotFoundError, ForbiddenError } = require('../errors/CustomErrors'); 

module.exports.getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.send(articles))
    .catch(next);
};

module.exports.createArticle = (req, res, next) => {
  const { keyword, title, text, date, source, link, image } = req.body;
  const owner = req.user._id;

  Article.create({
    keyword, title, text, date, source, link, image, owner,
  })
    .then((article) => {
      const articleData = article.toObject();
      delete articleData.owner;
      res.status(201).send(articleData);
    })
    .catch(next);
};

module.exports.deleteArticle = (req, res, next) => {
  const { articleId } = req.params;

  Article.findById(articleId).select('+owner')
    .then((article) => {
      if (!article) {
        throw new NotFoundError('ID de artículo no encontrado');
      }

      if (article.owner.toString() !== req.user._id) {
        throw new ForbiddenError('No tienes permiso para eliminar este artículo');
      }

      return Article.findByIdAndDelete(articleId);
    })
    .then((removedArticle) => res.send(removedArticle))
    .catch(next);
};
