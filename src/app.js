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
    	   { route: ['', 'index'], name: 'pealeht', moduleId: 'navbar/index'},
    	   { route: 'regaette', name: 'ettevõtte_registeerimine', moduleId: 'navbar/ettevõtte_registeerimine', nav: true, title: 'Registeeri'},
    	   { route: 'regakas', name: 'kasutajaks_registeerimineee', moduleId: 'navbar/kasutajaks_registeerimine', nav: true, title: 'Registeerimine'},
           { route: 'lisa', name: 'lisauus', moduleId: 'navbar/lisauus', nav: true, title: 'Lisa'},
           { route: 'kuulutusedet', name: 'kuulutuse_detailvaade', moduleId: 'navbar/kuulutuse_detailvaade', title: 'Kuulutuse detailvaade', nav: true}
        ]);
  } 
}
