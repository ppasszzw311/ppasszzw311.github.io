//調整字體大小功能
//使用頁面的style.css或index.css要先設定body{font-size:unset}去覆蓋掉bs3原本的字體大小設定
//字體設定都要改rem
function normal() {
    localStorage.setItem('ftSize', 16);
    setFontSize()
}
function changeFontSize(size = 0) {
    let _nowsize = localStorage.getItem('ftSize');
    if (_nowsize == null) {
        _nowsize = 16;
    }
    _nowsize = Number(_nowsize) + Number(size);
    if (isNaN(_nowsize)) {
        _nowsize = 16;
    }
    localStorage.setItem('ftSize', _nowsize);
    setFontSize();
}
function setFontSize() {
    let _default = document.getElementsByTagName('html');
    let _nowsize = localStorage.getItem('ftSize');
    if (_nowsize == null) {
        _nowsize = 16;
    }
    for (let i = 0; i < _default.length; i++) {
        _default[i].style.fontSize = _nowsize + "px";
    }
}

function addonLoadEvent(_newfunction) {
    let oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = _newfunction;
    } else {
        window.onload = function() {
            if (oldOnload) {
                oldOnload();
            }
            _newfunction();
        }
    }
}

addonLoadEvent(setFontSize);

//bootstrap5-dropdown-ml-hack.js
(function($bs) {
    const CLASS_NAME = 'has-child-dropdown-show';
    $bs.Dropdown.prototype.toggle = function(_orginal) {
        return function() {
            document.querySelectorAll('.' + CLASS_NAME).forEach(function(e) {
                e.classList.remove(CLASS_NAME);
            });
            try
            {
                let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
                for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
                    dd.classList.add(CLASS_NAME);
                }
            }catch (e) {

            }


            return _orginal.call(this);
        }
    }($bs.Dropdown.prototype.toggle);

    document.querySelectorAll('.dropdown').forEach(function(dd) {
        dd.addEventListener('hide.bs.dropdown', function(e) {
            if (this.classList.contains(CLASS_NAME)) {
                this.classList.remove(CLASS_NAME);
                e.preventDefault();
            }
            e.stopPropagation(); // do not need pop in multi level mode
        });
    });

    // for hover
    document.querySelectorAll('.dropdown-hover, .dropdown-hover-all .dropdown').forEach(function(dd) {
        dd.addEventListener('mouseenter', function(e) {
            let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
            if (!toggle.classList.contains('show')) {
                $bs.Dropdown.getOrCreateInstance(toggle).toggle();
                dd.classList.add(CLASS_NAME);
                $bs.Dropdown.clearMenus();
            }
        });
        dd.addEventListener('mouseleave', function(e) {
            let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
            if (toggle.classList.contains('show')) {
                $bs.Dropdown.getOrCreateInstance(toggle).toggle();
            }
        });
    });
})(bootstrap);

//滾動 When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
    // Get the navbar
    var navbar = document.getElementById("scroll-navbar-second");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

    let fixedBar = document.getElementById("fixedBar");
    let fixedBarSticky = fixedBar.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
      if (window.pageYOffset >= fixedBarSticky - navbar.scrollHeight) {
        fixedBar.classList.add("sticky")
      } else {
        fixedBar.classList.remove("sticky");
      }
    }
    
    // 回到最頂
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }