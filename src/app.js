export class App
{
  constructor() 
  {
	    this.message = 'Katsetan veel kord!';
  }
  
  configureRouter(config, router) 
  {
      this.router = router; 
      config.title = 'Helitehnika'; 
      
      config.map([ 
    	   { route: ['', 'index'], name: 'pealeht', moduleId: 'navbar/index', nav: true, title:"Pealeht"},
    	   { route: 'regaette', name: 'ettevõtte_registeerimine', moduleId: 'navbar/ettevõtte_registeerimine', nav: true, title: 'Registeeru'},
    	   { route: 'regakas', name: 'kasutajaks_registeerimineee', moduleId: 'navbar/kasutajaks_registeerimine', nav: true},
           { route: 'lisa', name: 'lisauus', moduleId: 'navbar/lisauus', nav: true, title: 'Lisa'},
           { route: 'kuulutusedet', name: 'kuulutuse_detailvaade', moduleId: 'navbar/kuulutuse_detailvaade', title: 'Kuulutuse detailvaade', nav: true}
        ]);
  } 
}
