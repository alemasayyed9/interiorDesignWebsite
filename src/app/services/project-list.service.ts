import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  constructor() {}

  // Images Details

  galleryDetails = [
    {
      id: 1,
      imgName: 'Home Interior',
      img: './assets/website-images/home-01.JPG',
    },
    {
      id: 2,
      imgName: 'Fancy Kitchen Designs',
      img: './assets/website-images/kitchen-06.jpg',
    },
    {
      id: 3,
      imgName: 'Washroom Designs',
      img: './assets/website-images/washroom-06.JPG',
    },
    {
      id: 4,
      imgName: 'Salon And Spa Designs',
      img: './assets/img/salon-main.jpg',
    },
    {
      id: 5,
      imgName: 'Wardrobe Designs',
      img: './assets/img/home-4.jpg',
    },
//     {
//       id: 6,
//       imgName: 'Hospital and Clinic Interior',
//       img: './assets/img/hospital-main.jpg',
//     }
  ];

  // Home Interior Array Object

  homeInterior = [
    {
          id: 1,
          imgName: 'Home 1',
          img: './assets/website-images/home-01.JPG',
            },
     {
          id: 2,
          imgName: 'Home 2',
          img: './assets/website-images/home-01.1.JPG',
        },
        {
          id: 3,
          imgName: 'Home 3',
          img: './assets/website-images/home-01.2.JPG',
        },
        {
          id: 4,
          imgName: 'Home 4',
          img: './assets/website-images/home-01.3.JPG',
        },
        {
          id: 5,
          imgName: 'Home 5',
          img: './assets/website-images/home-01.4.JPG',
        },
        {
          id: 6,
          imgName: 'Home 6',
          img: './assets/website-images/home-02.1.jpg',
        },
        {
          id: 7,
          imgName: 'Home 7',
          img: './assets/website-images/home-02.2.jpg',
        },
     {
              id: 8,
              imgName: 'Home 8',
              img: './assets/website-images/home-03.1.JPG',
                },
         {
              id: 9,
              imgName: 'Home 9',
              img: './assets/website-images/home-03.2.JPG',
            },
            {
              id: 10,
              imgName: 'Home 10',
              img: './assets/website-images/home-03.3.JPG',
            },
            {
              id: 11,
              imgName: 'Home 11',
              img: './assets/website-images/home-04.1.jpg',
            },
            {
              id: 12,
              imgName: 'Home 12',
              img: './assets/website-images/home-04.2.jpg',
            },
            {
              id: 13,
              imgName: 'Home 13',
              img: './assets/website-images/home-04.3.jpg',
            },
            {
              id: 14,
              imgName: 'Home 14',
              img: './assets/website-images/home-04.4.jpg',
            },
    {
                  id: 15,
                  imgName: 'Home 15',
                  img: './assets/website-images/home-05.1.jpeg',
                    },
             {
                  id: 16,
                  imgName: 'Home 16',
                  img: './assets/website-images/home-05.2.jpeg',
                },
                {
                  id: 17,
                  imgName: 'Home 17',
                  img: './assets/website-images/home-05.3.jpeg',
                },
                {
                  id: 18,
                  imgName: 'Home 18',
                  img: './assets/website-images/home-06.1.jpg',
                },
                {
                  id: 19,
                  imgName: 'Home 19',
                  img: './assets/website-images/home-06.2.jpg',
                },
                {
                  id: 20,
                  imgName: 'Home 20',
                  img: './assets/website-images/home-06.3.jpg',
                },
                {
                  id: 21,
                  imgName: 'Home 21',
                  img: './assets/website-images/home-07.1.jpg',
                },

                {
                  id: 22,
                  imgName: 'Home 22',
                  img: './assets/website-images/home-07.2.jpg',
                },
                {
                  id: 23,
                  imgName: 'Home 23',
                  img: './assets/website-images/home-07.3.jpg',
                },
                {
                  id: 24,
                  imgName: 'Home 24',
                  img: './assets/website-images/home-07.4.jpg',
                },
                {
                  id: 25,
                  imgName: 'Home 25',
                  img: './assets/website-images/home-07.5.jpg',
                },
                {
                  id: 26,
                  imgName: 'Home 26',
                  img: './assets/website-images/home-07.6.jpg',
                },

    {
      id: 27,
      imgName: 'Home 27',
      img: './assets/img/home-main.jpg',
    },
    {
      id: 28,
      imgName: 'Home 28',
      img: './assets/img/home-1.jpg',
    },
    {
      id: 29,
      imgName: 'Home 29',
      img: './assets/img/home-2.jpg',
    },
    {
      id: 30,
      imgName: 'Home 30',
      img: './assets/img/home-3.jpg',
    },
    {
      id: 31,
      imgName: 'Home 31',
      img: './assets/img/home-4.jpg',
    },
    {
      id: 32,
      imgName: 'Home 32',
      img: './assets/img/home-1.jpg',
    }
  ];

  // Salon and Spa Array Object

  salon = [
    {
      id: 1,
      imgName: 'salon 1',
      img: './assets/img/salon-1.jpg',
    },
    {
      id: 2,
      imgName: 'salon 2',
      img: './assets/img/salon-2.jpg',
    },
    {
      id: 3,
      imgName: 'salon 3',
      img: './assets/img/salon-3.jpg',
    },
    {
      id: 4,
      imgName: 'salon 4',
      img: './assets/img/salon-4.jpg',
    },
    {
      id: 5,
      imgName: 'salon 5',
      img: './assets/img/salon-5.jpg',
    },
    {
      id: 6,
      imgName: 'salon 6',
      img: './assets/img/salon-6.jpg',
    },
  ];


   // Hospital and Clinic Array Object

  hospital = [
    {
      id: 1,
      imgName: 'Clinic 1',
      img: './assets/img/clinic-1.jpg',
    },
    {
      id: 2,
      imgName: 'Clinic 2',
      img: './assets/img/clinic-2.jpg',
    },
    {
      id: 3,
      imgName: 'Clinic 3',
      img: './assets/img/clinic-3.jpg',
    },
    {
      id: 4,
      imgName: 'Clinic 4',
      img: './assets/img/clinic-4.jpg',
    },
    {
      id: 5,
      imgName: 'Clinic 5',
      img: './assets/img/clinic-5.jpg',
    },
    {
      id: 6,
      imgName: 'Clinic 6',
      img: './assets/img/clinic-2.jpg',
    },
  ];

   // Washroom Array Object

  washroom = [
    {
      id: 1,
      imgName: 'washroom 1',
      img: './assets/img/washroom-main.jpg',
    },
    {
      id: 2,
      imgName: 'washroom 2',
      img: './assets/img/washroom-1.jpg',
    },
    {
      id: 3,
      imgName: 'washroom 3',
      img: './assets/img/washroom-2.jpg',
    },
    {
      id: 4,
      imgName: 'washroom 4',
      img: './assets/img/washroom-3.jpg',
    },
    {
      id: 5,
      imgName: 'washroom 5',
      img: './assets/img/washroom-main.jpg',
    },
    {
      id: 6,
      imgName: 'washroom 6',
      img: './assets/img/washroom-1.jpg',
    }
  ];

  kitchen = [
    {
      id: 1,
      imgName: 'kitchen 1',
      img: './assets/img/home-main.jpg',
    },
    {
      id: 2,
      imgName: 'kitchen 2',
      img: './assets/img/salon-main.jpg',
    },
    {
      id: 3,
      imgName: 'kitchen 3',
      img: './assets/img/hospital-main.jpg',
    },
  ];
  wardrobe = [
    {
      id: 1,
      imgName: 'wardrobe 1',
      img: './assets/img/home-main.jpg',
    },
    {
      id: 2,
      imgName: 'wardrobe 2',
      img: './assets/img/salon-main.jpg',
    },
    {
      id: 3,
      imgName: 'wardrobe 3',
      img: './assets/img/hospital-main.jpg',
    },
  ];
}
