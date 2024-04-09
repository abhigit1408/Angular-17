import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Book } from './book';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeeComponent } from './employee/employee.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';


class abc {
  constructor() {
    console.log("Contructor abc called!");
  }

  show() {
    console.log("hello world!");
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EmployeeComponent, RouterLink, DataBindingComponent, TwoWayDataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  //used to give space between elements: default value is false
  preserveWhitespaces: true,

  encapsulation: ViewEncapsulation.ShadowDom,

  viewProviders: [abc, Book]
})


export class AppComponent {
  title = 'myAngularApp';
  myCountry = 'bharat';

  fontSize = 60;
  c: any;
  // cdata: any;

  // isLoggedIn: boolean = false;
  // isvalid = true;

  // num1 = 200;
  // num2 = 200;

  // name = "abhi";

  employees: any[] = [{
    "id": 1,
    "first_name": "Abramo",
    "last_name": "Bezley",
    "email": "abezley0@joomla.org",
    "gender": "Bigender"
  }, {
    "id": 2,
    "first_name": "Brock",
    "last_name": "Earlam",
    "email": "bearlam1@fc2.com",
    "gender": "Male"
  }, {
    "id": 3,
    "first_name": "Carla",
    "last_name": "Kretchmer",
    "email": "ckretchmer2@ibm.com",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Skelly",
    "last_name": "Trathen",
    "email": "strathen3@purevolume.com",
    "gender": "Male"
  }, {
    "id": 5,
    "first_name": "Bobbi",
    "last_name": "Fleury",
    "email": "bfleury4@archive.org",
    "gender": "Polygender"
  }, {
    "id": 6,
    "first_name": "Diane",
    "last_name": "Gonoude",
    "email": "dgonoude5@admin.ch",
    "gender": "Female"
  }, {
    "id": 7,
    "first_name": "Curr",
    "last_name": "Lind",
    "email": "clind6@free.fr",
    "gender": "Male"
  }, {
    "id": 8,
    "first_name": "Donn",
    "last_name": "Heinzel",
    "email": "dheinzel7@reference.com",
    "gender": "Male"
  }, {
    "id": 9,
    "first_name": "Jakob",
    "last_name": "Fossitt",
    "email": "jfossitt8@1688.com",
    "gender": "Male"
  }, {
    "id": 10,
    "first_name": "Corbin",
    "last_name": "O' Timony",
    "email": "cotimony9@google.fr",
    "gender": "Male"
  }, {
    "id": 11,
    "first_name": "Lucais",
    "last_name": "Filip",
    "email": "lfilipa@cloudflare.com",
    "gender": "Male"
  }, {
    "id": 12,
    "first_name": "Shantee",
    "last_name": "Feander",
    "email": "sfeanderb@goodreads.com",
    "gender": "Female"
  }, {
    "id": 13,
    "first_name": "Zenia",
    "last_name": "Tollet",
    "email": "ztolletc@wordpress.org",
    "gender": "Female"
  }, {
    "id": 14,
    "first_name": "Araldo",
    "last_name": "Stickford",
    "email": "astickfordd@businessinsider.com",
    "gender": "Male"
  }, {
    "id": 15,
    "first_name": "Rubetta",
    "last_name": "Procter",
    "email": "rproctere@photobucket.com",
    "gender": "Female"
  }, {
    "id": 16,
    "first_name": "Worthy",
    "last_name": "Son",
    "email": "wsonf@sohu.com",
    "gender": "Male"
  }, {
    "id": 17,
    "first_name": "Theodoric",
    "last_name": "Evesque",
    "email": "tevesqueg@behance.net",
    "gender": "Male"
  }, {
    "id": 18,
    "first_name": "Edsel",
    "last_name": "Allsworth",
    "email": "eallsworthh@google.com.hk",
    "gender": "Male"
  }, {
    "id": 19,
    "first_name": "Bernarr",
    "last_name": "Armer",
    "email": "barmeri@tripod.com",
    "gender": "Male"
  }, {
    "id": 20,
    "first_name": "Errick",
    "last_name": "Chene",
    "email": "echenej@state.tx.us",
    "gender": "Male"
  }, {
    "id": 21,
    "first_name": "Irwinn",
    "last_name": "Durn",
    "email": "idurnk@reverbnation.com",
    "gender": "Male"
  }, {
    "id": 22,
    "first_name": "Cordi",
    "last_name": "Rippingall",
    "email": "crippingalll@weibo.com",
    "gender": "Female"
  }, {
    "id": 23,
    "first_name": "Sergeant",
    "last_name": "Stourton",
    "email": "sstourtonm@howstuffworks.com",
    "gender": "Male"
  }, {
    "id": 24,
    "first_name": "Karee",
    "last_name": "Levane",
    "email": "klevanen@ameblo.jp",
    "gender": "Female"
  }, {
    "id": 25,
    "first_name": "Devin",
    "last_name": "Domnin",
    "email": "ddomnino@typepad.com",
    "gender": "Genderfluid"
  }, {
    "id": 26,
    "first_name": "Fleurette",
    "last_name": "Kynastone",
    "email": "fkynastonep@ftc.gov",
    "gender": "Female"
  }, {
    "id": 27,
    "first_name": "Lothario",
    "last_name": "Byrom",
    "email": "lbyromq@typepad.com",
    "gender": "Male"
  }, {
    "id": 28,
    "first_name": "Hollis",
    "last_name": "Muzzlewhite",
    "email": "hmuzzlewhiter@samsung.com",
    "gender": "Male"
  }, {
    "id": 29,
    "first_name": "Noam",
    "last_name": "Kornacki",
    "email": "nkornackis@comcast.net",
    "gender": "Male"
  }, {
    "id": 30,
    "first_name": "Barney",
    "last_name": "Spencelayh",
    "email": "bspencelayht@fda.gov",
    "gender": "Male"
  }, {
    "id": 31,
    "first_name": "Abbe",
    "last_name": "Binney",
    "email": "abinneyu@earthlink.net",
    "gender": "Male"
  }, {
    "id": 32,
    "first_name": "Ericha",
    "last_name": "Swetenham",
    "email": "eswetenhamv@nasa.gov",
    "gender": "Female"
  }, {
    "id": 33,
    "first_name": "Ailbert",
    "last_name": "Soans",
    "email": "asoansw@geocities.com",
    "gender": "Male"
  }, {
    "id": 34,
    "first_name": "Chrystel",
    "last_name": "Laver",
    "email": "claverx@miitbeian.gov.cn",
    "gender": "Non-binary"
  }, {
    "id": 35,
    "first_name": "Guglielma",
    "last_name": "Bremley",
    "email": "gbremleyy@cnet.com",
    "gender": "Female"
  }, {
    "id": 36,
    "first_name": "Farica",
    "last_name": "Castells",
    "email": "fcastellsz@cargocollective.com",
    "gender": "Female"
  }, {
    "id": 37,
    "first_name": "Lars",
    "last_name": "Buffey",
    "email": "lbuffey10@wikipedia.org",
    "gender": "Male"
  }, {
    "id": 38,
    "first_name": "Nicolina",
    "last_name": "Graveston",
    "email": "ngraveston11@netscape.com",
    "gender": "Female"
  }, {
    "id": 39,
    "first_name": "Candie",
    "last_name": "Ritchman",
    "email": "critchman12@arizona.edu",
    "gender": "Female"
  }, {
    "id": 40,
    "first_name": "Alejandro",
    "last_name": "Benois",
    "email": "abenois13@foxnews.com",
    "gender": "Male"
  }, {
    "id": 41,
    "first_name": "Armando",
    "last_name": "Tineman",
    "email": "atineman14@bloomberg.com",
    "gender": "Male"
  }, {
    "id": 42,
    "first_name": "Roman",
    "last_name": "Capitano",
    "email": "rcapitano15@wikia.com",
    "gender": "Male"
  }, {
    "id": 43,
    "first_name": "Darrell",
    "last_name": "Townley",
    "email": "dtownley16@independent.co.uk",
    "gender": "Male"
  }, {
    "id": 44,
    "first_name": "Gilda",
    "last_name": "Vanyukov",
    "email": "gvanyukov17@yolasite.com",
    "gender": "Female"
  }, {
    "id": 45,
    "first_name": "Sonni",
    "last_name": "Petzolt",
    "email": "spetzolt18@blogs.com",
    "gender": "Female"
  }, {
    "id": 46,
    "first_name": "Odette",
    "last_name": "Baynton",
    "email": "obaynton19@yelp.com",
    "gender": "Female"
  }, {
    "id": 47,
    "first_name": "Uriah",
    "last_name": "Olerenshaw",
    "email": "uolerenshaw1a@hhs.gov",
    "gender": "Male"
  }, {
    "id": 48,
    "first_name": "Aaron",
    "last_name": "Glyn",
    "email": "aglyn1b@scribd.com",
    "gender": "Male"
  }, {
    "id": 49,
    "first_name": "Lanae",
    "last_name": "Coan",
    "email": "lcoan1c@reddit.com",
    "gender": "Female"
  }, {
    "id": 50,
    "first_name": "Orville",
    "last_name": "Kitteringham",
    "email": "okitteringham1d@npr.org",
    "gender": "Male"
  }, {
    "id": 51,
    "first_name": "Waiter",
    "last_name": "Hayton",
    "email": "whayton1e@prnewswire.com",
    "gender": "Male"
  }, {
    "id": 52,
    "first_name": "Corina",
    "last_name": "Withams",
    "email": "cwithams1f@live.com",
    "gender": "Non-binary"
  }, {
    "id": 53,
    "first_name": "Tanitansy",
    "last_name": "Pero",
    "email": "tpero1g@youtu.be",
    "gender": "Agender"
  }, {
    "id": 54,
    "first_name": "Hannah",
    "last_name": "Batterbee",
    "email": "hbatterbee1h@pagesperso-orange.fr",
    "gender": "Female"
  }, {
    "id": 55,
    "first_name": "Noach",
    "last_name": "Wigzell",
    "email": "nwigzell1i@dropbox.com",
    "gender": "Male"
  }, {
    "id": 56,
    "first_name": "Jaynell",
    "last_name": "Kunzel",
    "email": "jkunzel1j@patch.com",
    "gender": "Female"
  }, {
    "id": 57,
    "first_name": "Madella",
    "last_name": "Rupprecht",
    "email": "mrupprecht1k@wordpress.com",
    "gender": "Female"
  }, {
    "id": 58,
    "first_name": "Breanne",
    "last_name": "Corteney",
    "email": "bcorteney1l@newyorker.com",
    "gender": "Female"
  }, {
    "id": 59,
    "first_name": "Lorie",
    "last_name": "Roblin",
    "email": "lroblin1m@google.co.uk",
    "gender": "Female"
  }, {
    "id": 60,
    "first_name": "Felizio",
    "last_name": "Vanyutin",
    "email": "fvanyutin1n@youku.com",
    "gender": "Male"
  }, {
    "id": 61,
    "first_name": "Puff",
    "last_name": "Lilford",
    "email": "plilford1o@wired.com",
    "gender": "Male"
  }, {
    "id": 62,
    "first_name": "Perkin",
    "last_name": "Nutting",
    "email": "pnutting1p@cargocollective.com",
    "gender": "Male"
  }, {
    "id": 63,
    "first_name": "Muffin",
    "last_name": "Loncaster",
    "email": "mloncaster1q@globo.com",
    "gender": "Male"
  }, {
    "id": 64,
    "first_name": "Keelby",
    "last_name": "Izat",
    "email": "kizat1r@wisc.edu",
    "gender": "Genderfluid"
  }, {
    "id": 65,
    "first_name": "Moreen",
    "last_name": "Yarmouth",
    "email": "myarmouth1s@g.co",
    "gender": "Female"
  }, {
    "id": 66,
    "first_name": "Constanta",
    "last_name": "Althorp",
    "email": "calthorp1t@etsy.com",
    "gender": "Female"
  }, {
    "id": 67,
    "first_name": "Gert",
    "last_name": "Thombleson",
    "email": "gthombleson1u@loc.gov",
    "gender": "Female"
  }, {
    "id": 68,
    "first_name": "Genia",
    "last_name": "Stainer",
    "email": "gstainer1v@plala.or.jp",
    "gender": "Female"
  }, {
    "id": 69,
    "first_name": "Gerrard",
    "last_name": "Bradnock",
    "email": "gbradnock1w@who.int",
    "gender": "Genderfluid"
  }, {
    "id": 70,
    "first_name": "Todd",
    "last_name": "Sharnock",
    "email": "tsharnock1x@wordpress.org",
    "gender": "Male"
  }, {
    "id": 71,
    "first_name": "Farly",
    "last_name": "Hamblyn",
    "email": "fhamblyn1y@liveinternet.ru",
    "gender": "Male"
  }, {
    "id": 72,
    "first_name": "Kenon",
    "last_name": "Dufaur",
    "email": "kdufaur1z@discuz.net",
    "gender": "Polygender"
  }, {
    "id": 73,
    "first_name": "Sterne",
    "last_name": "Ricciardello",
    "email": "sricciardello20@mlb.com",
    "gender": "Male"
  }, {
    "id": 74,
    "first_name": "Jesus",
    "last_name": "Jellybrand",
    "email": "jjellybrand21@barnesandnoble.com",
    "gender": "Male"
  }, {
    "id": 75,
    "first_name": "Morly",
    "last_name": "Scothorne",
    "email": "mscothorne22@omniture.com",
    "gender": "Male"
  }, {
    "id": 76,
    "first_name": "Sarge",
    "last_name": "Skiggs",
    "email": "sskiggs23@mozilla.com",
    "gender": "Male"
  }, {
    "id": 77,
    "first_name": "Granger",
    "last_name": "Isgar",
    "email": "gisgar24@elpais.com",
    "gender": "Male"
  }, {
    "id": 78,
    "first_name": "Keir",
    "last_name": "Pech",
    "email": "kpech25@nationalgeographic.com",
    "gender": "Male"
  }, {
    "id": 79,
    "first_name": "Brendan",
    "last_name": "Pikett",
    "email": "bpikett26@mozilla.com",
    "gender": "Male"
  }, {
    "id": 80,
    "first_name": "Rafaellle",
    "last_name": "Oakinfold",
    "email": "roakinfold27@examiner.com",
    "gender": "Male"
  }, {
    "id": 81,
    "first_name": "Ashlin",
    "last_name": "Toping",
    "email": "atoping28@mashable.com",
    "gender": "Male"
  }, {
    "id": 82,
    "first_name": "Michael",
    "last_name": "Laterza",
    "email": "mlaterza29@aol.com",
    "gender": "Male"
  }, {
    "id": 83,
    "first_name": "Boote",
    "last_name": "Shute",
    "email": "bshute2a@storify.com",
    "gender": "Male"
  }, {
    "id": 84,
    "first_name": "Mauricio",
    "last_name": "Rozec",
    "email": "mrozec2b@geocities.com",
    "gender": "Male"
  }, {
    "id": 85,
    "first_name": "Mureil",
    "last_name": "Mocker",
    "email": "mmocker2c@adobe.com",
    "gender": "Female"
  }, {
    "id": 86,
    "first_name": "Renato",
    "last_name": "Binns",
    "email": "rbinns2d@goo.gl",
    "gender": "Male"
  }, {
    "id": 87,
    "first_name": "Hayden",
    "last_name": "Bisgrove",
    "email": "hbisgrove2e@posterous.com",
    "gender": "Male"
  }, {
    "id": 88,
    "first_name": "Orville",
    "last_name": "Face",
    "email": "oface2f@abc.net.au",
    "gender": "Male"
  }, {
    "id": 89,
    "first_name": "Nikolai",
    "last_name": "Guiden",
    "email": "nguiden2g@hostgator.com",
    "gender": "Polygender"
  }, {
    "id": 90,
    "first_name": "Falkner",
    "last_name": "Spittle",
    "email": "fspittle2h@hao123.com",
    "gender": "Male"
  }, {
    "id": 91,
    "first_name": "Luce",
    "last_name": "Speer",
    "email": "lspeer2i@utexas.edu",
    "gender": "Female"
  }, {
    "id": 92,
    "first_name": "Cristobal",
    "last_name": "Elderton",
    "email": "celderton2j@unesco.org",
    "gender": "Genderfluid"
  }, {
    "id": 93,
    "first_name": "Kacey",
    "last_name": "Zanetello",
    "email": "kzanetello2k@bandcamp.com",
    "gender": "Female"
  }, {
    "id": 94,
    "first_name": "Shaina",
    "last_name": "Keijser",
    "email": "skeijser2l@alexa.com",
    "gender": "Female"
  }, {
    "id": 95,
    "first_name": "Harmony",
    "last_name": "Gulberg",
    "email": "hgulberg2m@about.me",
    "gender": "Non-binary"
  }, {
    "id": 96,
    "first_name": "Lauri",
    "last_name": "Kobiela",
    "email": "lkobiela2n@tumblr.com",
    "gender": "Female"
  }, {
    "id": 97,
    "first_name": "Robbert",
    "last_name": "Pillans",
    "email": "rpillans2o@xing.com",
    "gender": "Male"
  }, {
    "id": 98,
    "first_name": "Adela",
    "last_name": "Lemin",
    "email": "alemin2p@e-recht24.de",
    "gender": "Female"
  }, {
    "id": 99,
    "first_name": "Tomi",
    "last_name": "Stenner",
    "email": "tstenner2q@imageshack.us",
    "gender": "Female"
  }, {
    "id": 100,
    "first_name": "Kirby",
    "last_name": "Shorey",
    "email": "kshorey2r@intel.com",
    "gender": "Male"
  }]
  // employees: any[] = [
  //   { name: 'Abhi', country: 'India' },
  //   { name: 'Tarun', country: 'India' },
  //   { name: 'Amit', country: 'USA' },
  //   { name: 'Bhushan', country: 'India' },
  //   { name: 'Mahesh', country: 'China' },
  //   { name: 'Aayush', country: 'Pakistan' },
  //   { name: 'Vishal', country: 'Poland' },

  // ]

  getColor(country: any) {
    switch (country) {
      case 'India': return 'blue';
      case 'USA': return 'red';
      case 'China': return 'pink';
      case 'Pakistan': return 'gold';
      case 'Poland': return 'green';
    }
    return null;
  }

  //employees: any;


  // Login() {
  //   this.isLoggedIn = true;
  // }

  // LogOut() {
  //   this.isLoggedIn = false;
  // }

  // onChange(val: any) {
  //   this.isvalid = val;
  // }

  // constructor(private _abc: abc, private _book: Book) {
  //   console.log("Constructor called");
  //   _abc.show();
  // }

  // //it calls only one method below it
  // @HostListener('click',['$event'])
  // show(){
  //   alert('hello')
  //   console.log('sadfgsdfg')
  // }

  // getData(val: any) {
  //   this.cdata = val;
  // }

  currentPage = 1;
  itemsPerPage = 10;
  totalItems = this.employees.length;

  // Method to calculate total pages
  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Method to change the current page
  changePage(newPage: number) {
    if (newPage < 1 || newPage > this.totalPages) {
      return;
    }
    this.currentPage = newPage;
  }

  // Method to get employees for the current page
  getEmployeesForCurrentPage() {
    debugger;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.employees.slice(startIndex, endIndex);
  }



}
