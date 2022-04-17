import { BlogData } from './blog-data';

export const WrittenBlogs: BlogData[] = [
  {
    id: 1, author: 'Burak', entryDate: new Date(), header: "About My New Angular App", likes : 13, views : 71,
    text: "Hello everyone!\n\nAs you can already see i am trying to learn angular and also trying to do some blog web site, why blog because you can add edit and delete blogs and other people can easly see what you did. As far as i see angular is relatively hard to learn when compared to react. Maybe its just because of me that learned react first then compared it to angular or maybe not.\nHowever once you learned basic of the framework you can easily start to work on things.\nStay tuned for more information.\nCurrent state of the blog is i can view pre-defined blogs and see pre-defined comments. 3 comment for every \"read comment\" clicking. Also you can enter new comment. Likes and views is pre-defined now can't be changed.\n\n🥳 Now like button working. Likes are not persistent though.\n\n\nLike subscribe and leave a comment.\nHave nice day!!",
    comments: { loading: false, list: [
      { writer: "Biri", text: "Saçma!", submitDate: new Date('07 March 2022 19:22:30 GMT')}, 
      { writer: "Burak", text: "Mantıklı!",submitDate: new Date('24 Feb 2022 9:15:30 GMT')},
      { writer: "Burak", text: "Yaptıklarım yapacaklarıomın garantisidir.. ghgsdfsgh",submitDate: new Date('8 March 2022 21:10:00 GMT')},
      { writer: "Legend", text: "Amaç???",submitDate: new Date('8 March 2022 21:12:00 GMT')},
      { writer: "Narco", text: "Amaç ne",submitDate: new Date('13 March 2022 12:15:00 GMT')},
      { writer: "Pokemon trainer", text: "Arkadaşlar ben anlamadım amaç ne şimdi",submitDate: new Date('4 Apr 2022 17:42:00 GMT')},
      { writer: "Silent_watcher", text: "@Pokemon_trainer Boş işte",submitDate: new Date('5 Feb 2022 16:36:00 GMT')},
      { writer: "Burak", text: "cahiller 😭😭😭",submitDate: new Date('5 Feb 2022 18:03:00 GMT')}
    ]}
  },
  { id: 2, author: 'Narco', entryDate: new Date(), header: "Who i am", likes : 7, views : 64,
    text: "I am fictional character that not really exists! so who wrote that post ^^^^ Its Burak See post above for more detail", comments: { loading: false, list: []} 
  },
  { id: 3, author: 'Pokemon trainer', entryDate: new Date(), header: "What are pokemons", likes : 3, views : 65,
    text: "We dont really know. we are reaaly are violent enought to make them fight with each other. And enjoy watching this. Dont Worry they dont bleed so you can watch them fighting with whole family!", 
    comments: { loading: false, list: [
        { writer: "Biri", text: "Pokemon dövüşleri yasaklansın!", submitDate: new Date('07 Jan 2022 22:06:30 GMT')}, 
        { writer: "Burak", text: "Canilik ya",submitDate: new Date('24 Feb 2022 23:45:30 GMT')},
    ]}
  },
  { id: 4, author: 'Legend', entryDate: new Date(), header: "About me", likes : 1, views : 69,
    text: "Yes you heard right! I am legend. Do you have any further question?\nWrite down below.", comments: { loading: false, list: [] } 
  },
  { id: 5, author: 'Silent_watcher', entryDate: new Date(), header: "When Quiet guy had it enought....", likes : 3, views : 76,
    text: "Yes We quiet guy may seem silent but you should know that when quiet guy had it enought soiety shal fear. Why? beacuse thats when that guy gonna post some edgy statement and cause mass cringe in society!", comments: { loading: false, list: [] } 
  },
];
