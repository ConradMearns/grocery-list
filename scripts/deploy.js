const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'main',
        repo: 'https://github.com/ConradMearns/grocery-list.git',
        user: {
            name: 'ConradMearns',
            email: 'conradmearns@pm.me'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)