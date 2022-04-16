import { BlogData } from './blog-data';

export const WrittenBlogs: BlogData[] = [
  { id: 1, author: 'Burak',entryDate : new Date(), header: "About My New Angular App", text : "As you can already see i am trying to learn angular and trying to do some blog web site, why blog because you can add edit and delete blogs and other people can easly see what you did. As far as see angular hard to learn.\nHowever once you learned basic of the framework you can do basic things easily.",comments:{loading:false,list :[{writer:"Biri",text:"Saçma!"},{writer:"Burak",text : "Mantıklı!"}]}},
  { id: 2, author: 'Narco' ,entryDate : new Date(), header: "Who i am", text : "I am fictional character that not really exists! so who wrote that post ^^^^ Its Burak See post above for more detail",comments:{loading:false,list :[]}},
  { id: 3, author: 'Pokemon trainer',entryDate : new Date(),header: "What are pokemons", text : "We dont really know. we are reaaly are violent enought to make them fight with each other. And enjoy watching this.",comments:{loading:false,list :[]} },
  { id: 4, author: 'Legend',entryDate : new Date(), header: "About me",text : "Yes you heard right! I am legend. Do you have any further question?\nWrite down below.",comments:{loading:false,list :[]} },
  { id: 5, author: 'Silent_watcher' ,entryDate : new Date(), header: "When Quiet guy had it enought...." ,text : "Yes We quiet guy may seem silent but you should know that when quiet guy had it enought soiety shal fear. Why? beacuse thats when that guy gonna post some edgy statement and cause mass cringe in society!",comments:{loading:false,list :[]}},
];
