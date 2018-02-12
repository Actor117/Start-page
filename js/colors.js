$(function () {
    var c = {
            'red': ['b30000', '202D32'],
            'blue': ['1e6f6f', '202D32'],
            'green': ['007515', '203222'],
            'brown': ['6b420e', '322d20'],
            'current': 'blue',
        };

        $('body').toggle('fade')

        $('.white').on('click', function() {
            $(this).toggle('.hide')
            $('span').toggle('.hide')
        });

        function recoler(name) {
            $('.'+name+'').on('click', function() {
                $('.time').animate({'color': '#'+c[name][0]},200);
                $('input').animate({'background-color': '#'+c[name][0]},200);
                $('.site-box').animate({'background-color': '#'+c[name][0]},200);
                $('body').animate({'background-color': '#'+c[name][1]},200);
                $('.white').animate({'background-color': '#'+c[name][1]},200);
                $('.white').toggle('.hide')
                $('span').toggle('.hide')
//                 chrome.storage.sync.set({'current': name})
//                 console.log(c['current']);
            });
        }

        recoler('red');
        recoler('blue');
        recoler('green');
        recoler('brown');
    });
