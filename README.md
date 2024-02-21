# The project "Burger-Cheddar"

## Layout of the [layout](https://www.figma.com/file/IFv8loVtsbUjm6lGQFk9gC/landing?type=design&node-id=252-588&mode=design&t=8TkoP25j1vjXkRLz-0) "Burger-Cheddar"

### Link to the project:
https://slavawebdeveloper.github.io/burgerCheddar/

## About the project
The HTML code is completely written in accordance with the BEM methodology. The project includes html and scss (=> css), js. The problems related to the accessibility of the interface are taken into account.

A little logic has been written using js for:
  - site navigation;
  - currency changes (depending on the currency, the price is recalculated depending on the coefficient);
  - a little form check.

Documentation is described for each script. For example (scroll.js):
```
 Прокручивает страницу до указанного элемента с использованием плавного скроллинга.    
 @param {string} selector - Селектор элемента, до которого нужно прокрутить страницу.
```


## Installation

git clone  
https://github.com/SlavaWebDeveloper/burgerCheddar.git

npm install  
`npm install`

For local development, use:
`npm run dev` 

To build a project, use:
`npm run build`

## Stack
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## File Tree:
burger  
├── src  
│   ├── fonts  
│   │   └── ...  
│   ├── images  
│   │   ├── burger  
│   │   │   └── ...  
│   │   ├── favicon  
│   │   │   └── ...  
│   │   ├── icons  
│   │   │   └── ...  
│   │   └── ...   
│   ├── scripts  
│   │   └── currency.js  
│   │   └── form.js  
│   │   └── scroll.js  
│   │   └── main.js  
│   └── styles  
│   │   ├── blocks  
│   │   │   └── _button.scss  
│   │   │   └── _contact-us.scss  
│   │   │   └── _currency.scss  
│   │   │   └── _fieldset.scss  
│   │   │   └── _footer.scss  
│   │   │   └── _grid.scss  
│   │   │   └── _header.scss  
│   │   │   └── _hero.scss  
│   │   │   └── _inner.scss  
│   │   │   └── _product-card.scss  
│   │   │   └── _products.scss  
│   │   │   └── _section.scss  
│   │   │   └── _why-card.scss  
│   │   │   └── _why.scss  
│   │   └── style.scss  
│   │   └── _fonts.scss  
│   │   └── _globals.scss  
│   │   └── _media.scss  
│   │   └── _mixins.scss  
│   │   └── _normalize.scss  
│   │   └── _themes.scss  
│   │   └── _utils.scss  
│   │   └── _variables.scss  
│   └── index.html 
└── .gitignore  
└── gulpfile.js  
└── package-lock.json  
└── package.json  
└── README.md 
