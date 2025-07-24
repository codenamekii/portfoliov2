export interface Anime {
  title: string;
  altTitle?: string;
  href: string;
  imgName: string;
  starred?: boolean;
}

export const AnimeData: Anime[] = [
  {
    title: "Naruto",
    href: "https://myanimelist.net/anime/1735/Naruto__Shippuuden",
    imgName: "nrt",
    starred: true,
  },
  {
    title: "Shingeki no Kyojin",
    altTitle: "Attack on Titan",
    href: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
    imgName: "aot",
  },
  {
    title: "Boku no Hero Academia",
    href: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia",
    imgName: "bokhero",
  },
  {
    title: "One Punch Man",
    href: "https://myanimelist.net/search/all?q=one%20punch%20man&cat=all",
    imgName: "opm",
    starred: true,
  },
  {
    title: "One Piece",
    href: "https://myanimelist.net/search/all?q=One%20piece&cat=all",
    imgName: "onepiece",
    starred: true,
  },
  
  {
    title: "Sakamoto Days",
    href: "https://myanimelist.net/search/all?q=sakamoto%20days&cat=all",
    imgName: "sakamoto",
    starred: true,
  },
  {
    title: "Jujutsu Kaisen",
    href: "https://myanimelist.net/search/all?q=Jujutsu%20&cat=all",
    imgName: "jjk",
  },
  {
    title: "Demon Slayer",
    altTitle: "Kimetsu no Yaiba",
    href: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba",
    imgName: "demon",
    starred: true,
  },
  {
    title: "Sword Art Online",
    href: "https://myanimelist.net/anime/11757/Sword_Art_Online",
    imgName: "sao",
  },
  {
    title: "Chainsaw Man",
    altTitle: "Chainsaw Man",
    href: "https://myanimelist.net/anime/5114/Chainsaw_Man",
    imgName: "chainsaw",
    starred: true,
  },
];
