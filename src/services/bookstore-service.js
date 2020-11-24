export default class bookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Production-Ready Microservices",
        author: "Susan J. Fowler",
        price: 32,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
      },
      {
        id: 2,
        title: "Release It!",
        author: "Michael T. Nygard",
        price: 45,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg"
      }
    ];
  }
}