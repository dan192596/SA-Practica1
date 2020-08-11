import { Component, OnInit } from '@angular/core';
import { RestManagerService } from '../../app-service/rest-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
//https://cors-anywhere.herokuapp.com/
  url: string ="https://cors-anywhere.herokuapp.com/https://api.softwareavanzado.world/index.php"
  token: string ="texto"
  displayedColumns: string[] = ['id', 'name','actions'];
  dataSource:any;

  constructor(private restService: RestManagerService) { }

  getCredentials(){
    return {
      "grant_type":"client_credentials",
      "client_id":"sa",
      "client_secret":"fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745"
    }
  }
  
  generateToken(){
    const paramstoken = new Map<string, string>();
    // Contenido de pagina
    paramstoken.set('option', 'token');
    paramstoken.set('api', 'oauth2');
    new Promise(resolve => {
      setTimeout(() => {
        this.restService.getToken(this.url, '',this.getCredentials(),paramstoken).subscribe(
          response => {
            console.log("la respuesta es:")            
            console.log(response['access_token'])
            sessionStorage.setItem('token', response['access_token']);
        }, error => {
            console.log("El error es:")
            console.error(JSON.stringify(error));
        });
      }, 1000);
    });
  }
     
  ngOnInit(): void {
    if(sessionStorage.getItem('token')==null){
      this.generateToken()
    }
    
    console.log(sessionStorage.getItem('token'))

    const params = new Map<string, string>();
    // Contenido de pagina
    params.set('webserviceClient', 'administrator');
    params.set('webserviceVersion', '1.0.0');
    params.set('option', 'contact');
    params.set('api', 'hal');
    params.set('list[limit]','20')
    //params.set('filter[search]','201404268')
    

   new Promise(resolve => {
      setTimeout(() => {
        this.restService.getWithParams(this.url, '','',params).subscribe(
          response => {
            console.log(response['_embedded']['item']);
            this.dataSource = response['_embedded']['item']
        }, error => {
            console.error(JSON.stringify(error));
        });
      }, 1000);
    });
  }

}
