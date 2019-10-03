function makeArticlesArray() {
    return [
      {
        id: 1,
        date_published: '2029-01-22T16:28:32.615Z',
        title: 'First test post!',
        style: 'How-to',
        content: 'asdfgawef'
      },
      {
        id: 2,
        date_published: '2100-05-22T16:28:32.615Z',
        title: 'Second test post!',
        style: 'News',
        content: 'agdsagf'
      },
      {
        id: 3,
        date_published: '1919-12-22T16:28:32.615Z',
        title: 'Third test post!',
        style: 'Listicle',
        content: 'asdfasdfasdf'
      },
      {
        id: 4,
        date_published: '1919-12-22T16:28:32.615Z',
        title: 'Fourth test post!',
        style: 'Story',
        content: 'asdfasdf'
      },
    ];
  }
  
  module.exports = {
    makeArticlesArray,
  }